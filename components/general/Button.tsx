import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Button.module.css'

export enum ButtonType {
  primary = 'primary',
  cancel = 'cancel',
  submit = 'submit',
  secondary = 'secondary',
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
      {type === ButtonType.secondary && (
        <>
          <FontAwesomeIcon
          className={styles.faArrowRight}
            icon={faArrowRight}
            style={{ width: '16px', height: '16px' }}
          />
        </>
      )}
    </div>
  )
}

export default Button
