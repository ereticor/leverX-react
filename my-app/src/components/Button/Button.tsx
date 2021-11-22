import "./button.scss";

interface IButton {
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  Itype: string;
  text: string;
}

const Button = ({ Itype, text, clickHandler }: IButton) => {
  return (
    <button className={`btn form__btn btn_${Itype}`} onClick={clickHandler ? clickHandler : undefined}>
      {text}
    </button>
  );
};

export default Button;
