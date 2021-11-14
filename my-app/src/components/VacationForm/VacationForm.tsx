const VacationForm = () => {
  return (
    <div>
      <img src="own.svg" alt=""/>
      <form>
        <h2>New Request</h2>
        <select>
          <option value="1">Vacation leave</option>
          <option value="2">Sick leave</option>
          <option value="3">Own expense leave</option>
        </select>
        <div>
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
      </form>
    </div>
  )
}

export default VacationForm