import { defineStore } from 'pinia';
import axios from 'axios';
import CONSTANTS from '@/constants';

export const useAllMediasStore = defineStore('allMedias', {
    state: () => ({
        allMedias: [],
        loading: false,
        error: null as string | null,
        page: 1,
        totalPages: 0
    }),
    actions: {
        async fetchAllMedias(page: number = 1) {
            this.loading = true;
            this.error = null; // Reset error before fetching
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/3/trending/all/day?api_key=${CONSTANTS.API_KEY}&sort_by=popularity.desc&page=${page}`);
                this.allMedias = response.data.results;
                this.page = page;
                this.totalPages = response.data.total_pages;
            } catch (error) {
                this.error = (error as any).message || 'Failed to fetch medias';
            } finally {
                this.loading = false;
            }
        }
    },
    getters: {
        getAllMedias: (state) => state.allMedias,
        getIsLoading: (state) => state.loading,
        getError: (state) => state.error,
        getCurrentPage: (state) => state.page,
        getTotalPages: (state) => state.totalPages
    },
});
