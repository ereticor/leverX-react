import './miltiTags.scss'

export function createMultiTags(tags, parent, tagServe = false) {

  let tagsHTML = [...tags].reduce( (acc, tag) => acc + createTag(tag), '')

  parent.innerHTML = tagsHTML

  let checkboxes = parent.querySelectorAll('.checkbar__input')

  checkboxes.forEach(el => {
    el.addEventListener('click', () => {
      el.parentNode.classList.toggle('checkbar__label_checked')
    })
  })
  
  function createTag(text) {
  
    let tag = `<label class="checkbar__label">
                 <input class="checkbar__input" type="checkbox">${text}
               </label> `
  
    return tag
  }
}