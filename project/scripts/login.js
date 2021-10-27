async function getURL(url, callback) {
  try {
    const response = await fetch(url)
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

// getURL('http://localhost:3228/getArticles?index=2', log)

logIn()

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

function checkLogged() {
  return !!localStorage.getItem('logged')
}

function logIn(mail, pass) {
  let authorized = checkLogged()

  if (authorized) {
    if (window.location.hash == '#login') {
      window.location= 'index.html'
    }
    createLoginHeader()
  } else if (mail && pass) {
    getURL(`http://localhost:3228/sign?email=${mail}&password=${pass}`, saveUser)
  }
}

let sign = document.querySelector('.head__sign')
sign?.addEventListener('click', () => {
  window.location = 'index.html#login'
})