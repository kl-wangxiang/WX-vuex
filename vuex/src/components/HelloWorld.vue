<template>
  <div class="hello">
    <h1>Helo World</h1>
    <ul>
      <li v-for="item in saleProducts">
        <span>{{item.name}}</span>
        <span>{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed:{
      product(){
        return this.$store.state.products;
      },
      saleProducts(){
        return this.$store.getters.saleProoduct
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
