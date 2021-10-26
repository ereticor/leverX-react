const articleSection = document.querySelector('.main__articles')
const articleList = document.querySelector('.articles__list')
const loadBtn = document.querySelector('.articles__load')

const tagsList = document.querySelector('.main__articles__checkbar')

function searchInput() {
  let filtered = search(searchBar, articles, 'checkbar__label')
  loadArticles(filtered, articleList)
}

createMultiTags(articles, tagsList)

loadArticles(articles, articleList)

const searchBar = document.querySelector('.search__input')
const checkBoxes = document.querySelectorAll('.checkbar__input')

checkBoxes.forEach(el => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('checkbar__label_checked')
    searchInput()
  })
})

searchBar.addEventListener('input', searchInput)

// function getURL(url, callback) {
//   console.log(0)
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//      if (this.status < 400) {
//        console.log(1)
//        callback(this.responseText);
//      }
//      else {
//        callback(null, new Error("Request failed: " +
//                              this.statusText));
//      }
//   };  
//   xhr.open("GET", url, true);
//   xhr.send(null);
// }

// function cringe(data, e) {
//   data ? console.log(JSON.parse(data)) : console.log(e)
// }




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

getURL('http://localhost:3228/getArticles?index=2', log)

getURL('http://localhost:3228/sign?email=nicholswyatt@medicroix.com&password=DONJS5X6SXXF6H1BNWUMO4TVHND52784nlYHe', saveUser)


function saveUser(user) {
  localStorage.setItem('logged', JSON.stringify(user))
}

function checkLogged() {
  if(!!localStorage.getItem('logged')) {
    console.log('Logged in')
    // createLoggedHead()
  }
}

checkLogged()
//get 8 cards by getUrl