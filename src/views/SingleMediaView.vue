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
    <MediaDetails :backgroundImageStyle="backgroundImageStyle" :media="movie" />
  </main>
</template>

<script lang="ts">
import MediaDetails from '@/components/MediaDetails.vue'
import { useMediaStore, type MediaApiType } from '@/stores/singleMedia'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'SingleMediaView',

  components: {
    MediaDetails
  },

  props: {
    type: {
      type: String as () => MediaApiType,
      required: true
    }
  },

  setup(props) {
    const route = useRoute()
    const mediaStore = useMediaStore()

    const { media, loading, error } = storeToRefs(mediaStore)

    const movie: any = ref({})

    onMounted(async () => {
      await mediaStore.fetchMovie(Number(route.params.id), props.type)

      console.log(media.value)

      movie.value.id = media?.value.id
      movie.value.title = media?.value.title || media?.value.name
      movie.value.startDate =
        media?.value.release_date?.slice(0, 4) || media?.value.first_air_date?.slice(0, 4)
      movie.value.duration = media?.value.episode_run_time?.[0] || media?.value.runtime
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
      loading: loading.value,
      error,
      backgroundImageStyle
    }
  }
}
</script>
