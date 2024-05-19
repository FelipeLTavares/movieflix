import CONSTANTS from '@/constants';
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        allFavorites: [] as any[],
    }),
    actions: {
        async getFavorites() {
            try {
                const favs = localStorage.getItem(CONSTANTS.FAVORITES);

                if (favs) {
                    const arrayFavs: any[] = JSON.parse(favs);
                    this.setAllFavorites(arrayFavs)
                }

            } catch (error) {
                console.log(error)
            }
        },

        deleteFavorite(id: number) {
            const filteredFavorites = this.allFavorites.filter((el: any) => {
                return el.id !== id
            })

            this.allFavorites = filteredFavorites;

            localStorage.setItem(CONSTANTS.FAVORITES, JSON.stringify(filteredFavorites));
        },

        addFavorite(fav: any) {
            const savedFavs = localStorage.getItem(CONSTANTS.FAVORITES);

            const favs: any[] = savedFavs ? JSON.parse(savedFavs) : [];

            if (favs.some(el => el.id === fav.id)) return;

            favs.push(fav);

            this.allFavorites = favs;

            localStorage.setItem(CONSTANTS.FAVORITES, JSON.stringify(favs));
        },

        setAllFavorites(allFavorites: any[]) {
            this.allFavorites = allFavorites;
        }
    },
    getters: {
        // getFavorites: (state) => state.allFavorites,
    },
});
