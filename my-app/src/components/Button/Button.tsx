import "./button.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  IClass: string; 
  text: string;
}

const Button = ({ IClass, type, text, clickHandler, ...otherProps }: IButton) => {
  return (
    <button
    className={`btn form__btn btn_${IClass}`}
    type={type || 'button'}
    onClick={clickHandler ? clickHandler : undefined}
    {...otherProps}
    >
      {text}
    </button>
  );
};

export default Button;
