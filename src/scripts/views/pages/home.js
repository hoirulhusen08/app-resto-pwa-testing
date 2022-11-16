import TheMenuDbSource from '../../data/menudb-source';
import { createMenuItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
            <h2 class="text-content" aria-label="explore the resto" role="Title" tabindex="0">Explore The Resto</h2>
            <div id="viewContent" class="view-content"></div>
        `;
  },

  async afterRender() {
    const restaurants = await TheMenuDbSource.nowGetMenu();
    const restoContainer = document.querySelector('#viewContent');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createMenuItemTemplate(resto);
    });
  },
};

export default Home;
