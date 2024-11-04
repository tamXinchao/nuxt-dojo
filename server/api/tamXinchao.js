export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${config.secretKey}`
  );
  const { name } = getQuery(event);
  const { age } = await readBody(event);

  return {
    message: `Hello ${name}! + ${age}`,
  };
});
