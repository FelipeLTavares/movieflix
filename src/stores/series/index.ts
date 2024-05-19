import { defineStore } from 'pinia';
import axios from 'axios';
import CONSTANTS from '@/constants';

export const useSeriesStore = defineStore('series', {
    state: () => ({
        series: [],
        page: 1,
        totalPages: 0
    }),
    actions: {
        async fetchSeries(page: number = 1) {
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/3/discover/tv?api_key=${CONSTANTS.API_KEY}&sort_by=popularity.desc&page=${page}`);
                this.series = response.data.results;
                this.page = page;
                this.totalPages = response.data.total_pages;

            } catch (error) {
                console.log(error)
            }
        },
    }
});
