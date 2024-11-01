<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="p in products">
        <ProductCard :product="p" />
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

useHead({
  title: "NuxtJS Dojo | Merch",
  meta: [
    {
      name: "description",
      content: "This is the Merch 3 page",
    },
  ],
});
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
