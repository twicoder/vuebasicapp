<template>
  <div>
    <div id="app">
      {{ msg }}
    </div>
    <my-component2></my-component2>

    <div>
      <simple-counter></simple-counter>
      <simple-counter></simple-counter>
      <simple-counter></simple-counter>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

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

Vue.component('my-component2', {
  template: '<h1>{{ message }}</h1>',
  data () {
    return {
      message: 'hello123'
    }
  }
})

export default {
  name: 'BasicDemo1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
