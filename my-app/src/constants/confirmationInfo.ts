const confirmationInfo = {
  warnings: {
    tooEarly: 'Please submit your request at least two weeks before the desired start date.',
    onlyHoliday: 'The selected interval includes only public holidays or weekend days. Please review the selected dates.',
    alreadyCreated: 'It looks like you already have a request for the same period. Please check the dates of your request.',
    weekLimit: 'We know you must be tired. But please consider shoter vacation. How about 2 weeks?',
  },
  info: {
    noWarnings: 'Please confirm creating a new vacation request:',
    tooEarly: 'Would you like to confirm the request with the dates as suggested below?',
  }
}

export default confirmationInfo