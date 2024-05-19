import { defineStore } from 'pinia';
import axios from 'axios';
import CONSTANTS from '@/constants';

export type MediaApiPath = 'tv' | 'movie'

export const useMediaStore = defineStore('media', {
    state: () => ({
        media: null as any,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchMovie(id: number, type: MediaApiPath) {
            this.loading = false;
            this.error = null;
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/3/${type}/${id}?api_key=${CONSTANTS.API_KEY}`);
                this.media = response.data;
            } catch (error) {
                this.error = 'Erro ao carregar os dados! :(';
            } finally {
                this.loading = true;
            }
        },
    }
});
