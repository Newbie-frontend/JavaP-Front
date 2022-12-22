<template>
  <div class="m-2">
    <b-card
      no-body
      style="max-width: 20rem"
      img-src="https://placekitten.com/380/200"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">{{ arabaTipi }} Araba</h4>
      </template>

      <b-card-body>
        <b-card-title>{{ car.marka }}</b-card-title>
        <b-card-sub-title class="mb-2">{{ car.model }}</b-card-sub-title>
        <b-card-text>
          Arabanin Fiyati: {{ car.fiyat }} <br />
          Renk: {{ car.renk }}
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arabaTipi: null,
    };
  },
  props: {
    car: {
      type: Object,
      requierd: true,
    },
  },
  methods: {
    findType() {
      if ("vites" in this.car) {
        this.arabaTipi = "Binek";
      }
      if ("tasiyabilecekYuk" in this.car) {
        this.arabaTipi = "Kamyon";
      }
      if ("agirlik" in this.car) {
        this.arabaTipi = "iş Makinesi";
      }
      if ("koltukSayisi" in this.car) {
        this.arabaTipi = "Otobus";
      }
    },
  },
  created() {
    this.findType();
  },
};
</script>

<style scoped></style>
