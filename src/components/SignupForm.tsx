import styled from "styled-components";

const StyledSignupForm = styled.form`
  gap: 1.25rem;
`;

function SignupForm() {
  return (
    <StyledSignupForm className="uk-flex uk-flex-column">
      <input className="uk-input" type="email" placeholder="Email" />
      <input className="uk-input" type="password" placeholder="Password" />
      <input
        className="uk-input"
        type="password"
        placeholder="Confirm Password"
      />
      <button className="uk-button uk-button-primary">Signup</button>
    </StyledSignupForm>
  );
}

export default SignupForm;
