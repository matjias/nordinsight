import React, { useState } from 'react'
import styles from '../styles/Newsletter.module.css'
import Button, { ButtonType } from './general/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface SubscriberData {
  name: string
  email: string
  hospital: string
}

const Newsletter = () => {
  const [formData, setFormData] = useState<SubscriberData>({
    name: '',
    email: '',
    hospital: '',
  })
  const [isSent, setIsSent] = useState<boolean>(false)
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false)

  const [subId, setSubId] = useState('')

  const updateFormData = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const submitInfo = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/chimp/update', {
      method: 'POST',
      body: JSON.stringify({ id: subId, ...formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const id = (await res.json()).id

    setEmailSubmitted(false)
    setIsSent(true)
  }

  const submitEmail = async (e) => {
    setEmailSubmitted(true)
    const res = await fetch('/api/chimp/add', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const id = (await res.json()).id

    setSubId(id)
  }
  const popupContentRef = React.useRef(null);

  const handleOutsideClick = (e) => {
    if (popupContentRef.current && !popupContentRef.current.contains(e.target)) {
      setEmailSubmitted(false);
    }
  };  

  return (
    <div className={styles.wrapper}>
      {/* <p>
        Sign up for our newsletter to be one of the first to get access, when we
        launh for the public.
      </p> */}
      <div className={styles.inputWrapper}>
        <input
          className={styles.emailinput}
          required
          onChange={updateFormData}
          autoComplete="none"
          name="email"
          placeholder="Enter your email address"
          type="email"
        />
        <Button onClick={submitEmail} type={ButtonType.primary} small>
          <span>Subscribe</span>
        </Button>
      </div>
      {/* {isSent && <MessageSent name={formData.name} />} */}
      {emailSubmitted && (
         <div className={styles.popup} onClick={handleOutsideClick}>
         <div className={styles.box} ref={popupContentRef}>
            <form autoComplete="none">
              <button
                onClick={() => setEmailSubmitted(false)}
                className={styles.close}
              >
                <FontAwesomeIcon icon={faXmark} color="white" />
              </button>

              <h4>Tell us a bit more about yourself</h4>
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
                <Button type={ButtonType.primary} onClick={submitInfo}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Newsletter
