<template>
  <section>
    {{add(2,3,4)}}
    {{add3(2,3,4)}}
    {{addVariable([2,4,6,8])}}
    {{esAdd(2,4,6,8)}}
    {{esAdd(2,4)}}
    {{esAdd(2,3,6,5,82,14,3)}}
    {{esAdd(2)}}
    {{addTwoOrMore(2)}}
    {{addTwoOrMore(2,3)}}
    {{addTwoOrMore(2, 35, 43, 12)}}
  </section>
</template>

<script>
export default {
  name: "Rest",
  methods: {
    add(a,b) {
      return a + b;
    },
    add3(a,b,c) {
      return a+b+c;
    },
    addVariable(arr) {
      // pass in array [numbers], but would HAVE to be an array
      return arr.reduce(this.add, 0);
    },
    esAdd(...params) {
      return params.reduce((a,b) => a + b, 0);
    },
    addTwoOrMore(a, b, ...params) {
      return [a, b, ...params].reduce((a,b) => a + b, 0);
    }
  }
}
</script>

<style lang="sass">

</style>
>

</style>
