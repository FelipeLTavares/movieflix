<template>
  <div class="bg-gradient-to-tr">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>
