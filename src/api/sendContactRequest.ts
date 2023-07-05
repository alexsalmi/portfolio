import axios from 'axios';
import config from '../assets/config';

interface IFormValues {
  name: string,
  email: string,
  phone: string,
  message: string
};

/**
 * Axios call to make a REST API call to my utilities api, to send the contact request
 */
export const sendContactRequest = async (values: IFormValues) => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.CONTACT_REQUEST_API_URL, values, {
        headers: {
          "x-api-key": config.CONTACT_REQUEST_API_URL
        }
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};