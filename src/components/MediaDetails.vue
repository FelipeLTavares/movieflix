<template>
  <div :style="backgroundImageStyle" class="w-full h-full flex items-center text-white">
    <div class="flex flex-col gap-6 p-10">
      <h2 class="font-bold text-4xl">{{ media.title }}</h2>

      <div class="flex gap-2 text-gray-400">
        <span>{{ media.startDate }}</span>
        <span>|</span>
        <span class="text-green-400">{{ media.popularity }}</span>
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
        <GenericButton :type="'knowMore'" class="font-bold" @click="goToHomepage(media.homepage)">
          Saiba mais
        </GenericButton>

        <GenericButton
          :type="'saveFavorite'"
          v-if="show"
          class="font-bold"
          @click="addFavorito(media)"
        >
          Salvar
        </GenericButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import { defineComponent, ref, watch, type PropType, onUpdated } from 'vue'
import GenericButton from './shared/GenericButton.vue'

export default defineComponent({
  name: 'MediaDetails',
  components: {
    GenericButton
  },
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
      type: Object as PropType<Record<string, string>>,
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
