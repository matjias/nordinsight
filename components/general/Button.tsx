import styles from './Button.module.css'

export enum ButtonType {
    submit = 'submit',
    primary = 'primary',
    secondary = 'secondary', 
    tietary = 'tietary',
    cancel = 'cancel',
}

const Button: React.FC<{
    value?: any;
    onClick: Function;
    className?: string;
    type: ButtonType;
    small?: boolean;
}> = ({ value, onClick, children, className, type, small}) => {

    let allStyle = styles.all;

    if (small) {
        allStyle = styles.small;
    }

    return (
        <div className={`${className} ${allStyle} ${styles[type]}`} onClick={(e) => onClick(e, value)}>
            {children}
        </div>
    );
};

export default Button;
