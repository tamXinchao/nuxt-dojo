<template>
  <div class="card text-center">
    <img
      :src="product.image"
      alt="Product thumb"
      class="w-full h-48 object-cover rounded-md mb-4 thumb"
    />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`"
      ><p class="btn mt-4">View detail</p></NuxtLink
    >
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
