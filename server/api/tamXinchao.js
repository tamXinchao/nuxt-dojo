export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${config.secretKey}`
  );
  return data;
});
