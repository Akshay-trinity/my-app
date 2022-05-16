import axios from "axios";

axios.defaults.baseURL = "localhost:3000/api/account/student";

// axios.defaults.headers = {
//   Authorization: Account.authBearerToken(),
//   'Content-Type': 'application/json',
// }

axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status >= 500) {
    // history.push("/internalserver")
    console.error("Interal server error");
  }

  return Promise.reject(error);
});

const httpRequest = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpRequest;
