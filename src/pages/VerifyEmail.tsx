import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiInstance from "../utils/axios";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  const uid = searchParams.get("uid");
  const otp = searchParams.get("otp");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await apiInstance.get(
          `/verify-email/?uid=${uid}&otp=${otp}`
        );

        if (response.status === 200) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [uid, otp, navigate]);

  return (
    <div>
      {status === "loading" && <p>Confirming your email, please wait...</p>}
      {status === "success" && (
        <div>
          <h2>Email Confirmed!</h2>
          <p>Your email has been successfully confirmed. You can now log in.</p>
          <button
            onClick={() => navigate("/login")}
            className="uk-button uk-button-primary"
          >
            Go to Login
          </button>
        </div>
      )}
      {status === "error" && (
        <div>
          <h2>Confirmation Failed</h2>
          <p>
            Sorry, we couldn't confirm your email. The confirmation link might
            be invalid or expired.
          </p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
