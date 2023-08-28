import styles from './Button.module.css'

export enum ButtonType {
  primary = 'primary',
  cancel = 'cancel',
  submit = 'submit',
  contact = 'contact',
}

const Button: React.FC<{
  value?: any
  onClick: Function
  className?: string
  type: ButtonType
  small?: boolean
}> = ({ value, onClick, children, className, type, small }) => {
  let allStyle = styles.all

  if (small) {
    allStyle = styles.small
  }

  return (
    <div
      className={`${className} ${allStyle} ${styles[type]}`}
      onClick={(e) => onClick(e, value)}
    >
      {children}
    </div>
  )
}

export default Button
