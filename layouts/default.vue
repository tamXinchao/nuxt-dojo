<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt dojo</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Proudcts</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
