const confirmationInfo = {
  warnings: {
    tooEarly: 'Please submit your request at least two weeks before the desired start date.',
    onlyHolidays: 'The selected interval includes only public holidays or weekend days. Please review the selected dates.',
    alreadyCreated: 'It looks like you already have a request for the same period. Please check the dates of your request.',
    weekLimit: 'We know you must be tired. But please consider shoter vacation. How about 2 weeks?',
    noWarnings: null,
  },
  info: {
    tooEarly: 'Would you like to confirm the request with the dates as suggested below?',
    onlyHolidays: null,
    alreadyCreated: null,
    weekLimit: null,
    noWarnings: 'Please confirm creating a new vacation request:',
  }
}

export default confirmationInfo