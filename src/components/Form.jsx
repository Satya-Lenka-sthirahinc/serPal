// src/components/Form.js
import React from 'react';
import Input from './inputpage/Input';
import Button from './butoon/Button';
import ErrorMessage from './errormessage/ErrorMessage';

const Form = ({ isLogin, onSubmit, email, setEmail, password, setPassword, username, setUsername, error }) => {
  return (
    <form onSubmit={onSubmit}>
      {/* If Registering, show username field */}
      {!isLogin && (
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      )}
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
      <ErrorMessage message={error} />
    </form>
  );
};

export default Form;
