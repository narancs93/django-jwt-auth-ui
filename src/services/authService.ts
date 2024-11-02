import SignupData from "../interfaces/SignupData";
import apiInstance from "../utils/axios";

export const signup = async (data: SignupData) => {
  const response = await apiInstance.post("signup/", data);
  return response.data;
};
