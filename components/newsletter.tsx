import React, { useState } from "react";
import styles from "./newsletter.module.css";
import MessageSent from "./message-sent";
import Button, { ButtonType } from "./general/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface SubscriberData {
  name: string;
  email: string;
  hospital: string;
}

const Newsletter = () => {
  const [formData, setFormData] = useState<SubscriberData>({
    name: "",
    email: "",
    hospital: "",
  });
  const [isSent, setIsSent] = useState<boolean>(false);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const [subId, setSubId] = useState("");

  const updateFormData = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submitInfo = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/chimp/update", {
      method: "POST",
      body: JSON.stringify({ id: subId, ...formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const id = (await res.json()).id;

    setEmailSubmitted(false);
    setIsSent(true);
  };

  const submitEmail = async (e) => {
    setEmailSubmitted(true);
    const res = await fetch("/api/chimp/add", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const id = (await res.json()).id;

    setSubId(id);
  };

  return (
    <div className={styles.wrapper}>
      <h5>Not a member yet? Join our newsletter</h5>
      {/* <p>
        Sign up for our newsletter to be one of the first to get access, when we
        launh for the public.
      </p> */}
      <div className={styles.email}>
        <input
          className={styles.emailinput}
          required
          onChange={updateFormData}
          autoComplete="none"
          name="email"
          placeholder="Enter your email address"
          type="email"
        />
        <Button onClick={submitEmail} type={ButtonType.submit}>
          <span>Subscribe</span>
          <Image src="/right-arrow 4.svg" height={20} width={20} />
        </Button>
      </div>
      {/* {isSent && <MessageSent name={formData.name} />} */}
      {emailSubmitted && (
        <div className={styles.popup}>
          <div className={styles.box}>
            <form autoComplete="none">
              <button
                onClick={() => setEmailSubmitted(false)}
                className={styles.close}
              >
                <FontAwesomeIcon icon={faXmark} color="white" />
              </button>
              <h5>Tell us a bit more about yourself</h5>
              <div className={styles.info}>
                <label>Name</label>
                <input
                  //   required
                  onChange={updateFormData}
                  autoComplete="none"
                  name="name"
                  placeholder="What is your full name?"
                  type="text"
                />
                <label>Hospital</label>
                <input
                  onChange={updateFormData}
                  autoComplete="none"
                  name="hospital"
                  placeholder="What Hospital are you associated with?"
                  type="text"
                />
              </div>
              <div className={styles.submitbtn}>
                <Button type={ButtonType.submit} onClick={submitInfo}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
