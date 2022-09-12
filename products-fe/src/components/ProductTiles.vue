<template>
  <div v-if="product">
    <h3>{{products.name}}</h3>
    <p>Price: £{{convertToPounds}}</p>
    <p>{{products.description}}</p>
    <p>Weight: {{products.weight}}g</p>
    <p>Category: {{products.department}}: {{products.type}}</p>
  </div>
</template>

<script>
  import getProducts from ('../api.jsx');

  const convertToPounds = (products.priceValue).toFixed(2);

  export default {
    name: 'ProductTiles',
    props: ['name', 'description', 'priceValue', 'weight', 'department', 'type'],
    data() {
      return {
        product: null
      }
    },
    mounted(){
      this.products = getProducts()
    }
  }

</script>

<style>

</style>
