import axios from 'axios';
import { toast } from 'react-toastify'

axios.defaults.headers.common["token"] =
  "SFKHFzIHVZFHGYIRCudhcZTGrfhozuirhreuifregzroiczorfuie";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.timeout = 4000;

axios.interceptors.request.use( req => {
  console.log("REQUEST intercepted", req);
  return req;
});

axios.interceptors.response.use( null, error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    
    if(!expectedError) {
      console.log("Logging the error ", error);
      toast.error("An unexpected error occured");
    }
  
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
}