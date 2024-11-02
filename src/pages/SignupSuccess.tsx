import { useNavigate } from "react-router-dom";

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Registration Successful!</h2>
      <p>
        Thank you for registering! We've sent an email with an activation link
        to your provided email address. Please check your inbox and click on the
        link to activate your account.
      </p>
      <p>
        If you don't receive an email within a few minutes, please check your
        spam folder or contact support.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="uk-button uk-button-primary"
      >
        Go to Login
      </button>
    </div>
  );
};

export default SignupSuccess;
