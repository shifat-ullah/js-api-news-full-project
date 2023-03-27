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


const newsfeed = () =>{
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
    .then(data => showalldata(data,category_name))
}


const showalldata = (data, category_name) =>{
    const items = document.getElementById('items').innerText = data.data.length;
    const categoryName = document.getElementById('category_name').innerText =category_name;
    console.log(data.data, category_name)

}


newsfeed()