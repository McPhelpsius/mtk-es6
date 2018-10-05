<template>
  <main>
    <section>
      <!-- <rest></rest> -->
      <!-- <arrow></arrow> -->
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

<style lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
.dog-profile {
  border-top: 1px solid #4578a9;
  padding: 10px;

  h4 {
    font-size: 15px;
  }
}

img {
  max-width: 200px;
  border-radius: 10px;
}
</style>


