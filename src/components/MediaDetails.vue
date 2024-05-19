<template>
  <div :style="backgroundImageStyle" class="w-full h-full flex items-center text-white">
    <div class="flex flex-col gap-6 p-10">
      <h2 class="font-bold text-4xl">{{ media.title }}</h2>

      <div class="flex gap-2 text-gray-400">
        <span>{{ media.startDate }}</span>
        <span>|</span>
        <span>{{ media.popularity }}</span>
        <span>|</span>
        <span>{{ media.duration }} min</span>
      </div>

      <div>
        <h3 class="text-xl font-bold">{{ media.subTitle }}</h3>

        <p class="sm:w-full md:w-8/12 lg:w-6/12">
          {{ media.sinopse }}
        </p>
      </div>

      <div class="flex gap-4">
        <button
          type="button"
          class="bg-red-600 px-4 py-2 rounded-md font-bold"
          @click="goToHomepage(media.homepage)"
        >
          Saiba mais
        </button>

        <button
          v-if="show"
          class="bg-gray-400 px-4 py-2 rounded-md font-bold"
          @click="addFavorito(media)"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import { defineComponent, watch, ref, onUpdated, type PropType } from 'vue'

export default defineComponent({
  name: 'MediaDetails',
  props: {
    media: {
      type: Object as PropType<{
        id: number
        title: string
        startDate: string
        popularity: number
        duration: number
        subTitle: string
        sinopse: string
        homepage: string
        poster: string
      }>,
      required: true
    },
    backgroundImageStyle: {
      type: Object as PropType<CSSStyleDeclaration>,
      required: true
    }
  },
  setup(props) {
    const favoritosStore = useFavoritesStore()
    const { allFavorites } = storeToRefs(favoritosStore)

    const show = ref(true)

    const checkIfFavorited = () => {
      if (allFavorites.value.some((el) => el.id === props.media.id)) {
        show.value = false
      }
    }

    onUpdated(() => {
      favoritosStore.getFavorites()
      checkIfFavorited()
    })

    watch(allFavorites, () => {
      checkIfFavorited()
    })

    const goToHomepage = (url: string) => {
      window.open(url, '_blank')
    }

    const addFavorito = (media: any) => {
      favoritosStore.addFavorite(media)
    }

    return {
      goToHomepage,
      addFavorito,
      show
    }
  }
})
</script>
