export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { code } = event.context.params;

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${config.secretKey}`;
  const { data } = await $fetch(uri);
  return data;
});
