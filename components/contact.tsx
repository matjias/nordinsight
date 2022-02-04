import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
        <h3>Contact</h3>
      <form>
        <div className={styles.basicinfo}>
          <div className={styles.nameinput}>
            <label>First name</label>
            <input
              name="firstname"
              placeholder="Enter your first name"
              type="text"
            />
          </div>
          <div className={styles.nameinput}>
            <label>Lastname name </label>
            <input
              name="lastname"
              placeholder="Enter your last name"
              type="text"
            />
          </div>
          <div className={styles.emailinput}>
            <label>Email</label>
            <input
              name="email"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <div className={styles.roleinput}>
            <label>What is your role?</label>
            <div className={styles.roleoptions}>
            
              <label><input type="radio" name="role" />Health care professional</label>
              <label><input type="radio" name="role" />Medical Device Manufacturer</label>
              <label><input type="radio" name="role" />Department Manager</label>
              <label><input type="radio" name="role" />Other</label>
            </div>
          </div>
        </div>
        <div className={styles.message}>
            
        <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter you message here"
          />
        </div>
        <div className={styles.submitbtn}>

        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
