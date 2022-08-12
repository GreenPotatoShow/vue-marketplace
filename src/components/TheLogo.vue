<template>
    <h1 @click="$emit('go-to-index')" class="logo">ИНТЕРНЕТ-МАГАЗИН</h1>
</template>

<script>
export default {
    name: "TheLogo",
    props: ['text']
}
</script>

<style scoped>
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