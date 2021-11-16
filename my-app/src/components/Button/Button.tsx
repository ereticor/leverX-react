import "./button.scss";

interface IButton {
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  Itype: "button" | "submit" | "reset";
  text: string;
}

const Button = ({ Itype, text, clickHandler }: IButton) => {
  return (
    <button className={`btn form__btn ${Itype}__btn`} type={Itype} onClick={clickHandler ? clickHandler : undefined}>
      {text}
    </button>
  );
};

export default Button;
