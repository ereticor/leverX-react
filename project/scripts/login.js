async function getURL(url, callback, options = null) {
  try {
    const response = await fetch(url, options)
    if (response.status >= 400) {
      throw response.status
    }
    const data = await response.json()
    callback(data)
  } catch (error) {
    callback(null, error)
  }
}

function log(data, error) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
}

const throttle = (func, ms) => {
  let lastFunc
  let lastTime
  return function() {
    const context = this
    const args = arguments
    if (!lastTime) {
      func.apply(context, args)
      lastTime = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
          if ((Date.now() - lastTime) >= ms) {
            func.apply(context, args)
            lastTime = Date.now()
          }
       }, ms - (Date.now() - lastTime))
    }
  }
}

const getURLthrottle = throttle(getURL, 1000)

logIn()

/**
 * saves user information in localStorage
 * @param   {object} user       user's info (without password) for localStorage
 * @param   {number} error      error status if user cant be founded in database
 * @see     {logIn}             runs to login when user is saved
*/
function saveUser(user, error) {
  if (error) {
    window.location = 'index.html#login'
    switch(error) {
      case 401:
        setTimeout(() => alert('wrong password'), 200)
        break
      case 404:
        setTimeout(() => alert('no such user'), 200)
        break
    }
    return
  }

  localStorage.setItem('logged', JSON.stringify(user))

  logIn()
}

/**
 * checks if user already logged in
 * @return  {boolean} true if user already logged
*/
function checkLogged() {
  return !!localStorage.getItem('logged')
}

/**
 * sends user's info to server side for validation
 * @param   {string} mail       user's email address
 * @param   {string} pass       user's password
 * @see     {checkLogged}       no futher server requests if user already logged in
 * @override                    replaces header log in button with createPost one and user's image
*/
function logIn(mail, pass) {
  let authorized = checkLogged()

  if (authorized) {
    if (window.location.hash == '#login') {
      window.location= 'index.html'
    }
    createLoginHeader()
  } else if (mail && pass) {
    getURLthrottle(`http://localhost:3228/sign?email=${mail}&password=${pass}`, saveUser)
  }
}

let sign = document.querySelector('.head__sign')
sign?.addEventListener('click', () => {
  window.location = 'index.html#login'
})