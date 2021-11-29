<template>
  <div id="nav">
    <p>
      <router-link to="/pokemon/1">Pokemon 1</router-link>|
      <router-link to="/pokemon/2">Pokemon 2</router-link>|
      <router-link to="/pokemon/3">Pokemon 3</router-link>|
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
}
</style>
