<template>
  <div v-html="lassie.template()">
  </div>
</template>

<script>
import Dog from '../classes/Dog.js';
export default {
  name: "Classes",
  data() {
    return {
      lassie: new Dog('Lassie', 'Ireland', 3)
    }
  },
  created() {

  }
}
</script>
