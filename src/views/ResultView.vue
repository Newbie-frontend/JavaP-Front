<template>
  <div class="d-flex flex-wrap justify-content-center container">
    <div
      v-for="(car, index) in this.$store.state.cars"
      :key="index"
      class="d-flex flex-column border rounded p-2 m-2 cartClass"
    >
      <h4>{{ car.marka }}</h4>
      <div>{{ car.model }}</div>
      <div>{{ car.fiyat }}</div>
      <div>{{ car.renk }}</div>
      <div>{{ car.yakit }}</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style>
.cartClass {
  width: 200px;
}
</style>
