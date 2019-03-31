<template>
  <div id="app">
    <HelloWorld/>
    <HelloWorld1/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloWorld1 from './components/HelloWorld1.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld1
  }
}
</script>

<style>
#app {

}
</style>
