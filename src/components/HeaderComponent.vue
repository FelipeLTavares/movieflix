<template>
  <header class="bg-black text-white w-full p-4 fixed z-10">
    <div class="flex gap-6 justify-between md:justify-start items-center">
      <h1 class="text-2xl font-bold">MovieFlix</h1>

      <nav class="hidden md:flex items-center">
        <ul class="flex items-center gap-4">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/filmes" class="hover:underline">Filmes</a></li>
          <li><a href="/series" class="hover:underline">Séries</a></li>
          <li><a href="/favoritos" class="hover:underline">Favoritos</a></li>
        </ul>
      </nav>

      <button @click="toggleMenu" class="md:hidden">
        <div class="flex flex-col gap-1">
          <div class="h-0.5 w-4 bg-white"></div>
          <div class="h-0.5 w-4 bg-white"></div>
          <div class="h-0.5 w-4 bg-white"></div>
        </div>
      </button>
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 flex z-20">
      <div class="bg-black bg-opacity-50 w-1/4" @click="toggleMenu"></div>

      <div class="bg-white text-black w-3/4 h-full p-4">
        <button @click="toggleMenu" class="mb-4 focus:outline-none text-black">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul class="flex flex-col gap-3">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/filmes" class="hover:underline">Filmes</a></li>
          <li><a href="/series" class="hover:underline">Séries</a></li>
          <li><a href="/favoritos" class="hover:underline">Favoritos</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'HeaderComponent',
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu
    }
  }
}
</script>
