// app/components/page/login.tsx
import React from 'react';
import styles from './login.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles['login-container']}>
      <form className={styles['login-form']}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
