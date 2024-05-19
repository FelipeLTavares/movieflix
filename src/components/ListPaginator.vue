<template>
  <div class="flex justify-center items-center space-x-2 mt-4">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <span class="px-4 py-2 bg-white rounded border">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Próxima
    </button>
  </div>
</template>

<script>
import { useMoviesStore } from '../stores/movies/index'
import { storeToRefs } from 'pinia'

export default {
  name: 'ListPaginator',
  setup() {
    const movieStore = useMoviesStore()
    const { currentPage, totalPages } = storeToRefs(movieStore)

    const goToPage = (page) => {
      console.log('asdasasaaaa')
      movieStore.fetchMovies(page)
    }

    return {
      currentPage,
      totalPages,
      goToPage
    }
  }
}
</script>
