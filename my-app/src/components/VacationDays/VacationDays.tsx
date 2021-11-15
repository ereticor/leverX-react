import "./vacationDays.scss";

const VacationDays = () => {
  return (
    <div className="days__wrapper wrapper">
      <h2 className="days__head heading">Vacation Days</h2>
      <div className="days__info">
        <p className="info__somechich">Available</p>
        <span className="info__currDays">147</span>
      </div>
      <div className="info__details">
        <p className="details__title">more details</p>
        </div>
    </div>
  )
}

export default VacationDays