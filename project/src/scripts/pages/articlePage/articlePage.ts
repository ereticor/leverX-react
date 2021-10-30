import { createArticle } from '../../render/article/article'
import './articlePage.scss'

export function createFullPageArticle({ articles }) {
  
  let wrapper = document.createElement('div')
  wrapper.classList.add('main__paper__wrapper', 'wrapper')
  
  let section = document.createElement('section')
  section.classList.add('main__paper')
  
  let pagination = document.createElement('div')
  pagination.classList.add('paper__pagination')

  let paginationContent = `
    <a href="index.html" class="pagination__link">
      Home page
    </a>
    <span>
      <span>&gt;</span>Article
    </span>
  `

  pagination.innerHTML = paginationContent
    
  let article = createArticle(articles, 'article', true)
  
  section.append(pagination, article)

  wrapper.append(section)

  const main: Element | null = document.querySelector('.main')

  main.innerHTML = ''

  main.append(wrapper)
}