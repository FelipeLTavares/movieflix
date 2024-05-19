<template>
  <main>
    <MediaLister :medias="series" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchAllSeries" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPaginator.vue'
import MediaLister from '@/components/MediaLister.vue'
import { useSeriesStore } from '@/stores/series'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'FilmesView',

  components: {
    MediaLister,
    ListPager
  },

  setup() {
    const seriesStore = useSeriesStore()
    const { series, page, totalPages } = storeToRefs(seriesStore)

    onMounted(async () => {
      await seriesStore.fetchSeries()
    })

    return {
      series,
      page,
      totalPages,
      fetchAllSeries: (pageNumber: number) => seriesStore.fetchSeries(pageNumber)
    }
  }
}
</script>
