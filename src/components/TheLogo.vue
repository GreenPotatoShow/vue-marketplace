<template>
  <a>
    <router-link to="/">
      <h1 class="logo">ИНТЕРНЕТ-МАГАЗИН</h1>
    </router-link>
  </a>
</template>

<script>
export default {
  name: 'TheLogo',
};
</script>

<style>
.logo {
  margin-top: 28px;
  padding-top: 0;
  font-size: 40pt;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
  cursor: pointer;
}
.logo:hover {
  color: #fcdc8f;
}
</style>
