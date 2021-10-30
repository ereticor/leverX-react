import './loadBtn.scss'

export function createLoadBtn() {
  let btn = document.createElement('button')
  btn.classList.add('articles__load', 'btn')
  btn.innerText = "Load more"

  return btn
}