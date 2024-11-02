import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import SignupData from "../interfaces/SignupData";
import SignupErrorResponse from "../interfaces/SignupErrorResponse";
import { signup } from "../services/authService";

const StyledSignupForm = styled.form`
  gap: 1.25rem;
`;

function SignupForm() {
  const { register, handleSubmit } = useForm<SignupData>();

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit: SubmitHandler<SignupData> = (data, event) => {
    event?.preventDefault();
    mutation.mutate(data);
  };

  const signupErrors = (mutation.error as AxiosError<SignupErrorResponse>)
    ?.response?.data;

  return (
    <StyledSignupForm
      className="uk-flex uk-flex-column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={`uk-input ${signupErrors?.email && "uk-form-danger"}`}
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {signupErrors?.email && (
        <div className="uk-alert-danger uk-padding-small">
          {signupErrors?.email}
        </div>
      )}
      <input
        className={`uk-input ${signupErrors?.password && "uk-form-danger"}`}
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {signupErrors?.password && (
        <div className="uk-alert-danger uk-padding-small">
          {signupErrors?.password}
        </div>
      )}
      <input
        className={`uk-input ${
          signupErrors?.confirm_password && "uk-form-danger"
        }`}
        type="password"
        placeholder="Confirm Password"
        {...register("confirm_password")}
      />
      {signupErrors?.confirm_password && (
        <div className="uk-alert-danger uk-padding-small">
          {signupErrors?.confirm_password}
        </div>
      )}
      <button className="uk-button uk-button-primary">Signup</button>
    </StyledSignupForm>
  );
}

export default SignupForm;
