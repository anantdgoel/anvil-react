import React from 'react';
// TODO: Add Checkbox for student and grad date
const SignUp = () => (
	<div className="auth">
    <form className="topSpacing">
			<label>Sign into the Anvil</label>
			<input name="fname" type="fname" label="fname" className="topSpacing" placeholder="First Name"/>
			<input name="lname" type="lname" label="lname" className="topSpacing" placeholder="Last Name"/>
      <input name="email" type="email" label="email" className="topSpacing" placeholder="email"/>
      <input name="password" type="password" label="password" className="topSpacing" placeholder="password"/>
			<button type="submit">Sign In</button>
    </form>
	</div>
);

export default SignUp;
