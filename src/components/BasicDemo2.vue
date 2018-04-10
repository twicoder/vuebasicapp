<template>
    <div>
      <h1>Test!</h1>
      <div id="counter-event-example">
        <p>{{ total }}</p>
        <button-counter v-on:increment="incrementTotal"></button-counter>
        <button-counter v-on:increment="incrementTotal"></button-counter>
      </div>

      <div id="message-event-example" class="demo">
        <p v-for="msg in messages">{{ msg }}</p>
        <button-message v-on:message="handleMessage"></button-message>
      </div>
      <button v-on:click.native="doTheThing">ClickMeWithNativeEvent</button>
    </div>
</template>

<script>
import Vue from 'vue'

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

Vue.component('button-message', {
  template: `
  <div>
    <input type="text" v-model="message" />
    <button v-on:click="handleSendMessage">Send</button>
  </div>`,
  data: function () {
    return {
      message: 'test message'
    }
  },
  methods: {
    handleSendMessage: function () {
      this.$emit('message', { message: this.message })
    }
  }
})

export default {
  name: 'BasicDemo2',
  data () {
    return {
      total: 0,
      messages: []
    }
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    },
    handleMessage: function (payload) {
      this.messages.push(payload.message)
    },
    doTheThing: function () {
      console.log('Do something here!')
    }
  }
}
</script>

<style scoped>

</style>
