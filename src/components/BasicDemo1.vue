<template>
  <div>
    <div id="app">
      {{ msg }}
    </div>
    <my-component2></my-component2>
    <my-component2></my-component2>
    <my-component2></my-component2>

    <child message="hello!"></child>
    <child message="hello!"></child>
    <child2 my-message="hello2!"></child2>

    <div>
      <input v-model="parentMsg">
      <br>
      <child2 v-bind:my-message="parentMsg"></child2>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('my-component2', {
  template: '<div><span>{{ message }} : </span><simple-counter></simple-counter></div>',
  data () {
    return {
      message: 'hello123'
    }
  }
})

Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<span>{{ message }}</span>'
})

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  // 但是我们却给每个组件实例返回了同一个对象的引用
  data: function () {
    return {
      counter: 0
    }
  }
})

Vue.component('child2', {
  // 在 JavaScript 中使用 camelCase
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

export default {
  name: 'BasicDemo1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parentMsg: 'Message from parent'
    }
  }
}
</script>

<style scoped>

</style>
