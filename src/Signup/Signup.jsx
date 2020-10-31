import React from 'react';

function Signup() {
  return (
    <div className="Signup">
      <form>
        <div>
          <label>Username</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Password</label> <input type="password" name="password" required />
        </div>
        <div>
          <label>Password Confirmation</label> <input type="password" name="passwordConfirmation" required />
        </div>
        <div>
          <input type="submit" value='Sign Up' />
        </div>
      </form>
    </div>
  );
}

export default Signup;