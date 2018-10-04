<template>
  <section>
<div v-html="lassie.generateTemplate()">
  </div>
  {{lassie.speak()}}
  </section>
</template>

<script>
import Dog, {Collie}  from '../classes/Dog.js';
export default {
  name: "Classes",
  data() {
    return {
      lassie : Dog
    }
  },
  created() {
    this.lassie = new Dog('female', 'Lassie');
  }
}
</script>
