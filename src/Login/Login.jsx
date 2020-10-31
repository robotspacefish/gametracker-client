import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = e => setUsername(e.target.value);
  const updatePassword = e => setPassword(e.target.value);

  const handleOnSubmit = e => {
    e.preventDefault();
    debugger
    console.log(e.target)

    // reset
    setUsername('');
    setPassword('');
  };

  return (
    <div className="Login">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Username</label> <input type="text" name="username" required onChange={updateUsername} />
        </div>
        <div>
          <label>Password</label> <input type="password" name="password" required onChange={updatePassword} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;