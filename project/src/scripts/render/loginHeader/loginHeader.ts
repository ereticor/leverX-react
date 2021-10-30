export function createLoginHeader() {

  let userImg = JSON.parse(localStorage.getItem('logged')).picture

  let head = document.querySelector('.head')

  let headBtn = head.querySelector('.head__btn')

  headBtn?.remove()

  let logInWrapper = document.createElement('div')
  logInWrapper.classList.add('head__login')

  logInWrapper.innerHTML = `
    <button class="head__btn login__create">Create a Post</button>
    <img class="login__user" src="${userImg}" title="click to log out">
  `

  let postBtn = logInWrapper.querySelector('.login__create')

  postBtn.addEventListener('click', () => {
    window.location = 'article.html#createPost'
  })

  let userProfile = logInWrapper.querySelector('.login__user')

  userProfile.addEventListener('click', () => {
    localStorage.removeItem('logged')
    setTimeout(() => {
      window.location.reload()
    }, 500)
  })

  head.append(logInWrapper)
}