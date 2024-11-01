import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

const StyledSignupForm = styled.form`
  gap: 1.25rem;
`;

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

function SignupForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <StyledSignupForm
      className="uk-flex uk-flex-column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="uk-input"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <input
        className="uk-input"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <input
        className="uk-input"
        type="password"
        placeholder="Confirm Password"
      />
      <button
        className="uk-button uk-button-primary"
        {...register("confirmPassword")}
      >
        Signup
      </button>
    </StyledSignupForm>
  );
}

export default SignupForm;
