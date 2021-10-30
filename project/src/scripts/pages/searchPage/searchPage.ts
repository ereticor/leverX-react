// import {  } from ''
import './searchPage.scss'

export function createFullPageSearch(articles) {
  const main = document.querySelector('.main')

  let hashTag = (window.location.hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]

  let tag = hashTag.replaceAll('_', ' ')

  let template = `
    <div class="main__articles__wrapper wrapper main__search__wrapper">
      <section class="main__articles">
        <h3 class="main__articles__head">Searching by tag : ${tag || 'All'}</h3>
        <div class="main__articles__search">
          <input type="search" class="search__input" placeholder="Search for article">
        </div>
        <ul class="articles__list">
        </ul>
      </section>
    </div>`

  main.innerHTML = template

  let searchBar = main.querySelector('.search__input')

  let pageList = main.querySelector('.articles__list')

  searchBar.addEventListener('input', searchSingleTag)

  function searchSingleTag(articles) {

    function inputSearch(articles) {
      pageList.innerHTML = ''
      loadArticles(articles, pageList, true)
    }
  
    getURLthrottle(`getArticles?tags=${tag}&title=${searchBar.value.trim() || ''}`, inputSearch)

  }

  searchSingleTag(articles)

}