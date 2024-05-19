<template>
  <main>
    <HeaderComponent />
    <MediaLister :medias="allFavorites" :deleteMedia="deleteFavorite" :showDelete="true" />
  </main>
</template>

<script lang="ts">
import MediaLister from '@/components/MediaLister.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

export default {
  name: 'FilmesView',

  components: {
    MediaLister,
    HeaderComponent
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
        console.log('aqui')
        favoriteStore.deleteFavorite(id)
      }
    }
  }
}
</script>
