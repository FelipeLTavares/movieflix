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
    <MediaList :medias="medias" :addFavorite="addFavorito" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchAllMedias" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPaginator.vue'
import MediaList from '@/components/MediaList.vue'
import { useAllMediasStore } from '@/stores/allMedias'
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'HomeView',

  components: {
    MediaList,
    ListPager
  },

  setup() {
    const movieStore = useAllMediasStore()
    const favoritosStore = useFavoritesStore()
    const { allMedias: medias, page, totalPages, loading, error } = storeToRefs(movieStore)

    onMounted(async () => {
      await movieStore.fetchAllMedias()
    })

    return {
      medias,
      page,
      totalPages,
      loading,
      error,
      fetchAllMedias: (pageNumber: number) => movieStore.fetchAllMedias(pageNumber),
      addFavorito: (fav: any) => favoritosStore.addFavorite(fav)
    }
  }
}
</script>
