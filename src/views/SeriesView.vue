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
  <main v-else>
    <MediaList :medias="series" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchAllSeries" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPaginator.vue'
import MediaList from '@/components/MediaList.vue'
import { useSeriesStore } from '@/stores/series'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'FilmesView',

  components: {
    MediaList,
    ListPager
  },

  setup() {
    const seriesStore = useSeriesStore()
    const { series, page, totalPages, loading, error } = storeToRefs(seriesStore)

    onMounted(async () => {
      await seriesStore.fetchSeries()
    })

    return {
      series,
      loading,
      page,
      totalPages,
      error,
      fetchAllSeries: (pageNumber: number) => seriesStore.fetchSeries(pageNumber)
    }
  }
}
</script>
