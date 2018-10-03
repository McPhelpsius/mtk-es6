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
    <classes></classes>
  </section>
</main>
</template>
<script>
import Rest from './Rest';
import Arrow from './Arrow';
import Classes from './Classes';

export default {
  name: "Home",
  components: {
    Rest,
    Arrow,
    Classes
  }
}
</script>
<style lang="sass">

</style>

