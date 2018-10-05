<template>
  <section>
    <div v-html="dogTemplate">
  </div>
  <div>Ola! {{dog.speak()}}</div>
  <div v-html="collieTemplate">
  </div>
  <div>What's your name? {{collie.speak()}}</div>
<div v-html="patrickTemplate">
  </div>
  <div>Say hi! {{patrick.speak()}}</div>
  </section>
</template>

<script>
import Dog, {Collie}  from '../classes/Dog.js';
export default {
  name: "Classes",
  data() {
    return {
      dog: Dog,
      dogTemplate: String,
      collie: Collie,
      collieTemplate: String,
      patrick : Collie,
      patrickTemplate: String
    }
  },
  async created() {
    this.dog = new Dog('mail', 'Gary Fisher', 'bulldog'),
    this.dogTemplate = this.dog.generateTemplate(),
    this.collie = new Collie(),
    this.collieTemplate = this.collie.generateTemplate(),
    this.patrick = new Collie('male', 'Patrick');
    this.patrickTemplate = this.patrick.generateTemplate();
  }
}
</script>
