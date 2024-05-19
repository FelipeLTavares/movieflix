<template>
  <button
    type="button"
    :class="[ButtonType, 'px-4', 'py-2', 'rounded-md', 'font-bold', 'hover:opacity-75']"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const ButtonType = {
  knowMore: 'bg-red-600 font-white',
  saveFavorite: 'bg-transparent font-white border border-slate-50',
  pageButton: 'bg-black text-white'
}

export default defineComponent({
  name: 'GenericButton',

  props: {
    type: {
      type: String,
      required: true
    }
  },

  setup(props) {
    return {
      ButtonType: ButtonType[props.type as keyof typeof ButtonType]
    }
  }
})
</script>
