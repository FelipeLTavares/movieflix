<template>
  <main class="w-full h-screen bg-indigo-300">
    <MediaDetails :backgroundImageStyle="backgroundImageStyle" :media="movie" />
  </main>
</template>

<script lang="ts">
import MediaDetails from '@/components/MediaDetails.vue'
import { useMediaStore } from '@/stores/media'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'FilmeView',

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

    const { media } = storeToRefs(mediaStore)

    const movie: any = ref({})

    onMounted(async () => {
      await mediaStore.fetchMovie(Number(route.params.id), 'movie')

      movie.value.id = media?.value.id
      movie.value.title = media?.value.title
      movie.value.startDate = media?.value.release_date.slice(0, 4)
      movie.value.duration = media?.value.episode_run_time
      movie.value.popularity = media?.value.vote_average
      movie.value.subTitle = media?.value.tagline
      movie.value.sinopse = media?.value.overview
      movie.value.background = media?.value.backdrop_path
      movie.value.homepage = media?.value.homepage
      movie.value.poster = media?.value.poster_path
    })

    const backgroundImageStyle = computed(() => ({
      backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/original/${movie.value.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }))

    return {
      media,
      movie,
      backgroundImageStyle
    }
  }
}
</script>
