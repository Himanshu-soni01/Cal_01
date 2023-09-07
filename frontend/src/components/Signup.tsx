// Importing required components
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Creating signup component
const Signup = () => {

  // Usesate hooks which initializs state value as an empty string
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  // Handlesignup function which performs some validations and calls backend server for storing data in database
  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("password and confirm password din'nt match");
      setPasswordsMatch(false);
      return;
    }
    const gmailRegex = /@jmangroup\.com$/i;

    // Test the input email against the regular expression
    if (!gmailRegex.test(email)) {
      alert('This email is not from JMAN domain.');
      return;
    }

    try {
      // Calling backend server here
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        // Passing user data to the server 
        body: JSON.stringify({ firstname, lastname, email, dob, password}),
      });

      const data = await response.json();
      console.log('Signed up successfully with ID:', data.id);
      alert("Registration successful");
      navigate('/');
    }

    // Catching occurring
    catch (error) {
      console.error('Error signing up:', error);
    }
  };


  return (
    <div className="auth-form">
      <h2>Sign Up</h2>

      {/* Clicking on submit it calls the function handleSignUp */}
      <form onSubmit={handleSignUp}>
        <input type="text" className="input-feild" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" className="input-feild" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" className="input-feild" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" className="input-feild" placeholder="date of birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <input type="password" className="input-feild" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" className="input-feild" placeholder=" confirm Password" value={confirmpassword} onChange={(e) => {
          setConfirmPassword(e.target.value);
          setPasswordsMatch(e.target.value === password);
        }} required />
        {!passwordsMatch && <p style={{ color: 'red' }}>passwords did'nt matched</p>}
        <button type="submit">Sign Up</button>
        <p>Already have an account <Link to="/">Login</ Link></p>
      </form>
    </div>
  );
};

export default Signup;