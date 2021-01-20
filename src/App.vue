<template>
  <div>
    <button @click="text = text === text1 ? text2 : text1;">click</button>
    <div>{{ flag }} {{ text }}</div>
  </div>
</template>

<!-- not right -->
<script lang="ts" setup>
import { watch, computed } from 'vue';

const text1 = 'AAA';
const text2 = 'BBB';

ref: text = text1;

ref: flag = computed(() => !!text);

watch([$flag], (now, old) => {
  console.log(0, now, old);
});
watch($flag, (now, old) => {
  console.log(1, now, old);
});
</script>

<!-- is right -->
<script lang="ts">
// import { ref, watch, computed, defineComponent } from 'vue';

// export default defineComponent({
//   setup() {
//     const text1 = 'AAA';
//     const text2 = 'BBB';

//     const text = ref(text1);
//     const flag = computed(() => !!text);

//     watch([flag], (now, old) => {
//       console.log(0, now, old);
//     })
//     watch(flag, (now, old) => {
//       console.log(1, now, old);
//     })

//     return {
//       text1,
//       text2,
//       text,
//       flag
//     };
//   }
// });
</script>