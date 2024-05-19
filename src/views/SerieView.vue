<template>
  <div class="w-full h-screen bg-indigo-300">
    <HeaderComponent />
    <MediaDetails :backgroundImageStyle="backgroundImageStyle" :media="serie" />
  </div>
</template>

<script lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import MediaDetails from '@/components/MediaDetails.vue'
import { useMediaStore } from '@/stores/media'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'MediaView',

  components: {
    HeaderComponent,
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
      backgroundImageStyle
    }
  }
}
</script>
