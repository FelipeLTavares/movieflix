<template>
  <div class="flex justify-center items-center space-x-2 py-4">
    <GenericButton
      :type="'pageButton'"
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="disabled:opacity-50"
    >
      Anterior
    </GenericButton>
    <span class="px-4 py-2 bg-white rounded border">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <GenericButton
      :type="'pageButton'"
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="disabled:opacity-50"
    >
      Próxima
    </GenericButton>
  </div>
</template>

<script lang="ts">
import GenericButton from './shared/GenericButton.vue'

export default {
  name: 'ListPaginator',
  components: {
    GenericButton
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    onPageChange: {
      type: Function,
      required: true
    }
  },
  methods: {
    goToPage(page: any) {
      if (page > 0 && page <= this.totalPages) {
        this.onPageChange(page)
      }
    }
  }
}
</script>
