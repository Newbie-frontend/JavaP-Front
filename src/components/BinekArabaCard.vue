<template>
  <div class="m-2 cartwidth" v-if="isSelected">
    <b-card no-body>
      <template #header>
        <h4 class="mb-0">{{ arabaTipi }}</h4>
      </template>

      <b-card-body>
        <b-card-title
          ><b>{{ car.marka }}</b></b-card-title
        >
        <b-card-sub-title class="mb-2">{{ car.model }}</b-card-sub-title>
        <b-card-text>
          Arabanin Fiyati: <b>{{ car.fiyat }}</b> <br />
          Renk: <b>{{ car.renk }}</b> <br />
          Yakit Tipi: <b>{{ car.yakit }}</b>
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item
          >{{ firstText }}:
          <b>{{ car[firstText.toLowerCase()] }}</b></b-list-group-item
        >
        <b-list-group-item
          >{{ secondText }}:
          <b>{{ car[secondText.toLowerCase()] }}</b></b-list-group-item
        >
      </b-list-group>

      <b-card-body
        class="text-center d-flex justify-content-center align-items-center heightStyle silHover"
      >
        <a class="card-link silColor" @click="aracSil">Aracı Sil</a>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arabaTipi: null,
      isSelected: true,
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
    imageFinder() {
      this.image =
        this.arabaTipi == "Binek"
          ? "@/assets/binek.jpg"
          : this.arabaTipi == "Kamyon"
          ? "@/assets/kamyon.jpg"
          : this.arabaTipi == "iş Makinesi"
          ? "@/assets/ismakinesi.jpg"
          : this.arabaTipi == "Otobus"
          ? "@/assets/otobus.png"
          : "";
    },
    aracSil() {
      console.log("ID: " + this.car.id);
      this.$store
        .dispatch("arabaSil", { id: this.car.id })
        .then(() => {
          this.isSelected = false;
        })
        .catch((e) => {
          console.log("something happened: " + e);
        });
    },
  },
  created() {
    this.findType();
    this.imageFinder();
  },
  mounted() {},
  computed: {
    firstText() {
      return this.arabaTipi == "Binek"
        ? "Tip"
        : this.arabaTipi == "Kamyon"
        ? "Uzunluk"
        : this.arabaTipi == "iş Makinesi"
        ? "Agirlik"
        : this.arabaTipi == "Otobus"
        ? "Uzunluk"
        : "";
    },
    secondText() {
      return this.arabaTipi == "Binek"
        ? "Vites"
        : this.arabaTipi == "Kamyon"
        ? "TasiyabilecekYuk"
        : this.arabaTipi == "iş Makinesi"
        ? "Tip"
        : this.arabaTipi == "Otobus"
        ? "Koltuk Sayisi"
        : "";
    },
  },
};
</script>

<style scoped>
.heightStyle {
  height: 64px;
}
.silColor {
  font-weight: 900;
  color: rgb(118, 117, 117);
}
.silColor:hover {
  color: rgb(255, 255, 255);
}
.silHover:hover .silColor {
  color: white;
}
.silHover {
  background-color: rgba(255, 0, 0, 0.3);
}
.silHover:hover {
  background-color: rgb(227, 58, 58);
  cursor: pointer;
  font-size: 22px;
}
.cartwidth {
  width: 20rem;
}
</style>
