// Importing required components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Creating login component
const Login = () => {
  // Usesate hooks which initializs state value as an empty string
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use navigate to programmatically navigate to a different page
  const navigate = useNavigate();

  // HandleLogin function which store user login credentials and calls the backend to check wheather they are registered users or not and based respponse
  // From server if the user exists then it navigates to user dashboard page
  const handleLogin = async (e: { preventDefault: () => void }) => {

    // Regular expression to check if the email is from Gmail domain
    const gmailRegex = /@jmangroup\.com$/i;

    // Test the input email against the regular expression
    if (!gmailRegex.test(email)) {
      alert('This email is not from JMAN domain.');
    }
    else {
      localStorage.setItem("user", JSON.stringify(email));
      e.preventDefault();
      try {
        // Calling backend server here
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          //passing login credentials to server for validation
          body: JSON.stringify({ email, password }),
        });
        console.log("RESPONSE_>",response.formData);
        
        // If response ok (user registered or exist) navigates to dashboard page
        if (response.ok) {
          const userData = await response.json();
          console.log(userData.message); 
          if(userData.success){
            navigate("/dashboard", { state: { user: userData } });
          } else{
            alert(userData.message);
          }

        } else {
          alert("Wrong")
          const errorData = await response.json();
          console.error("Error logging in:", errorData.error);
        }
      } catch (error) {
        // Catching occuring error
        console.error("Error logging in:", error);
      }
    };
  }

    return (
      <div className="auth-form">
        <h2>Login</h2>

        {/* Clicking on submit it calls the function handleLogin */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have account <Link to="/signup">Register here</Link>
          </p>
        </form>
      </div>
    );
  };

  export default Login;
