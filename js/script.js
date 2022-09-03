const loadCategory =()=>{
    const url =`https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res=>res.json())
    .then(data =>displyCategory(data.data.news_category))
}


const displyCategory= (categories) =>{
    console.log(categories);
    const cateContainer = document.getElementById('category')
    categories?.foreach(category =>{
        console.log(category)
        const cateDiv =document.createElement('div')
        cateDiv.innerHTML=`
        <a href="#" onclick ="some1('${category.category_id}')" class="category-title">${category.category_name}</a>        
        `;
        cateContainer.appendChild(cateDiv);
    })
}

loadCategory();



const cardNews = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/category/08')
    .then(res => res.json())
    .then(data=>displyNews(data))
}



const displyNews = cards=>{
    
    const cardContainer = document.getElementById('card-container')
    cards.data.forEach(card=>{
       
        const cardDiv = document.createElement('div')
        // cardDiv.classList.add('col')
        cardDiv.innerHTML=`
        <div class="card mb-3" ;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${card.thumbnail_url}" class="img-fluid rounded-start w-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.details.slice(0,200)}</p>
         <div class="d-flex">
             
             <img src="${card.author.img}" width="40px" height="40px" class="rounded-circle"  >
             
             
             <div>
             <p class="card-text">${card.author.name}</p>
             <p class="card-text">${card.author.published_date}</p>
             </div>
             
              
              <p class="card-text"><i class="fa-solid fa-eye"></i>${card.total_view}</p>
              <div>
              <button class="btn btn-primary">Click</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
        cardContainer.appendChild(cardDiv)
        
    })
}

  cardNews()