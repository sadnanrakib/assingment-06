
  // added categories News
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data));
  
  function displayCatagories(catagories) {
    catagories.data.news_category.forEach((News) => {
      const li = document.createElement("li");
      li.innerText = `${News.category_name?News.category_name:'NOT FOUND'}`;
      li.setAttribute("id", `${News.category_id?News.category_id:'NOT FOUND'}`);
      li.setAttribute("name", `${News.category_name?News.category_name:'NOT FOUND'}`);
      
      getElement(".catagoriesName").appendChild(li);
    });
    newToggol();
  }
  
  // added spinner
  getElement(
    ".news-container"
  ).innerHTML = `<div class="text-center p-5"><div class="spinner-border text-center" role="status">
  <span class="visually-hidden">Loading...</span>
  </div></div>`;
  
  const sortFunc = () => {
    if (getElement(".sortByViews").value === "view") {
      sortedNews = true;
      setValue(newsHolder, categoryName);
    } else {
      sortedNews = false;
      setValue(newsHolder, categoryName);
    }
  };

  let newsHolder = [];
  let categoryName = "";
  let sortedNews = false;


   function getElement(selector, isAll = false) {
        if (!isAll) {
          return document.querySelector(selector);
        } else {
          return document.querySelectorAll(selector);
        }
      }


      
  // display all news
  const displayAllNews = (data, category_name) => {
    getElement(".news-container").innerHTML = "";
    let Newss = data.data;
    if (sortedNews) {
      Newss = Newss.sort((card, news) => news.total_view - card.total_view);
    }
    Newss.forEach((card) => {
      const cardNews = `
          
            <div class="News mb-3 align-Newss-center border shadow-lg p-3 mb-5 bg-body rounded">
            <div class="row g-0">
              <div class="col-md-4 col-sm-12">
                <img src="${card.thumbnail_url}" class="img-fluid rounded-start w-100" alt="...">
              </div>
              <div class="col-md-8 col-sm-12">
                <div class="News-body px-4 mt-5">
                  <h5 class="News-title">${card.title}</h5>
                  <p class="News-text">${card.details.slice(0,250)}</p>
                  <p class="News-text">${card.details.slice(250,500)}</p>
                  <div class="d-flex">
                  <img src="${card.author.img}" width="30px" height="30px" class="rounded-circle">
                 <div>
                 <p class="News-text mx-2">${card.author?.name? card.author.name : "Not Found"}</small></p>
                
                 </div>
                  <p class="News-text"><i class="fa-solid fa-eye"></i>${card.total_view?card.total_view: "NO VIEW"}</small></p>
                  <div class="mx-5">
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </div>
                  <div>

                


                    <div class="my-auto">

                    <button id="${
                      card?._id
                    }" type="button" class="btn modal-details-button btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Details
                    </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>`;
      const div = document.createElement("div");
      div.classList.add("News", "mb-3");
      div.innerHTML = cardNews;
      getElement(".news-container").appendChild(div);
    });
    getElement(".news-quantity").innerHTML = `<p>
        ${data.data.length} Newss found for category ${category_name}
      </p>`;
    modalInit();
  };
  
  const setValue = (data, category_name) => {
    newsHolder = data;
    categoryName = category_name;
    displayAllNews(newsHolder, categoryName);
  };
  
  // fetch for landing page
  fetch("https://openapi.programming-hero.com/api/news/category/08")
    .then((res) => res.json())
    .then((data) => {
      setValue(data, "All News");
    });
  
  // newToggol after Newss render
  function newToggol() {
    getElement(".catagoriesName li", true).forEach((News) =>
      News.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");
        getElement(
          ".news-container"
        ).innerHTML = `<div class="text-center p-5"><div class="spinner-border text-center" role="status">
      <span class="visually-hidden">Loading...</span>
      </div></div>`;
        const category_name = e.target.getAttribute("name");
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
          .then((res) => res.json())
          .then((data) => setValue(data, category_name));
      })
    );
  }
  
  function modalInit() {
    getElement(".modal-details-button", true).forEach((News) =>
      News.addEventListener("click", (e) => {
        const modalContainer = getElement(".modal-body");
        const id = e.target.getAttribute("id");
        fetch(`https://openapi.programming-hero.com/api/news/${id}`)
          .then((res) => res.json())
          .then((data) => displayModal(data.data));
  
        const displayModal = (data) => {
          let card = data[0];
          const cardNews = `
          <div class="News mb-3 align-Newss-center border shadow-lg p-3 mb-5 bg-body rounded">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=${card.thumbnail_url} class="img-fluid rounded-start w-100" alt="...">
            </div>
            <div class="col-md-12">
              <div class="News-body mt-5">
                <h5 class="News-title">${card.title}</h5>
                <p class="News-text">${card.details.slice(0,75)}</p>
                <p class="News-text">${card.details.slice(0,75)}</p>
                <div class="d-flex">
                <img src=${card.author.img} width="30px" height="30px" class="rounded-circle">
               <div>
               <p class="News-text mx-2">${card.author?.name? card.author.name : "Not Found"}</small></p>
              
               </div>
                <p class="News-text"><i class="fa-solid fa-eye"></i>${card.total_view?card.total_view: "NO VIEW"}</small></p>
                <div class="mx-5">
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                <div>

`;
          modalContainer.innerHTML = cardNews;
        };
      })
    );
  }