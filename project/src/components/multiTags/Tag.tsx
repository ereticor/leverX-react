import React from "react";

interface Props {
  text: string;
  clickHandler?: (tag: string) => void; 
  isChecked: boolean;
}

export default class Tag extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }
  render() {
    const { text, isChecked, clickHandler } = this.props;
    return (
      <label className={`checkbar__label ${isChecked ? 'checked' : ''}`}>
        <input className="checkbar__input" type="checkbox" checked={isChecked} onClick={() => {
          if (clickHandler) {
            clickHandler(text);
          }
        }}/>{text}
      </label> 
    );
  }
}