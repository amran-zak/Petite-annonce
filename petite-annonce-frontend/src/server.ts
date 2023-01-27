import axios from "axios";


export default axios.create({
  baseURL: "https://api-petite-annonce.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});