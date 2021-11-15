import "./vacationForm.scss";

const VacationForm = () => {
  return (
    <div className="form__wrapper wrapper">
      <img src="own.svg" alt=""/>
      <form className="form">
        <h2 className="form__head heading">New Request</h2>
        <select className="form__select">
          <option value="1" className="form__option">Vacation leave</option>
          <option value="2" className="form__option">Sick leave</option>
          <option value="3" className="form__option">Own expense leave</option>
        </select>
        <div className="form__dates">
          <label>
            Start Date
          <input type="date"/>
          </label>
          <label>
            End Date
          <input type="date"/>
          </label>
          <label>
            Day(s)
          <input type="number"/>
          </label>
        </div>
        <div className="form__comment__wrapper">
          <h3 className="comment__head">Comment</h3>
          <textarea className="comment__input"></textarea>
        </div>
      </form>
    </div>
  )
}

export default VacationForm