import axios from "axios";

axios.defaults.headers.common["token"] =
  "SFKHFzIHVZFHGYIRCudhcZTGrfhozuirhreuifregzroiczorfuie";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.timeout = 4000;
