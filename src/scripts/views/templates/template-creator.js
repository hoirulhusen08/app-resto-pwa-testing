import CONFIG from '../../globals/config';

const createMenuDetailTemplate = (menu) => `
  <h2 class="menu-title" role="Resto" tabindex="0">${menu.name}</h2>
  <div class="menu-info">
    <img class="menu-poster" aria-label="Restaurant Image" role="Image" tabindex="0" src="${CONFIG.BASE_IMAGE_URL}/${menu.pictureId}" alt="Image" />
    <div class="info" role="Info" tabindex="0">
      <h3>Information :</h3>
      <h4>Address</h4>
      <p>${menu.address}.</p>
      <h4>In City</h4>
      <p>${menu.city}.</p>
      <h4>Description</h4>
      <p>${menu.description}.</p>
    </div>
  </div>

  <hr class="line-in-detail">

  <div class="menus" role="Menu" tabindex="0">
      <div class="menu-food">
            <h3>Foods Menu :</h3>
            <ol id="menuFood">
                  
            </ol>
      </div>
      <div class="menu-drink">
            <h3>Drinks Menu :</h3>
            <ol id="menuDrink">
                  
            </ol>
      </div>
  </div>

  <hr class="line-in-detail">

  <div class="customers-review">
      <h3 role="Review" tabindex="0">Customers Review :</h3>
      <div class="user" id="userReview">
            
      </div>
  </div>
`;

const userReview = (user) => `
      <div class="card-user-review" role="User" tabindex="0">
            <img src="./images/user/user.png" alt="Image">
            <p class="name">${user.name}</p>
            <p class="review">${user.review}</p>
            <p class="date">${user.date}</p>
      </div>
`;

const createMenuItemTemplate = (resto) => `
      <div class="card">
            <div class="card-header">
                  <div class="city-label">Kota ${resto.city}</div>
                  <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="Image">
            </div>
            <div class="card-content">
                  <div class="rate">Rating : ${resto.rating}</div>
                  <h3 class="title-resto"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
                  <p>${`${resto.description.substring(0, 130)} ...`}</p>
            </div>
      </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMenuItemTemplate,
  createMenuDetailTemplate,
  userReview,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
