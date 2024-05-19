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
  <main v-else class="w-full h-screen bg-indigo-300">
    <MediaDetails :backgroundImageStyle="backgroundImageStyle" :media="serie" />
  </main>
</template>

<script lang="ts">
import MediaDetails from '@/components/MediaDetails.vue'
import { useMediaStore } from '@/stores/media'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'MediaView',

  components: {
    MediaDetails
  },

  props: {
    imageUrl: {
      type: String,
      required: true
    }
  },

  setup() {
    const route = useRoute()
    const mediaStore = useMediaStore()

    const { media, loading, error } = storeToRefs(mediaStore)

    const serie: any = ref({})

    onMounted(async () => {
      await mediaStore.fetchMovie(Number(route.params.id), 'tv')

      serie.value.id = media?.value.id
      serie.value.title = media?.value.name
      serie.value.startDate = media?.value.first_air_date.slice(0, 4)
      serie.value.duration = media?.value.episode_run_time?.[0]
      serie.value.popularity = media?.value.vote_average
      serie.value.subTitle = media?.value.tagline
      serie.value.sinopse = media?.value.overview
      serie.value.background = media?.value.backdrop_path
      serie.value.homepage = media?.value.homepage
      serie.value.poster = media?.value.poster_path
    })

    const backgroundImageStyle = computed(() => ({
      backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/original/${serie.value.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }))

    return {
      media,
      serie,
      loading,
      error,
      backgroundImageStyle
    }
  }
}
</script>
