<template>
    <h1><a class="logo" href="index.html">ИНТЕРНЕТ-МАГАЗИН</a></h1>
</template>

<script>
export default {
    name: "TheLogo",
    props: ['text']
}
</script>

<style scoped>
.logo {
  padding-top: 0;
  font-size: 40pt;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
}
.logo:hover {
  color: #fcdc8f;
}
</style>