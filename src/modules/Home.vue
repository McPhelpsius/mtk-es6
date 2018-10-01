<template>
  <main>
  <nav>
    <ul class="h-menu">
      <li>Add Rest</li>
      <li>Next Func</li>
      <li>Next Func</li>
    </ul>
  </nav>
  <section>
    <rest></rest>
    <arrow></arrow>
  </section>
</main>
</template>
<script>
import Rest from './Rest';
import Arrow from './Arrow';

export default {
  name: "Home",
  components: {
    Rest,
    Arrow
  }
}
</script>
<style lang="sass">

</style>

