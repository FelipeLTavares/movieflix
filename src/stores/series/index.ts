import { defineStore } from 'pinia';
import axios from 'axios';
import CONSTANTS from '@/constants';

export const useSeriesStore = defineStore('series', {
    state: () => ({
        series: [],
        loading: false,
        error: null,
        page: 1,
        totalPages: 0
    }),
    actions: {
        async fetchSeries(page: number = 1) {
            this.loading = true;
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/3/discover/tv?api_key=${CONSTANTS.API_KEY}&sort_by=popularity.desc&page=${page}`);
                this.series = response.data.results;
                this.page = page;
                this.totalPages = response.data.total_pages;

            } catch (error) {
                this.error = error as any;
            } finally {
                this.loading = false;
            }
        },
    },
    getters: {
        allSeries: ({ series }) => series,
        isLoading: ({ loading }) => loading,
        error: ({ error }) => error,
        currentPage: ({ page }) => page,
        totalPages: ({ totalPages }) => totalPages
    },
});
