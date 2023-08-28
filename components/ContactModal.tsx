import React, { useState } from 'react'
import Select from 'react-select'
import { StylesConfig } from 'react-select'
import Image from 'next/image'
import MessageSent from './message-sent'
import styles from '../styles/ContactModal.module.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

interface OptionType {
  value: string
  label: string
}

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(128, 128, 128, 0.25)',
    border: state.isFocused
      ? '1px solid #1698E7'
      : '1px solid rgba(128, 128, 128, 0.25)',
    boxShadow: 'none',
    borderRadius: '0.3125rem',
    padding: '0.4rem 0.8rem',
    color: 'white',
    marginTop: '4px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    padding: '0',
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
  placeholder: (provided) => ({
    ...provided,
    padding: '0',
  }),

  option: (provided, state) => ({
    ...provided,
    padding: '0.75rem 1rem',
    margin: '0',
    fontSize: '1rem',
    backgroundColor: state.isFocused ? '#808080' : 'rgba(128, 128, 128, 0.25)',
    color: 'white',

    border: state.isFocused ? '1px solid rgba(128, 128, 128, 0.35)' : 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#3F3F3F',
    margin: '0',
    padding: '0',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white',
  }),
}

interface FormData {
  fullname: string
  email: string
  role: OptionType | null
  message: string
  trial: boolean
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const roleOptions: OptionType[] = [
    { value: 'Health care professional', label: 'Health care professional' },
    { value: 'Department Manager', label: 'Department Manager' },
    {
      value: 'Medical Device Manufacturer',
      label: 'Medical Device Manufacturer',
    },
    { value: 'Other', label: 'Other' },
  ]

  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    role: null,
    message: '',
    trial: false,
  })

  const [isSent, setIsSent] = useState<boolean>(false)

  if (!isOpen) return null

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleRoleChange = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      setFormData((prev) => ({ ...prev, role: selectedOption }))
    }
  }

  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const send = async (e) => {
    e.preventDefault()
    console.log(formData)
    const roleLabel = formData.role?.label || 'unknown role'

    const trialInterest = formData.trial
      ? '\n\nI would like to receive an invitation for a guest trial.'
      : ''

    const mailData = {
      sender: formData.fullname,
      senderMail: formData.email,
      recipients: ['info@nordinsight.com'],
      subject: `Message from ${roleLabel} ${formData.fullname}`,
      body: formData.message + trialInterest,
    }

    const res = await fetch('/api/mail/send', {
      method: 'POST',
      body: JSON.stringify(mailData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setIsSent(true)
  }

  return (
    <div className={styles.background} onClick={handleOutsideClick}>
      <div className={styles.wrapper}>
        {isSent && <MessageSent name={formData.fullname} />}
        <div className={styles.cross_icon} onClick={onClose}>
          <Image src="/cross_icon.svg" width={24} height={24} alt="" />
        </div>

        {!isSent && (
          <React.Fragment>
            <h3>Get in touch</h3>
            <p>
              Are you interested in learning more or want to collaborate?
              We&apos;d love to hear from you! Contact us on{' '}
              <a href="mailto:info@nordinsight.com">info@nordinsight.com</a> or
              through the form below.
            </p>
            <form autoComplete="none" onSubmit={send}>
              <div className={styles.nameinput}>
                <label>Full name</label>
                <input
                  onChange={updateFormData}
                  autoComplete="none"
                  name="fullname"
                  placeholder="Enter your full name"
                  type="text"
                />
              </div>
              <div className={styles.emailinput}>
                <label>Email</label>
                <input
                  onChange={updateFormData}
                  autoComplete="none"
                  name="email"
                  placeholder="Email your email"
                  type="email"
                />
              </div>
              <div className={styles.roleinput}>
                <label>What is your role?</label>

                <Select
                  options={roleOptions}
                  onChange={handleRoleChange}
                  placeholder="Select your role"
                  styles={customStyles}
                />
              </div>

              <div className={styles.message}>
                <label>Message</label>
                <textarea
                  onChange={updateFormData}
                  name="message"
                  placeholder="Enter you message here"
                />
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="trial"
                  name="trial"
                  className={styles.customCheckbox}
                  checked={formData.trial}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      trial: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="trial">
                  I would like to receive an invitation for a guest trial
                </label>
              </div>

              <div className={styles.submitbtn}>
                <button type="submit">Submit your message</button>
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default ContactModal
