<template>
  <div id="app">
    <my-todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTodo from './components/MyTodo.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyTodo
  }
})
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
