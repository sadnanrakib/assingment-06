// const cardMenu = ()=>{
//     // const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
//     // const data = await res.json()
//     // displyMenu(data,cards)
//     const url =`https://openapi.programming-hero.com/api/news/category/01`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data =>displyMenu(data.cards))
// }

// const displyMenu = cards =>{
//   const cardsContainer = document.getElementById('displyMenu');
//   cards.foreach(card => {

//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('col')
//     cardDiv.innerHTML=`
//     <div class="card">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
    
    
//     `;
//     cardsContainer.appendChild(cardDiv)

//   })
 
//   }



// cardMenu ();