<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Our lastest offers at your fingertips!
    </h3>
    <div>
      <button>All</button>
      <button>Books</button>
      <button>Casual</button>
      <button>Ceramics</button>
      <button>Electrical</button>
      <button>Electronics</button>
      <button>Running</button>
      <button>Vouchers</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
