<template>
  <div class="parallax pt-4 m-0">
    <div class="about container">
      <h1 class="text-center mb-4 meriendaFamily fw-bolder text-light">
        Araba Sorgulama Paneli
      </h1>
      <b-form
        @submit.prevent="onSubmit"
        class="p-5 border rounded d-flex flex-column panelColor"
      >
        <b-alert
          v-model="showDismissibleAlert2"
          variant="danger"
          dismissible
          fade
          >Sorgulamak için araba tipini seçmeniz gerekir. uyarılara uydukten
          sonra ilgili düğmeler açılır.</b-alert
        >
        <b-alert
          v-model="showDismissibleAlert1"
          variant="danger"
          dismissible
          fade
          >Araba Eklemek için aşağadaki Eklemeye git düğmesine basarak Ekleme
          paneline gidiniz gerekmektedir.</b-alert
        >
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Araba Tipi</label
          >
          <b-form-select
            class="formClass"
            v-model="arabaTipi"
            :options="options"
          ></b-form-select>
        </div>
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Marka</label
          >
          <b-form-select
            class="formClass"
            v-model="araba.marka"
            :options="keys[0].options"
            :select-size="4"
          ></b-form-select>
        </div>
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Model</label
          >
          <b-form-input
            class="formClass-text"
            v-model="araba.model"
            placeholder="Araba Modelini Giriniz  Örnek: 2020"
          ></b-form-input>
        </div>
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Fiyat</label
          >
          <b-form-input
            class="formClass-text"
            v-model="araba.fiyat"
            placeholder="Araba Fiyatini giriniz"
          ></b-form-input>
        </div>
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Renk</label
          >
          <b-form-select
            class="formClass"
            v-model="araba.renk"
            :options="keys[1].options"
          ></b-form-select>
        </div>
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Yakit tipi</label
          >
          <b-form-select
            class="formClass"
            v-model="araba.yakit"
            :options="keys[2].options"
          ></b-form-select>
        </div>
        <div class="my-2 d-flex labelFull">
          <label
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Sehir</label
          >
          <b-form-input
            class="formClass-text"
            v-model="araba.sehir"
            placeholder="Şehri giriniz"
          ></b-form-input>
        </div>
        <div class="my-2 d-flex labelFull" v-if="arabaTipi">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >{{ text1 }}</label
          >
          <b-form-input
            class="formClass-text"
            v-model="araba[text1]"
            placeholder="Istenilen Degeri giriniz"
          ></b-form-input>
        </div>
        <div class="my-2 d-flex labelFull" v-if="arabaTipi">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >{{ text2 }}</label
          >
          <b-form-input
            class="formClass-text"
            v-model="araba[text2]"
            placeholder="Istenilen Degeri giriniz"
          ></b-form-input>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <b-button
            :disabled="!isSelected"
            type="submit"
            variant="outline-light"
            class="paddingX py-2 mr-5 align-self-center"
            >Sorgula
            <b-icon icon="search" scale="1" variant="outline-light"></b-icon
          ></b-button>
          <b-button
            :to="{ name: 'add' }"
            variant="outline-light"
            class="paddingX align-self-center py-3 buttonFontSize d-flex justify-content-center align-items-center"
            >Eklemeye Git
            <b-icon
              icon="box-arrow-right"
              scale="1.5"
              variant="outline-light"
              class="ml-4"
            ></b-icon
          ></b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      arabaTipi: null,
      isSelected: false,
      allFilled: true,
      showDismissibleAlert1: true,
      showDismissibleAlert2: true,
      showDismissibleAlert3: true,
      keys: [
        {
          name: "marka",
          options: [
            { value: "", text: "-- Bir araba modeli seciniz --" },
            { value: "BMW", text: "BMW" },
            { value: "Porsche", text: "Porsche" },
            { value: "Volvo", text: "Volvo" },
            { value: "Volkswagon", text: "Volkswagon" },
            { value: "Mercedes-Benz", text: "Mercedes-Benz" },
            { value: "Ferari", text: "Ferari" },
            { value: "Fiyat", text: "Fiyat" },
            { value: "Ford", text: "Ford" },
            { value: "CAT", text: "CAT" },
            { value: "JBC", text: "JBC" },
            { value: "Hitachi", text: "Hitachi" },
            { value: "AKIA", text: "AKIA" },
            { value: "BMC", text: "BMC" },
            { value: "DAF", text: "DAF" },
            { value: "Hyundai", text: "Hyundai" },
            { value: "MAN", text: "MAN" },
            { value: "Scania", text: "Scania" },
            { value: "Iveco", text: "Iveco" },
          ],
        },
        {
          name: "renk",
          options: [
            { value: "", text: "-- Bir renk seciniz --" },
            { value: "Beyaz", text: "Beyaz" },
            { value: "Mavi", text: "Mavi" },
            { value: "Sari", text: "Sari" },
            { value: "Siyah", text: "Siyah" },
            { value: "Yesil", text: "Yesil" },
            { value: "Kahverengi", text: "Kahverengi" },
            { value: "Kirmizi", text: "Kirmizi" },
            { value: "Gri", text: "Gri" },
          ],
        },
        {
          name: "yakitTipi",
          options: [
            { value: "", text: "-- Bir yakit tipi seciniz --" },
            { value: "benzin", text: "Benzin" },
            { value: "mazot", text: "Mazot" },
            { value: "lpg", text: "LPG" },
            { value: "elektrik", text: "Elektrik" },
          ],
        },
      ],
      araba: this.createFreshCar(),
      options: [
        { value: null, text: "-- Bir Araba tipi seciniz --", disabled: true },
        { value: "binek", text: "Binek" },
        { value: "isMakinesi", text: "İş Makinesi" },
        { value: "otobus", text: "Otobüs" },
        { value: "kamyon", text: "Kamyon" },
      ],
      text1: null,
      text2: null,
    };
  },
  watch: {
    arabaTipi(newValue, oldValue) {
      if (newValue != oldValue) {
        this.isSelected = true;
        this.araba = this.createFreshCar();
        if (newValue == "binek") {
          this.text1 = "tip";
          this.text2 = "vites";
        } else if (newValue == "isMakinesi") {
          this.text1 = "agirlik";
          this.text2 = "tip";
        } else if (newValue == "otobus") {
          this.text1 = "uzunluk";
          this.text2 = "koltukSayisi";
        } else if (newValue == "kamyon") {
          this.text1 = "uzunluk";
          this.text2 = "tasiyabilecekYuk";
        } else if (newValue == null) {
          this.text1 = "";
          this.text2 = "";
          this.isSelected = false;
        }
      }
    },
  },
  validations: {
    event: {
      marka: { required },
      model: { required },
      fiyat: { required },
      renk: { required },
      yakit: { required },
      sehir: { required },
    },
  },
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    getCars() {
      store.dispatch("getCars");
    },
    onSubmit() {
      this.$store
        .dispatch("getCars", { arabaTipi: this.arabaTipi, araba: this.araba })
        .then(() => {
          this.$router.push({
            name: "result",
            params: { car: this.araba },
          });
          this.araba = this.createFreshCar();
        });
    },
    createFreshCar() {
      if (this.arabaTipi == null)
        return {
          marka: "",
          model: null,
          fiyat: null,
          renk: "",
          yakit: "",
          sehir: "",
        };
      else if (this.arabaTipi == "binek")
        return {
          marka: "",
          model: null,
          fiyat: null,
          renk: "",
          yakit: "",
          sehir: "",
          tip: "",
          vites: "",
        };
      else if (this.arabaTipi == "isMakinesi")
        return {
          marka: "",
          model: null,
          fiyat: null,
          renk: "",
          yakit: "",
          sehir: "",
          agirlik: null,
          tip: "",
        };
      else if (this.arabaTipi == "otobus")
        return {
          marka: "",
          model: null,
          fiyat: null,
          renk: "",
          yakit: "",
          sehir: "",
          uzunluk: null,
          koltukSayisi: null,
        };
      else if (this.arabaTipi == "kamyon")
        return {
          marka: "",
          model: null,
          fiyat: null,
          renk: "",
          yakit: "",
          sehir: "",
          uzunluk: "",
          tasiyabilecekYuk: "",
        };
    },
    arabaEkle() {
      this.$store
        .dispatch("sendCar", {
          arabaTipi: this.arabaTipi,
          araba: this.araba,
        })
        .then(() => {
          this.araba = this.createFreshCar();
        });
    },
  },
  computed: {
    ...mapState(["cars"]),
  },
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.parallax {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/sorgulamaPaneli.jpg);
  min-height: 1000px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.labelsClass {
  width: 12vw;
}
.formClass {
  width: 25vw;
}
.formClass-text {
  width: 50vw;
}
.meriendaFamily {
  font-family: Merienda;
}
.paddingX {
  padding: 5vw;
  letter-spacing: 0.3vw;
  font-family: Merienda;
  font-size: 30px;
  font-weight: 900;
}
.font-weight-600 {
  font-weight: 600;
}
.fs-20 {
  font-size: 20px;
  color: white;
}
.panelColor {
  background-color: rgba(74, 119, 141, 0.7);
}
.buttonFontSize {
  font-size: 19px;
}
@media only screen and (max-width: 992px) {
  .labelFull {
    flex-direction: column;
  }
  .labelsClass {
    width: 55vw;
  }
  .formClass {
    width: 40vw;
  }
  .formClass-text {
    width: 55vw;
  }
}
</style>
