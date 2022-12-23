<template>
  <div class="d-flex justify-content-center flex-column align-items-center">
    <div class="container text-center m-4">
      <h3>Bu Sorgulamaya Uygun Olan Araclar</h3>
    </div>
    <div class="d-flex flex-wrap justify-content-center">
      <div class="d-flex flex-wrap width">
        <BinekArabaCard
          v-for="(car, index) in this.$store.state.cars"
          :key="index"
          :car="car"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BinekArabaCard from "../components/BinekArabaCard.vue";
export default {
  components: {
    BinekArabaCard,
  },
};
</script>

<style>
.cartClass {
  width: 200px;
}
.width {
  width: 1240px;
}
</style>
