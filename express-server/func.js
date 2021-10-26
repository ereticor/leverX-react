export function requestTime(req, res, next) {
  req.requestTime = Date.now()

  next()
}

export function logger(req, res, next) {
  console.log(
    new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(req.requestTime)
  )

  next()
}

