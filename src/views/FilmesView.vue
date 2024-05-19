<template>
  <main>
    <!-- <MediaList /> -->
    <HeaderComponent />
    <MediaLister :medias="movies" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchAllMovies" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPager.vue'
import MediaLister from '@/components/MediaLister.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'FilmesView',

  components: {
    MediaLister,
    ListPager,
    HeaderComponent
  },

  setup() {
    const movieStore = useMoviesStore()
    const { movies, page, totalPages } = storeToRefs(movieStore)

    onMounted(async () => {
      await movieStore.fetchAllMovies()
    })

    return {
      movies,
      page,
      totalPages,
      fetchAllMovies: (pageNumber: number) => movieStore.fetchAllMovies(pageNumber)
    }
  }
}
</script>
