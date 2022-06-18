import axios from "axios"

export const BACKEND_IP = "192.168.1.112"

export const GLOBAL_URL_PREFIX = `http://${BACKEND_IP}:9000/api/v1/`

const request = axios.create({
  baseURL: GLOBAL_URL_PREFIX,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default request
