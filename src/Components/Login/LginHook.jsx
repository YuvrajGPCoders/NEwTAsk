import { useState } from "react";
import axios from "axios";
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const login = (body) => {
    setLoading(true);
    axios
      .post("https://survey.gpcoders.dev/api/v1/auth/sign-in", body)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        const message = err.response.data.message;
        setLoading(false);
        setError(typeof message === "object" ? message : [message]);
      });
  };
  return { loading, error, data, login };
};
