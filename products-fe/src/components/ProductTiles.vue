<script>
  const convertToPounds = (priceValue).toFixed(2);

  export default {
    name: 'ProductTiles',
    props: ['name', 'description', 'priceValue', 'weight', 'department', 'type']
  }
</script>

<template>
  <article>
    <h3>{{name}}</h3>
    <p>Price: £{{convertToPounds}}</p>
    <p>{{description}}</p>
    <p>Weight: {{weight}}g</p>
    <p>Category: {{department}}: {{type}}</p>
  </article>
</template>

<style>

</style>
