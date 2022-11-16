import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking A Resto', () => {
	const addLikeButtonContainer = () => {
				document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(() => {
				addLikeButtonContainer();
	});

  it('should show the like button when the resto has not been liked before', async () => {
			await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

      expect(document.querySelector('[aria-label="like this resto"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
      await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

      expect(document.querySelector('[aria-label="unlike this resto"]'))
          .toBeFalsy();
    });

    it('should be able to like the resto', async () => {
      await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

      document.querySelector('#likeButton').dispatchEvent(new Event('click'));

      const resto = await FavoriteRestoIdb.getResto(1);
      expect(resto).toEqual({ id: 1 });

      FavoriteRestoIdb.deleteResto(1);
    });

		it('should not add a resto again when its already liked', async () => {
			await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
			
			// Tambahkan Resto dengan ID 1 ke daftar Resto yang disukai
			await FavoriteRestoIdb.putResto({ id: 1 });
			// Simulasikan pengguna menekan tombol suka Resto
			document.querySelector('#likeButton').dispatchEvent(new Event('click'));
			// tidak ada Resto yang ganda
			expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

			FavoriteRestoIdb.deleteResto(1);
		});

		it('should not add a resto when it has no id', async () => {
			await TestFactories.createLikeButtonPresenterWithResto({});

			document.querySelector('#likeButton').dispatchEvent(new Event('click'));
			expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
		});
});
