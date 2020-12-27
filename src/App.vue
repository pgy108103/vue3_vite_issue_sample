<template>
  <div>
    <!-- for transition & :slotted() sample -->
    <todo v-if="isTransitionBug">
      <template #temp>
        <div class="header">header</div>
      </template>
      <template #default>
        <div class="content">content</div>
      </template>
    </todo>
    <!-- 
      for config.alias & :slotted() sample => please set isTransitionBug =  false
      when use global component witch defineAsyncComponent in main.ts,
      :slotted() is not working
    -->
    <todo1 v-else>
      <template #temp>
        <div class="header">header</div>
      </template>
      <template #default>
        <div class="content">content</div>
      </template>
    </todo1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import todo1 from './component/todo1.vue';

export default defineComponent({
  components: {
    // todo1,
  },
  data() {
    return {
      isTransitionBug: true
    }
  }
})
</script>
