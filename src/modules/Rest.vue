<template>
  <section id="math-section">

    <article>
      <pre>
        <span class="function">function</span> <span class="function-name">add(a, b)</span> {
          return a + b;
        }
      </pre>
      <div class="pre">
        add(2, 3) = {{add(2, 3)}}
      </div>
      <div class="pre">
        add(2, 3, 4) = {{add(2, 3, 4)}}
      </div>
    </article>

    <article>
      <pre>
        <span class="function">function</span> <span class="function-name">add3(a, b, c)</span> {
          return a+b+c;
        }
      </pre>
      <div class="pre">
        add3(2, 3, 4) = {{add3(2, 3, 4)}}
      </div>
    </article>

    <article>
      <pre>
        <span class="function">function</span> <span class="function-name">addVariable(arr)</span> {
          // pass in array [numbers],  but would HAVE to be an array
          return arr.reduce(this.add,  0);
        }
      </pre>
      <div class="pre">
        addVariable([2, 4, 6, 8]) = {{addVariable([2, 4, 6, 8])}}
      </div>
    </article>

    <article>
      <pre>
        <span class="function">function</span> <span class="function-name">(...params)</span> {
          return params.reduce((a, b) => a + b,  0);
        }
      </pre>
      <div class="pre">
        esAdd(2, 4, 6, 8) = {{esAdd(2, 4, 6, 8)}}
      </div>
      <div class="pre">
        esAdd(2, 4) = {{esAdd(2, 4)}}
      </div>
      <div class="pre">
        esAdd(2, 3, 6, 5, 82, 14, 3) = {{esAdd(2, 3, 6, 5, 82, 14, 3)}}
      </div>
      <div class="pre">
        esAdd(2) = {{esAdd(2)}}
      </div>
    </article>

    <article>
      <pre>
        <span class="function">function</span> <span class="function-name">addTwoOrMore(a,  b,  ...params)</span> {
          return [a,  b,  ...params].reduce((a, b) => a + b,  0);
        }
      </pre>
      <div class="pre">
        addTwoOrMore(2) = {{addTwoOrMore(2)}}
      </div>
      <div class="pre">
        addTwoOrMore(2, 3) = {{addTwoOrMore(2, 3)}}
      </div>
      <div class="pre">
        addTwoOrMore(2, 35, 43, 12) = {{addTwoOrMore(2, 35, 43, 12)}}
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Rest", 
  methods: {
    add(a, b) {
      return a + b;
    }, 
    add3(a, b, c) {
      return a+b+c;
    }, 
    addVariable(arr) {
      return arr.reduce(this.add,  0);
    }, 
    esAdd(...params) {
      return params.reduce((a, b) => a + b,  0);
    }, 
    addTwoOrMore(a,  b,  ...params) {
      return [a,  b,  ...params].reduce((a, b) => a + b,  0);
    }
  }
}
</script>

<style scoped lang="scss">
#math-section {
  flex-direction: column;
  width: 100vw;
  align-items: flex-start;
}
article {
  background-color: #337;
  width: 100%;
  color: #ddd;
  margin: 0;
  padding: 30px;
}
pre {
  padding-top: 20px;
  padding-bottom: 5px;
}
.function {
  color: #bb7;
}
.function-name {
  color: #d66;
}
.pre {
  text-align: center;
  padding: 10px;
  font-size: 25px;
}
</style>

