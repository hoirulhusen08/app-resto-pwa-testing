import UrlParser from '../../routes/url-parser';
import TheMenuDbSource from '../../data/menudb-source';
import { createMenuDetailTemplate, userReview } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <h2 class="text-content" aria-label="detail resto" role="Title" tabindex="0">Detail Resto</h2>
      <div class="container">
        <div id="detailMenu" class="detail-menu"></div>
      </div>

      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menu = await TheMenuDbSource.detailMenu(url.id);

    const dataMenu = menu.restaurant;
    const menuContainer = document.querySelector('#detailMenu');
    menuContainer.innerHTML = createMenuDetailTemplate(dataMenu);

    const { foods } = menu.restaurant.menus;
    foods.forEach((food) => {
      const menuFood = document.querySelector('#menuFood');
      const newLiFood = document.createElement('li');
      newLiFood.innerHTML = food.name;
      menuFood.appendChild(newLiFood);
    });

    const { drinks } = menu.restaurant.menus;
    drinks.forEach((drink) => {
      const menuDrink = document.querySelector('#menuDrink');
      const newLiDrink = document.createElement('li');
      newLiDrink.innerHTML = drink.name;
      menuDrink.appendChild(newLiDrink);
    });

    const reviews = menu.restaurant.customerReviews;
    reviews.forEach((review) => {
      const reviewContainer = document.querySelector('#userReview');
      reviewContainer.innerHTML += userReview(review);
    });

    // Button Like
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: dataMenu,
    });
  },
};

export default Detail;
