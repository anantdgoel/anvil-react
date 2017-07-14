import React from 'react';

const Login = () => (
	<div className="auth">
    <form className="topSpacing">
			<label>Sign into the Anvil</label>
      <input name="email" type="email" label="email" className="topSpacing" placeholder="emal"/>
      <input name="password" type="password" label="password" className="topSpacing" placeholder="password"/>
			<button type="submit">Sign In</button>
    </form>
	</div>
);

export default Login;
