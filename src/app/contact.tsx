import { useEffect, useState } from 'react';
import validator from 'validator'
import { Puff } from 'react-loading-icons';
import { BsCheck2 } from 'react-icons/bs';
import { sendContactRequest } from '../api/sendContactRequest';
import '../styles/contact.css';

interface IErrorDetails {
  error: boolean,
  message: string
};

interface IFormErrors {
  name: IErrorDetails,
  email: IErrorDetails,
  phone: IErrorDetails,
  message: IErrorDetails,
  general: IErrorDetails
};

// Progress states when submitting the requests
type Progress = "idle" | "loading" | "success" | "failed";

/**
 * Contact page
 */
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultErrors: IFormErrors = {
    name: {
      error: false,
      message: ""
    },
    email: {
      error: false,
      message: ""
    },
    phone: {
      error: false,
      message: ""
    },
    message: {
      error: false,
      message: ""
    },
    general: {
      error: false,
      message: ""
    }
  };

  // State variables
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState(defaultErrors);
  const [progress, setProgress] = useState<Progress>("idle");

  const submit = () => {
    // Input validation / error handling
    let failed: boolean = false;
    let currErrors: IFormErrors = defaultErrors;

    if (formValues.name.length < 1) {
      failed = true;
      currErrors = { ...currErrors, name: { error: true, message: "Please enter your name" } };
    }
    if (formValues.email.length < 1) {
      failed = true;
      currErrors = { ...currErrors, email: { error: true, message: "Please enter your email" } };
    }
    else if (!validator.isEmail(formValues.email)) {
      failed = true;
      currErrors = { ...currErrors, email: { error: true, message: "Email is invalid" } };
    }
    if (formValues.phone.length > 0 && !validator.isMobilePhone(formValues.phone)) {
      failed = true;
      currErrors = { ...currErrors, phone: { error: true, message: "Phone number is invalid" } };
    }
    if (formValues.message.length < 1) {
      failed = true;
      currErrors = { ...currErrors, message: { error: true, message: "Please enter a message" } };
    }

    // If any of the input validation fails, display the errors
    if (failed) {
      setErrors(currErrors);
      setProgress("failed");
      return;
    }

    setProgress("loading");

    // Call contact request api and display the correspending response state
    sendContactRequest(formValues)
      .then(() => {
        setProgress("success");
      })
      .catch(() => {
        setErrors({ ...currErrors, general: { error: true, message: "Something went wrong, please try again" } })
        setProgress("failed");
      });
  }

  const updateFormValue = (name: keyof typeof errors, value: string) => {
    // Update value in form field
    setFormValues({
      ...formValues,
      [name]: value
    });

    setProgress("idle");

    // If this field has an error, remove it
    if (errors[name].error) {
      setErrors({
        ...errors,
        [name]: {
          error: false,
          message: ""
        }
      })
    }

    // If there is a general error, remove it
    if (errors.general.error) {
      setErrors({
        ...errors,
        general: {
          error: false,
          message: ""
        }
      })
    }
  }

  return (
    <div className="contact-root" >
      <p className="contact-title">Contact Me</p>

      <div className="contact-form">
        <p className="form-label">Name*</p>
        <input type="text"
          className={errors.name.error ? "form-textbox form-textbox-error" : "form-textbox"}
          value={formValues.name}
          placeholder="Enter your name"
          disabled={progress === "loading"}
          onChange={(event) => updateFormValue("name", event.target.value)}
        />
        {errors.name.error &&
          <p className="error-message">{errors.name.message}</p>
        }

        <p className="form-label">Email*</p>
        <input type="text"
          className={errors.email.error ? "form-textbox form-textbox-error" : "form-textbox"}
          value={formValues.email}
          placeholder="Enter your email"
          disabled={progress === "loading"}
          onChange={(event) => updateFormValue("email", event.target.value)}
        />
        {errors.email.error &&
          <p className="error-message">{errors.email.message}</p>
        }

        <p className="form-label">Phone Number</p>
        <input type="number"
          className={errors.phone.error ? "form-textbox form-textbox-error" : "form-textbox"}
          value={formValues.phone}
          placeholder="Enter your phone number"
          disabled={progress === "loading"}
          onChange={(event) => updateFormValue("phone", event.target.value)}
        />
        {errors.phone.error &&
          <p className="error-message" >{errors.phone.message}</p>
        }

        <p className="form-label">Message*</p>
        <textarea rows={5}
          className={errors.message.error ? "form-textbox form-textarea form-textbox-error" : "form-textbox form-textarea"}
          value={formValues.message}
          placeholder="Enter your message"
          disabled={progress === "loading"}
          onChange={(event) => updateFormValue("message", event.target.value)}
        />
        {errors.message.error &&
          <p className="error-message" >{errors.message.message}</p>
        }
        {errors.general.error &&
          <p className="error-message-general" >{errors.general.message}</p>
        }

        <button className={progress === "idle" ? "submit-button" : "submit-button submit-button-disabled"}
          disabled={progress !== "idle"}
          onClick={submit}
        >
          {progress === "loading" ? <><Puff stroke="var(--color-primary)" className="submit-button-icon" /> Sending...</>
            : progress === "success" ? <><BsCheck2 className="submit-button-icon" /> Message Sent!</>
              : "Send Message"
          }
        </button>

      </div>
    </div >
  );
};

export default Contact;