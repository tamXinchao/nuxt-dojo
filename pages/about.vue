<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      aliquid explicabo ad delectus eveniet ea quaerat eum magnam. Vitae odio et
      eius optio ea possimus voluptatum? Laboriosam a saepe nam.
    </p>
    <div>{{ data.message }}</div>
  </div>
</template>

<script setup>
const { data } = useFetch("/api/tamXinchao?name=tam", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ age: 19 }),
});
console.log(data);
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
