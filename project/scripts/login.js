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

// const main = document.querySelector('.main')

// getURL('http://localhost:3228/getArticles?index=2', log)

// getURL('http://localhost:3228/sign?email=nicholswyatt@medicroix.com&password=DONJS5X6SXXF6H1BNWUMO4TVHND52784nlYHe', logIn)

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
  console.log(user)

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

function createLoginHeader() {

  let userImg = JSON.parse(localStorage.getItem('logged')).picture

  let head = document.querySelector('.head')

  let headBtn = head.querySelector('.head__sign')

  headBtn?.remove()

  let logInWrapper = document.createElement('div')
  logInWrapper.classList.add('head__login')

  logInWrapper.innerHTML = `
    <button class="head__sign login__create">Create a Post</button>
    <img class="login__user" src="${userImg}">
  `

  head.append(logInWrapper)
}

function createLoginPage() {
  let main = document.querySelector('.main')

  let headBtn = document.querySelector('.head__sign')

  headBtn?.remove()

  let template = `
  <div class="main__login__wrapper wrapper">
    <section class="main__login">
      <h3 class="main__login__head">Welcome to course</h3>
      <form class="main__login__form">
        <div class="form__input__wrapper">
          <input class="form__mail form__input" type="email" placeholder="E-mail" required>
        </div>
        <div class="form__input__wrapper">
          <input class="form__password form__input" type="password" placeholder="password" required>
        </div>
        <label class="form__show">
          <input type="checkbox">
          show password
        </label>
        <button class="form__submit" type="submit">login</button>
      </form>
    </section>
  </div>`

  main.innerHTML = template

  let form = main.querySelector('.main__login__form')

  let mailInput = form.querySelector('.form__mail')
  let passInput = form.querySelector('.form__password');

  [mailInput, passInput].forEach(el => {
    el.addEventListener('input', () => checkInput(el))
  })

  let checkbox = form.querySelector('.form__show input')
  checkbox.addEventListener('click', () => {

    if (passInput.type === 'password') {
      passInput.type = 'text'
    } else {
      passInput.type = 'password'
    }
  })


  form.method = 'GET'
  form.addEventListener('submit', (e) => {
    let check = (el) => el.parentElement.classList.contains('form__success')

    if (check(mailInput) && check(passInput)) {
      logIn(mailInput.value, passInput.value)
    } else {
      e.preventDefault()
    }
  })

  // form.action = getURL('http://localhost:3228/sign?email=nicholswyatt@medicroix.com&password=DONJS5X6SXXF6H1BNWUMO4TVHND52784nlYHe', saveUser)
}

function checkInput(input) {

  const inputValue = input.value.trim()

	if(inputValue === '') {
		setErrorFor(input, `${input.type} cannot be blank`)
	} else {
		setSuccessFor(input)
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement
    formControl.classList.add('form_error')
    formControl.classList.remove('form_success')
    formControl.setAttribute('data-message', message)
  
    formControl.classList.add('form_light')
    setTimeout(() => {
      formControl.classList.remove('form_light')
    }, 1000);
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('form_success')
    formControl.classList.remove('form_error')
  }

}

let sign = document.querySelector('.head__sign')
sign.addEventListener('click', () => {
  window.location = 'index.html#login'
  createLoginPage()
})