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
    <MediaList :medias="medias" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchMedias" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPaginator.vue'
import MediaList from '@/components/MediaList.vue'
import { useMediasStore, type TesteType } from '@/stores/medias'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'TesteView',

  components: {
    MediaList,
    ListPager
  },

  props: {
    type: {
      type: String as () => TesteType,
      required: true
    }
  },

  setup(props) {
    const testeStore = useMediasStore()

    const { medias, page, totalPages, loading, error } = storeToRefs(testeStore)

    onMounted(async () => {
      await testeStore.fetchMedias(props.type)
    })

    return {
      medias,
      page,
      totalPages,
      loading,
      error,
      fetchMedias: (pageNumber: number) => testeStore.fetchMedias(props.type, pageNumber)
    }
  }
}
</script>
