import React from 'react';

function Login() {
  return (
    <div className="Login">
      <form>
        <div>
          <label>Username</label> <input type="text" required />
        </div>
        <div>
          <label>Password</label> <input type="password" required />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;