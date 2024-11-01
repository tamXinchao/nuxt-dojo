<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <img
      :src="products.image"
      alt="Product Image"
      class="w-full h-48 object-cover rounded-md mb-4"
    />
    <h2 class="text-2xl font-semibold mb-2">{{ products.title }}</h2>
    <p class="text-lg text-gray-700 mb-2">
      Price:
      <span class="font-bold text-green-600">{{
        products.price | currency
      }}</span>
    </p>
    <p class="italic text-gray-600 mb-4">{{ products.description }}</p>
    <button
      class="btn bg-[#12b488] text-white px-4 py-2 rounded-md hover:bg-[#0f8b70] transition duration-200"
    >
      Add to Cart
    </button>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id }
);
</script>

<style scoped></style>
