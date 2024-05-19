<template>
  <main>
    <MediaLister :medias="medias" :addFavorite="addFavorito" />
    <ListPager :currentPage="page" :totalPages="totalPages" :onPageChange="fetchAllMedias" />
  </main>
</template>

<script lang="ts">
import ListPager from '@/components/ListPaginator.vue'
import MediaLister from '@/components/MediaLister.vue'
import { useAllMediasStore } from '@/stores/allMedias'
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'HomeView',

  components: {
    MediaLister,
    ListPager
  },

  setup() {
    const movieStore = useAllMediasStore()
    const favoritosStore = useFavoritesStore()
    const { allMedias: medias, page, totalPages } = storeToRefs(movieStore)

    onMounted(async () => {
      await movieStore.fetchAllMedias()
    })

    return {
      medias,
      page,
      totalPages,
      fetchAllMedias: (pageNumber: number) => movieStore.fetchAllMedias(pageNumber),
      addFavorito: (fav: any) => favoritosStore.addFavorite(fav)
    }
  }
}
</script>
