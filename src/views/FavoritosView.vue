<template>
  <main>
    <MediaList :medias="allFavorites" :deleteMedia="deleteFavorite" :showDelete="true" />
  </main>
</template>

<script lang="ts">
import MediaList from '@/components/MediaList.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

export default {
  name: 'FilmesView',

  components: {
    MediaList
  },

  setup() {
    const favoriteStore = useFavoritesStore()
    const { allFavorites } = storeToRefs(favoriteStore)

    onMounted(async () => {
      await favoriteStore.getFavorites()
    })

    return {
      allFavorites,
      deleteFavorite: (id: number) => {
        favoriteStore.deleteFavorite(id)
      }
    }
  }
}
</script>
