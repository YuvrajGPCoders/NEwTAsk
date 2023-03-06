import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { SessionStorage } from "../SessionStorage/SessionStorage";
const pageSize = 2;
export const useOverlay = () => {
  const [paginatedPosts, setpaginatedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const getOverlays = (body) => {
    let user = SessionStorage.get("user");
    user = JSON.parse(user);
    console.log("user", user);
    setLoading(true);
    axios({
      url: "https://survey.gpcoders.dev/api/v1/overlays",
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
      body: {},
    })
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setpaginatedPosts(_(response.data).take(pageSize).value());
      })
      .catch((err) => {
        const message = err.response.data.message;
        setLoading(false);
        setError(typeof message === "object" ? message : [message]);
      });
  };
  return { loading, error, data, paginatedPosts, pageSize, setpaginatedPosts, getOverlays };
};

export const useAddOverlay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const addOverlay = (body) => {
    let user = SessionStorage.get("user");
    user = JSON.parse(user);
    console.log('body', body)
    setLoading(true);
    axios({
      url: "https://survey.gpcoders.dev/api/v1/overlays",
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
      data: body,
    })
      .then((response) => {
        console.log('succesfully creted', response)
        setLoading(false);
        setData(response.data);
        if (response.data === response.data) {
          alert("successfully !")
        } else null
      })
      .catch((err) => {
        const message = err.response.data.message;
        setLoading(false);
        setError(typeof message === "object" ? message : [message]);
      });
  };
  return { loading, error, data, addOverlay };
};




