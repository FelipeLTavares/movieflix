<template>
  <header class="bg-black text-white w-full p-4 pl-10 fixed z-10">
    <div class="container flex items-center gap-10">
      <h1 class="text-2xl font-bold">E-Flix</h1>
      <nav>
        <ul class="flex space-x-4 items-center">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/filmes" class="hover:underline">Filmes</a></li>
          <li><a href="/series" class="hover:underline">Séries</a></li>
          <li><a href="/favoritos" class="hover:underline">Favoritos</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent'
}
</script>
