<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error neque
      iure quia ad vel consequatur doloribus aspernatur nesciunt quis, nisi sunt
      doloremque maiores fuga quod ab reprehenderit laborum numquam?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
