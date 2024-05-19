<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20">
    <div
      v-for="media in medias"
      :key="media.id"
      class="rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer relative group"
    >
      <div
        class="absolute w-8 h-8 bg-red-600 right-0 rounded-full justify-center items-center font-bold text-white flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        @click="deleteMedia(media.id)"
        v-if="showDelete"
      >
        x
      </div>

      <img
        :src="getMovieImageUrl(media.poster_path)"
        alt=""
        class="w-full h-full object-cover"
        @click="navigateToMedia(media.id, media.title ? 'filme' : 'serie')"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'MediaList',
  props: {
    medias: {
      type: Array,
      required: true
    },
    // addFavorite: {
    //   type: Function,
    //   required: false
    // },
    showDelete: {
      type: Boolean,
      required: false
    },
    deleteMedia: {
      type: Function,
      required: false
    }
  },
  methods: {
    getMovieImageUrl(imagePath) {
      return `https://image.tmdb.org/t/p/original/${imagePath}`
    }

    // addFavorito(media) {
    //   if (this.addFavorite) this.addFavorite(media)
    // }
  },

  setup() {
    const router = useRouter()

    const navigateToMedia = (mediaId, mediaType) => {
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
