<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="p in products">
        <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

//Fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
h2 {
  color: red;
  font-size: 36px;
}
p {
  color: blue;
  font-size: 18px;
  margin: 10px;
}
</style>
