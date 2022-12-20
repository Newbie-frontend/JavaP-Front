<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merienda&display=swap");

#app {
  font-family: Merienda;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
