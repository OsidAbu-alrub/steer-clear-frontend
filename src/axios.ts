import axios from "axios"

const request = axios.create({
  baseURL: "http://192.168.1.64:9000/api/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default request
