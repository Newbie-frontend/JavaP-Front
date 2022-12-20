<template>
  <div class="d-flex flex-column flex-xl-row">
    <div class="home flex-fill d-flex flex-column">
      <h1 class="text-light align-self-center my-4 my-xl-5 text-center">
        Hoş Geldiniz
      </h1>
      <h5 class="text-light mb-4 align-self-center text-center">
        Araba Stok Yönetimi Uygulaması
      </h5>
      <h5 class="text-light align-self-center text-center">
        Başlamak için Başla düğmesine basın
      </h5>
      <router-link
        :to="{ name: 'about' }"
        class="align-self-center my-4 my-xl-5 text-decoration-none px-5 py-3 bg-light rounded"
        >Başla</router-link
      >
    </div>
    <div class="flex-fill imageSize"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  background-color: black;
}
.color-white {
  color: white;
}
.imageSize {
  background-image: url(../assets/homePage.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 70vw;
  height: 100vh;
}

@media only screen and (max-width: 1200px) {
  .imageSize {
    background-image: url(../assets/araba2.jpg);
    width: 100vw;
    height: 50vh;
    background-size: contain;
    margin-top: 50px;
  }
}
</style>
