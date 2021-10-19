const checkBoxes = document.querySelectorAll('.checkbar__input')

checkBoxes.forEach(el => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('checkbar__label_checked')
  })
})

const sliderWrapper = document.querySelector('.main__intro__slider')
const slider = document.querySelector('.slider__list')
const sliderItems = document.getElementsByClassName('slider__item')

const sliderBtns = document.querySelectorAll('.slider__btn')
const LeftBtn = sliderBtns[0]
const RightBtn = sliderBtns[1]

const pagination = document.querySelectorAll('.pagination__label input')

slide(slider, sliderItems, LeftBtn, RightBtn)

function slide(slider, items, left, right) {
  
  const sliderLength = items.length
  
  const firstClone = items[0].cloneNode(true)
  const lastClone = items[items.length - 1].cloneNode(true)
  
  slider.append(firstClone)
  slider.prepend(lastClone)
  
  let index = 1
  let transition = false

  left.addEventListener('click', () => transformSlide(-1))
  right.addEventListener('click', () => transformSlide(1))

  slider.addEventListener('transitionend', checkSLide)

  function transformSlide(dir) {
    slider.classList.add('slider__list_transition')

    if (!transition) {
      if (dir == 1) {
        slider.style.transform = `translateX(-${++index}00%)`
      } else {
        slider.style.transform = `translateX(-${--index}00%)`
      }
    }

    transition = true
  }

  function checkSLide() {
    slider.classList.remove('slider__list_transition')

    if (index == 0) {
      slider.style.transform = `translateX(-${sliderLength}00%)`
      index = sliderLength
    }

    if (index == sliderLength + 1) {
      slider.style.transform = `translateX(-${1}00%)`
      index = 1      
    }

    pagination[index - 1].checked = true

    transition = false
  }
}

// sliderBtns.forEach(btn => {
//   btn.addEventListener('click', changeSlide)
// })

// let i = 1
// function changeSlide(e) {
//   if (e.target === sliderBtns[0]) {
//     slider.style.transform = `translateX(-${--i}00%)`
//   } else {
//     slider.style.transform = `translateX(-${++i}00%)`
//   }
// }