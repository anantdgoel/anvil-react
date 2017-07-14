import React from 'react';

const ResetPassword = () => (
	<div className="auth">
    <form className="topSpacing">
			<label>Reset your password</label>
      <input name="password" type="password" label="password" className="topSpacing" placeholder="password"/>
			<input name="password" type="password" label="password" className="topSpacing" placeholder="confirm password"/>
			<button type="submit">Sign In</button>
    </form>
	</div>
);

export default ResetPassword;
