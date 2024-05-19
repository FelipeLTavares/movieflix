import { defineStore } from 'pinia';
import axios from 'axios';
import CONSTANTS from '@/constants';

export type MediaApiPath = 'tv' | 'movie'

export const useMediaStore = defineStore('media', {
    state: () => ({
        media: null as any,
    }),
    actions: {
        async fetchMovie(id: number, type: MediaApiPath) {
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/3/${type}/${id}?api_key=${CONSTANTS.API_KEY}`);
                this.media = response.data;
                console.log('asd', this.media)
            } catch (error) {
                console.log(error)
            }
        },
    },
    getters: {
        getMedia: (state) => state.media
    }
});
