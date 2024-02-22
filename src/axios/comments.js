import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3001/comments",
  timeout: 1500,
});

commentsAxios.interceptors.request.use(
    async config => {
      try{
        const response = awiat authApi.get('/user', {
            headers: {
                "Authorization": Bearer `${localStorage.getItem("accessToken")}`
            }
        })
      }  
    }
);

commentsAxios.interceptors.response.use(
  (response) => {
    console.log("요청 성공입니다.");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default commentsAxios;
