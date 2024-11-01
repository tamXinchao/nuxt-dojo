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
if (!product.id) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found - Không tồn tại sản phẩm này",
    fatal: true,
  });
}
</script>

<style scoped></style>
