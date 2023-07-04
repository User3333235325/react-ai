import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/auth';
import '../styles/Signup.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signup(email, password);
      history.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;