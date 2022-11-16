import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createMenuItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <h2 class="text-content" aria-label="your like resto" role="Title" tabindex="0">Your Liked Resto</h2>
          <div id="viewLiked" class="view-content">
            <p>Tidak ada resto untuk ditampilkan</p>
          </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#viewLiked');

    restos.forEach((resto) => {
      restosContainer.innerHTML = createMenuItemTemplate(resto);
    });
  },
};

export default Favorite;
