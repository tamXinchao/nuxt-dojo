<template>
  <ProductDetail :product="product" />
</template>
<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id }
);
</script>

<style scoped></style>
