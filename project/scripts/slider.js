const sliderWrapper = document.querySelector('.main__intro__slider')
const slider = document.querySelector('.slider__list')
const sliderItems = document.getElementsByClassName('slider__item')

const sliderBtns = document.querySelectorAll('.slider__btn')

const pagination = document.querySelectorAll('.pagination__label input')

/**
 * creates infinite slider in choosed containers
 * @param   {nodeElement} slider       list container, in which cloned copies are created
 * @param   {nodeElement} sliderItems  list sliders, which will be copied for infinite effect
 * @param   {nodeElement} sliderBtns   buttons for slider scroll between all slides
 * @param   {nodeElement} pagination   pagination for slider scroll between non-copied slides
 * @event   {transitionend}            removes transition from slider when scrolls on copied slide, then scroll to non-copied one                 
 * @event   {setTimeout}               autoscrolls when there is no user interaction with slider within 3 seconds             
*/
slide(slider, sliderItems, sliderBtns, pagination)

function slide(slider, items, btns, pagination, index = 1) {
  
  const sliderLength = items.length
  
  const firstClone = items[0].cloneNode(true)
  const lastClone = items[items.length - 1].cloneNode(true)
  
  slider.append(firstClone)
  slider.prepend(lastClone)
  
  let transition = false
  let interacted = false
  
  const left = btns[0]
  const right = btns[1]
  
  left.addEventListener('click', (e) => transformSlide(-1, e))
  right.addEventListener('click', (e) => transformSlide(1, e))
  
  for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener('click', (e) => {
      
      if (i + 1 == index) return
      
      transformSlide(i, e)
    })
  }
  
  slider.addEventListener('transitionend', checkSLide)
  
  function transformSlide(dir, e) {
    
    if (e) {
      interacted = true
      
      setTimeout(() => interacted = false, 3000)
    }
    
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
  
  function autoSlide() {
    if (!interacted) {
      transformSlide(1)
    }
    setTimeout(autoSlide, 3000)
  }
  
  autoSlide()
}