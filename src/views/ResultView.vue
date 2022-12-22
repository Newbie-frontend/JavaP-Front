<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div class="d-flex flex-wrap maxWidth margin-auto">
      <BinekArabaCard
        v-for="(car, index) in this.$store.state.cars"
        :key="index"
        :car="car"
      />
      <ul>
        <li v-for="(car, index) in this.$store.state.cars" :key="index">
          {{ car }}
        </li>
      </ul>
    </div>

    <!-- <div
      v-for="(car, index) in this.$store.state.cars"
      :key="index"
      class="d-flex flex-column border rounded p-2 m-2 cartClass"
    >
      <h4>{{ car.marka }}</h4>
      <div>{{ car.model }}</div>
      <div>{{ car.fiyat }}</div>
      <div>{{ car.renk }}</div>
      <div>{{ car.yakit }}</div>
    </div> -->
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
.maxWidth {
  min-width: 1200px;
}
.margin-auto {
  margin: 0 auto;
}
</style>
