import ReactTooltip from 'react-tooltip';

import './popExplanation.scss'

const explanationReg = new RegExp(/$!!!/)

interface IPopExplanation {
  content: string[];
  type?: string;
}


const PopExplanation = ({content, type}: IPopExplanation) => {
  return (
    <>
      <div data-tip="React-tooltip" className={`tooltip__icon ${type ? type : ""}`}>?</div>
      <ReactTooltip place="top" type="light" effect="solid" className="tooltip__window">
        {content.map((text, index) => (
          <p key={`content ${index}`} className={`tooltip__text ${text.match(explanationReg) ? "bold" : ""}`}>{text}</p>
        ))}
      </ReactTooltip>
    </>
  )
}

export default PopExplanation