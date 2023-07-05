// Environment variables with default values
const env = {
  CONTACT_REQUEST_API_URL: process.env.REACT_APP_CONTACT_REQUEST_API_URL ?? "http://localhost:3000/contact/send",
  CONTACT_REQUEST_API_KEY: process.env.REACT_APP_CONTACT_REQUEST_API_KEY ?? "API_KEY"
};

export default env;