<template>
  <div
    class="p-10 bg-gradient-to-r from-gray-400 to-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-24"
  >
    <div
      v-for="media in medias"
      :key="media.id"
      class="rounded-lg shadow-md overflow-hidden hover:scale-90 transform transition duration-300 cursor-pointer relative group"
    >
      <div
        class="absolute w-8 h-8 bg-red-600 right-0 rounded-full justify-center items-center font-bold text-white flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        v-if="deleteMedia"
        @click="deleteMedia(media.id)"
      >
        x
      </div>

      <img
        :src="getMovieImageUrl(media.poster_path || media.poster)"
        alt=""
        class="w-full h-full object-cover"
        @click="navigateToMedia(media.id, media.title ? 'filme' : 'serie')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import type { PropType } from 'vue'

interface Media {
  id: number
  title?: string
  poster_path?: string
  poster?: string
}

export default {
  name: 'MediaList',
  props: {
    medias: {
      type: Array as PropType<Media[]>,
      required: true
    },
    deleteMedia: {
      type: Function,
      required: false
    }
  },
  methods: {
    getMovieImageUrl(imagePath: any) {
      return `https://image.tmdb.org/t/p/original/${imagePath}`
    }
  },

  setup() {
    const router = useRouter()

    const navigateToMedia = (mediaId: any, mediaType: any) => {
      router.push({ name: mediaType === 'filme' ? 'filme' : 'serie', params: { id: mediaId } })
    }

    return {
      navigateToMedia
    }
  }
}
</script>

<style scoped>
.group-hover:opacity-100 {
  opacity: 1 !important;
}
</style>
