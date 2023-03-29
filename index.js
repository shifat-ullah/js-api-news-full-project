/* const headersection = ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => display(data.data))
}

const display = (data) =>{
    
    // console.log(data)
    data.news_category.forEach((element) => {
        const headercontant = document.getElementById('header-section');
        // console.log(element)
        const linkContant = document.createElement('p');
        linkContant.innerHTML =`
        
        <a href="#" class="nav-link" onclick="categoryid('${element.category_id}')">${element.category_name}</a>
        
        `
        headercontant.appendChild(linkContant)
        
    });

}

headersection()



const categoryid =(category_id) =>{
    const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    // console.log(url)
    .then(res => res.json())
    .then(data => console.log(data.data))

}
 */

/* 
/* const newsfeed = () =>{
    const url = ('https://openapi.programming-hero.com/api/news/categories');
    fetch(url)
    .then(res => res.json())
    .then(data => shownewsdata(data.data.news_category))
}

const shownewsdata = data =>{
    // console.log(data)
    data.forEach((element) => {
        // console.log(element)
        const headersection = document.getElementById('header-section');
        const linkcatagory = document.createElement('p');
        linkcatagory.innerHTML = `
        <a class="nav-link" href="#" onclick="fetchdata('${element.category_id}', '${element.category_name}')">${element.category_name}</a>
        `
        headersection.appendChild(linkcatagory)
    });
}


const fetchdata =( category_id, category_name) =>{
    const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    // console.log(url)
    .then(res => res.json())
    .then(data => showalldata(data.data,category_name))
}


const showalldata = (data, category_name) =>{
  console.log(data)
  
    const items = document.getElementById('items').innerText = data.length;
    console.log(items)
    const categoryName = document.getElementById('category_name').innerText =category_name;
    const newsContainer = document.getElementById('all-news');
    newsContainer.innerHTML=""
    
  data.forEach(singleNews =>{
    // console.log(singleNews)
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.innerHTML=`
    <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
       </div>`;
       newsContainer.appendChild(card)
  
  })

}


newsfeed() */

const shownewsdata = () =>{
  const url = ('https://openapi.programming-hero.com/api/news/categories');
  fetch(url)
  .then(res => res.json())
  .then(data => showallcatagory(data.data.news_category))
}

const showallcatagory = (data) =>{
  // console.log(data)

  const showheader = document.getElementById('header-section');
  data.forEach(element => {
    // console.log(element)
    const ptag = document.createElement('p');
  ptag.innerHTML=`
  
  <a href="#" class="nav-link" onclick="fetchdata('${element.category_id}', '${element.category_name}')">${element.category_name}</a>
  
  `
  showheader.appendChild(ptag)
   
    
  });
  

}


  const fetchdata =(category_id,category_name ) =>{
    const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    // console.log(url)
    .then(res => res.json())
    .then(data => displaydata(data.data,category_name))
}

const displaydata = (data,category_name) =>{
  const items = document.getElementById('items').innerText = data.length;
  const catagoryName = document.getElementById('category_name').innerText =category_name;
  const allNews = document.getElementById('all-news');
  allNews.innerHTML=""
  data.forEach(news => {
    console.log(news.title

      )
    const ptag = document.createElement('p');
    ptag.classList.add('card', 'mb-3');
    ptag.innerHTML=`

    <div class="row g-0">
    <div class="col-md-4">
      <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details}</p>
        
      </div>
    </div>
  </div>

    `;   
    allNews.appendChild(ptag)
  })
}


shownewsdata() 