<template>
  <div class="flex justify-center items-center space-x-2 mt-4">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <span class="px-4 py-2 bg-white rounded border">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Próxima
    </button>
  </div>
</template>

<script>
export default {
  name: 'ListPaginator',
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
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.onPageChange(page)
      }
    }
  }
}
</script>
