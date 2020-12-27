<template>
  <div class="todo">
    <div class="wrap">
      <div class="tip">tip</div>
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      show: true
    }
  }
})
</script>

<style lang="scss" scoped>
.todo {
  %width {
    width: 300px;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: func.size(5);
    .tip {
      @extend %width;
      color: var.$color-green;
      background-color: var.$color-yellow;
      @include mix.border();
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s ease;
    }

    &.fade-enter-from,
    &.fade-leave-to {
      opacity: 0;
    }
    :slotted(.content) {
      @extend %width;
      height: 300px;
      color: var.$color-blue;
      background-color: var.$color-red;
    }
  }
}
</style>