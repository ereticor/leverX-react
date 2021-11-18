import ReactTooltip from 'react-tooltip';

import './popExplanation.scss'

const explanationReg = new RegExp(/$!!!/)

interface PopExplanation {
  content: string[];
  type?: string;
}


const PopExplanation = ({content, type}: PopExplanation) => {
  return (
    <>
      <a data-tip="React-tooltip" className={`tooltip__icon ${type ? type : ""}`}>?</a>
      <ReactTooltip place="top" type="light" effect="solid" className="tooltip__window">
        {content.map((text, index) => (
          <p key={`content ${index}`} className={`tooltip__text ${text.match(explanationReg) ? "bold" : ""}`}>{text}</p>
        ))}
      </ReactTooltip>
    </>
  )
}

export default PopExplanation