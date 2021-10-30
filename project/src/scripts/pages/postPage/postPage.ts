import { createMultiTags } from '../../render/miltiTags/multiTags'
// import { getURL } from '../../'
import './postPage.scss'

/**
 * renders post page with form for new article creation on server
 * @param   {array} tags        array for creation of tags wrapper
 * @event                       input file checker for images preview
 * @event                       add story button for creating new subTitle
 * @event                       cancel & submit buttons for form sending
 * @override                    replaces footer with it's own for form
 * @return  {nodeElement}       created article node
*/
export function createPostPage({ tags }) {
  const main = document.querySelector('.main')

  let postTemplate = `
  <div class="main__create__wrapper wrapper">
    <form class="main__create">
      <label class="create__cover__wrapper">
        <input type="file" class="create__cover" accept="image/*" required>
        <img src="#" alt="uploaded" class="create__preview">
        <span>+</span> Add Cover
      </label>
      <h6 class="create__head">Enter the title of your article</h6>
      <input type="text" class="create__title create__text" placeholder="Enter Title" required>
      <div class="create__sub__wrapper">
      </div>
      <h6 class="create__head">Add tag information</h6>
      <div class="create__tags"></div>
    </form>
  </div>
  `

  main.innerHTML = postTemplate

  let fileInput = main.querySelector('.create__cover')

  let filePreview = main.querySelector('.create__preview')

  fileInput.addEventListener('change', function() {
    preview(this)
  })

  function preview(input) {
    let reader = new FileReader()

    reader.readAsDataURL(input.files[0])

    reader.addEventListener('load', () => {
      filePreview.src = reader.result
      filePreview.classList.add('show')

      filePreview.parentElement.classList.add('show')
    })
  }

  let subWrapper = main.querySelector('.create__sub__wrapper')

  createStory()

  function createStory() {
    let subStory = document.createElement('div')
    subStory.classList.add('create__sub__story')
  
    let subTemplate = `
      <h6 class="create__head">Enter the subtitle of your article</h6>
      <input type="text" class="create__sub create__text" placeholder="Enter Subtitle" required>
      <h6 class="create__head">Tell your story...</h6>
      <textarea class="create__area" rows="25" required></textarea>
      <button class="create__btn btn">Add new block</button>
    `

    subStory.innerHTML = subTemplate

    subWrapper.append(subStory)

    let addBtn = subStory.querySelector('.create__btn')

    addBtn.addEventListener('click', changeStatus)

    function changeStatus() {

      if (!subStory.nextElementSibling) {
        createStory()
        addBtn.classList.add('remove__story')
        addBtn.innerText = 'Remove next block'
      } else {
        if (subWrapper.lastElementChild === subStory.nextElementSibling) {
          addBtn.classList.remove('remove__story')
          addBtn.innerText = 'Add new block'
        }
        subStory.nextElementSibling?.remove()
      }

    }

  }

  let tagsWrapper = main.querySelector('.create__tags')

  createMultiTags(tags, tagsWrapper, true)

  const foot = document.querySelector('.foot__wrapper')
  foot.remove()

  const form = main.querySelector('.main__create')

  let formFoot = document.createElement('div')
  formFoot.classList.add('form__foot')

  formFoot.innerHTML = `
    <button class="btn btn_cancel">Cancel</button>
    <button class="btn btn_submit" type="submit">Publish</button>
  `

  let cancelBtn = formFoot.querySelector('.btn_cancel')

  cancelBtn.addEventListener('click', () => {
    window.location = 'index.html'
  })

  form.append(formFoot)

  form.addEventListener('submit', (e) => {

    e.preventDefault()

    if (form.querySelectorAll('.checkbar__label_checked').length > 1) {

      let newPost = createPOST(form)
  
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newPost
      }
  
      getURL(`createPost`, formStatus, options)

      function formStatus() {
        alert('success')
      }
    }
  })


  function createPOST(form) {
    let obj = {
      
      title: form.querySelector('.create__title').value.trim(),
      
      content: [],
      
      picture: filePreview.src,
      
  
      author: JSON.parse(localStorage.getItem('logged')).name,
      
      date: Date.now(),
      
      keywords: []
      
    }

    let subTitles = form.querySelectorAll('.create__sub')
    let subTexts = form.querySelectorAll('.create__area')

    for (let i = 0; i < subTitles.length; i++) {
      obj.content.push(
        {
          head: subTitles[i].value.trim(),
          text: [subTexts[i].value.trim()]
        }
      )
    }

    let tags = form.querySelectorAll('.checkbar__label_checked')
  
    tags.forEach(tag => obj.keywords.push(tag.innerText.replaceAll(' ', '_')))

    return JSON.stringify(obj)

  }

}