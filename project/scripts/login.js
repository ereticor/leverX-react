async function getURL(url, callback) {
  try {
    const response = await fetch(url)
    // console.log(response.headers.contentType)
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

getURL('http://localhost:3228/getArticles?index=2', log)

getURL('http://localhost:3228/sign?email=nicholswyatt@medicroix.com&password=DONJS5X6SXXF6H1BNWUMO4TVHND52784nlYHe', saveUser)


function saveUser(user) {
  localStorage.setItem('logged', JSON.stringify(user))
}

function checkLogged() {
  return !!localStorage.getItem('logged')
}

function logIn() {
  let authorized = checkLogged()

  if (authorized) {
    createLoginHeader()
  }
}

function createLoginHeader() {

  let userImg = JSON.parse(localStorage.getItem('logged')).picture

  let head = document.querySelector('.head')

  let headBtn = head.querySelector('.head__sign')

  headBtn.remove()

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

  headBtn.remove()

  let template = `
  <div class="main__login__wrapper wrapper">
    <section class="main__login">
      <h3 class="main__login__head">Welcome to course</h3>
      <form class="main__login__form">
        <input class="form__mail form__input" type="email" placeholder="E-mail" required>
        <input class="form__password form__input" type="password" placeholder="password" required>
        <label class="form__show">
          <input type="checkbox">
          show password
        </label>
        <button class="form__submit" type="submit">login</button>
      </form>
    </section>
  </div>`

  main.innerHTML = template
}

let sign = document.querySelector('.head__sign')
sign.addEventListener('click', () => {
  window.location = 'index.html#login'
  createLoginPage()
})