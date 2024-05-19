<template>
  <div
    v-if="loading"
    class="w-full h-screen bg-white text-xl pt-24 flex justify-center items-center"
  >
    Carregando....
  </div>

  <div v-if="error" class="w-full h-screen bg-white text-xl pt-24 flex justify-center items-center">
    {{ error }}
  </div>
  <main>
    <MediaList :medias="movies" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchAllMovies" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPaginator.vue'
import MediaList from '@/components/MediaList.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'FilmesView',

  components: {
    MediaList,
    ListPager
  },

  setup() {
    const movieStore = useMoviesStore()
    const { movies, page, totalPages, loading, error } = storeToRefs(movieStore)

    onMounted(async () => {
      await movieStore.fetchAllMovies()
    })

    return {
      movies,
      page,
      totalPages,
      loading,
      error,
      fetchAllMovies: (pageNumber: number) => movieStore.fetchAllMovies(pageNumber)
    }
  }
}
</script>
