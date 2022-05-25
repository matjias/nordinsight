import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import MessageSent from "./message-sent";
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSent, setIsSent] = useState<boolean>(false);

  const updateFormData = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const send = async (e) => {
    e.preventDefault();
    console.log(formData);
    const mailData = {
      sender: formData.firstname + " " + formData.lastname,
      senderMail: formData.email,
      recipients: ["info@nordinsight.com"],
      subject: `Message from ${formData.role} ${
        formData.firstname + " " + formData.lastname
      }`,
      body: formData.message,
    };
    const res = await fetch("/api/mail/send", {
      method: "POST",
      body: JSON.stringify(mailData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSent(true);
  };

  return (
    <div className={styles.wrapper}>
      {isSent && <MessageSent name={formData.firstname} />}

      {!isSent && (
        <React.Fragment>
          <h3>Get in touch</h3>
          <p>
            Are you interested in learning more or want to collaborate? We&apos;d
            love to hear from you! Contact us on{" "}
            <a href="mailto:info@nordinsight.com">info@nordinsight.com</a> or
            through the form below.
          </p>
          <form autoComplete="none" onSubmit={send}>
            <div className={styles.basicinfo}>
              <div className={styles.nameinput}>
                <label>First name</label>
                <input
                  onChange={updateFormData}
                  autoComplete="none"
                  name="firstname"
                  placeholder="Enter your first name"
                  type="text"
                />
              </div>
              <div className={styles.nameinput}>
                <label>Last name </label>
                <input
                  onChange={updateFormData}
                  autoComplete="none"
                  name="lastname"
                  placeholder="Enter your last name"
                  type="text"
                />
              </div>
              <div className={styles.emailinput}>
                <label>Email</label>
                <input
                  onChange={updateFormData}
                  autoComplete="none"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                />
              </div>
              <div className={styles.roleinput}>
                <label>What is your role?</label>
                <div className={styles.roleoptions}>
                  <label>
                    <input
                      onChange={updateFormData}
                      type="radio"
                      name="role"
                      value="Health care professional"
                    />
                    Health care professional
                  </label>
                  <label>
                    <input
                      onChange={updateFormData}
                      type="radio"
                      name="role"
                      value="Medical Device Manufacturer"
                    />
                    Medical Device Manufacturer
                  </label>
                  <label>
                    <input
                      onChange={updateFormData}
                      type="radio"
                      name="role"
                      value="Department Manager"
                    />
                    Department Manager
                  </label>
                  <label>
                    <input
                      onChange={updateFormData}
                      type="radio"
                      name="role"
                      value="Other"
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.message}>
              <label>Message</label>
              <textarea
                onChange={updateFormData}
                name="message"
                placeholder="Enter you message here"
              />
            </div>
            <div className={styles.submitbtn}>
              <button type="submit">Submit &#8594;</button>
            </div>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default Contact;
