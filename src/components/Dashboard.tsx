import React, { useEffect, useState } from 'react';
import { auth } from '../services/auth';
import '../styles/Dashboard.css';

interface User {
  email: string;
  uid: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({ email: user.email || '', uid: user.uid });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Dashboard;