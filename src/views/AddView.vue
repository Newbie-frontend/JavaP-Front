<template>
  <div class="parallax pt-4 m-0">
    <div class="about container">
      <h1 class="text-center mb-4 meriendaFamily fw-bolder text-light">
        Araba Ekleme Paneli
      </h1>
      <b-form
        @submit.prevent="onSubmit"
        class="p-5 border rounded d-flex flex-column panelColor"
      >
        <b-alert
          v-model="showDismissibleAlert"
          variant="danger"
          dismissible
          fade
          class="alertFontSize"
          >Araba Eklemek için Bütün inputları doldurmanız gerekmektedir.
          Uyarılara uydukten sonra Ekle butonu açılır</b-alert
        >
        <div class="my-2 d-flex labelFull">
          <label
            for=""
            class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
            >Araba tipi</label
          >
          <b-form-select
            class="formClass"
            v-model="arabaTipi"
            :options="options"
            v-on="$listeners"
          ></b-form-select>
        </div>
        <div>
          <div>
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
                @blur="$v.araba.marka.$touch()"
                :class="{ error: $v.araba.marka.$error }"
              ></b-form-select>
            </div>
            <!-- <select
              class="formClass rounded"
              v-model="araba.marka"
              @blur="$v.araba.marka.$touch()"
              :class="{ error: $v.araba.marka.$error }"
            >
              <option
                v-for="(option, index) in keys[0].options"
                value="option.value"
                :key="index"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
          <template v-if="$v.araba.marka.$error">
            <p
              v-if="!$v.araba.marka.requierd"
              class="errorMessage errorPosition"
            >
              Lutfen Marka'yi giriniz
            </p>
          </template> -->
            <!-- <b-form-group
            id="example-input-group-2"
            label="shit"
            label-for="example-input-2"
          >
            <b-form-select
              id="example-input-2"
              name="example-input-2"
              v-model="$v.araba.marka.$model"
              :options="keys[0].options"
              :state="validateState('marka')"
              aria-describedby="input-2-live-feedback"
            ></b-form-select>

            <b-form-invalid-feedback id="input-2-live-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group> -->

            <template v-if="$v.araba.marka.$error">
              <p
                v-if="!$v.araba.marka.requierd"
                class="errorMessage errorPosition"
              >
                Lütfen marka'yı giriniz
              </p>
            </template>
          </div>
        </div>
        <div>
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
              @blur="$v.araba.model.$touch()"
              :class="{ error: $v.araba.model.$error }"
            ></b-form-input>
          </div>
          <template v-if="$v.araba.model.$error">
            <p
              v-if="!$v.araba.model.requierd"
              class="errorMessage errorPosition"
            >
              Lütfen Modeli giriniz
            </p>
            <p
              v-if="!$v.araba.model.numeric"
              class="errorMessage errorPosition"
            >
              Lütfen Modeli istenilen formatta giriniz
            </p>
          </template>
        </div>
        <div>
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
              @blur="$v.araba.fiyat.$touch()"
              :class="{ error: $v.araba.fiyat.$error }"
            ></b-form-input>
          </div>
          <template v-if="$v.araba.fiyat.$error">
            <p
              v-if="!$v.araba.fiyat.requierd"
              class="errorMessage errorPosition"
            >
              Lütfen Fiyatı giriniz
            </p>
            <p
              v-if="!$v.araba.fiyat.numeric"
              class="errorMessage errorPosition"
            >
              Lütfen Fiyatı Sayı olarak giriniz
            </p>
          </template>
        </div>
        <div>
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
              @blur="$v.araba.renk.$touch()"
              :class="{ error: $v.araba.renk.$error }"
            ></b-form-select>
          </div>
          <template v-if="$v.araba.renk.$error">
            <p
              v-if="!$v.araba.renk.requierd"
              class="errorMessage errorPosition"
            >
              Lütfen Rengi giriniz
            </p>
          </template>
        </div>
        <div>
          <div>
            <div class="my-2 d-flex labelFull">
              <label
                for=""
                class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
                >Yakıt tipi</label
              >
              <b-form-select
                class="formClass"
                v-model="araba.yakit"
                :options="keys[2].options"
                @blur="$v.araba.yakit.$touch()"
                :class="{ error: $v.araba.yakit.$error }"
              ></b-form-select>
            </div>
            <template v-if="$v.araba.yakit.$error">
              <p
                v-if="!$v.araba.yakit.requierd"
                class="errorMessage errorPosition"
              >
                Lütfen Yakıt tipini giriniz
              </p>
            </template>
          </div>
        </div>
        <div>
          <div class="my-2 d-flex labelFull">
            <label
              class="labelsClass font-weight-600 fs-20 d-flex align-items-center"
              >Sehir</label
            >
            <b-form-input
              class="formClass-text"
              v-model="araba.sehir"
              placeholder="Şehri giriniz"
              @blur="$v.araba.sehir.$touch()"
              :class="{ error: $v.araba.sehir.$error }"
            ></b-form-input>
          </div>
          <template v-if="$v.araba.sehir.$error">
            <p
              v-if="!$v.araba.sehir.requierd"
              class="errorMessage errorPosition"
            >
              Lütfen Sehri giriniz
            </p>
            <p v-if="!$v.araba.sehir.alpha" class="errorMessage errorPosition">
              Lütfen Sehri Doğru giriniz
            </p>
          </template>
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
        <p
          v-if="$v.$anyError"
          class="errorMessage errorPosition"
          style="font-size: 18px"
        >
          Lütfen istenilen inputları doğru doldurunuz.
        </p>
        <div class="d-flex justify-content-center mt-5">
          <b-button
            :to="{ name: 'about' }"
            variant="outline-light"
            class="paddingX align-self-center fontSize py-3 d-flex justify-content-center align-items-center"
          >
            <b-icon
              icon="box-arrow-left"
              scale="1.5"
              variant="outline-light"
              class="mr-4"
            ></b-icon
            >Sorgulamaya Dön
          </b-button>
          <b-button
            v-b-modal.modal-1
            @click="arabaEkle"
            variant="outline-light"
            class="paddingX py-2 align-self-center ml-4"
            :disabled="$v.$anyError"
          >
            Ekle
            <b-icon
              icon="save"
              scale="0.8"
              variant="outline-light"
              class="mr-4"
            ></b-icon
          ></b-button>

          <b-modal
            id="modal-1"
            title="Server Cevabi"
            ref="my-modal"
            hide-footer
            hide-header
          >
            <p class="my-4 text-center">Araba Eklendi!</p>
            <b-button
              class="mt-3"
              variant="outline-success"
              block
              @click="hideModal"
              >Tamam</b-button
            >
          </b-modal>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { required, numeric, alpha } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      arabaTipi: null,
      showDismissibleAlert: true,
      keys: [
        {
          name: "marka",
          options: [
            {
              value: "",
              text: "-- Bir araba modeli seciniz --",
              disabled: true,
            },
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
            { value: "", text: "-- Bir renk seciniz --", disabled: true },
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
            { value: "", text: "-- Bir yakit tipi seciniz --", disabled: true },
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
        }
      }
    },
  },
  validations: {
    araba: {
      marka: { required },
      model: { required, numeric },
      fiyat: { required, numeric },
      renk: { required },
      yakit: { required },
      sehir: { required, alpha },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.araba[name];
      return $dirty ? !$error : null;
    },
    hideModal() {
      this.$refs["my-modal"].hide();
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("sendCar", {
            arabaTipi: this.arabaTipi,
            araba: this.araba,
          })
          .then(() => {
            this.araba = this.createFreshCar();
            this.$v.$reset();
          });
      }
    },
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
.errorPosition {
  margin-left: 13vw;
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
.fontSize {
  font-size: 19px;
}
.errorMessage {
  color: red;
  font-size: 12px;
}
.alertFontSize {
  font-size: 15px;
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
  .errorMessage {
    margin-left: 1vw;
    font-size: 10px;
  }
  .fs-20 {
    font-size: 14px;
  }
}
</style>
