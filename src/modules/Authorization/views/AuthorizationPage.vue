<template>
  <div class="authorization">
    <h1 class="authorization__title">LeadHit</h1>
    <form @submit.prevent="submitHandler" class="form">
      <div class="form__header">Вход</div>
      <div class="form__body">
        <div class="form__input-wrapper">
          <input
            class="form__input"
            type="text"
            name="id"
            id="id"
            placeholder="Введите id"
            v-model="id"
            :class="setClassStatus"
            maxlength="24"
            onkeyup="this.value=this.value.replace(/\s/,'')"
          />
          <small v-if="validationInput" class="form__description">
            id сайта должен содержать 24 символа.
            {{
              setTextWithEnding(getLengthInput, "Введен", "Введено", "Введено")
            }}
            {{ getLengthInput }}
            {{
              setTextWithEnding(getLengthInput, "символ", "символа", "символов")
            }}
          </small>
        </div>
        <button
          :disabled="validationInput"
          :class="{ button_disabled: validationInput }"
          class="form__button"
        >
          <span>Войти</span>
        </button>
        <button @click.prevent="fillWithTestData" class="form__button-demo">
          заполнить тестовыми данными
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthorizationModule from "@/modules/Authorization/store";
import NotificationModule from "@/modules/Notification/store";

@Component({
  components: {}
})
export default class AuthorizationPage extends Vue {
  id = "";
  requiredLength = 24;

  mounted() {
    const input = this.$el.querySelector("#id");
    (input as HTMLElement).focus();
  }

  fillWithTestData() {
    this.id = "5f8475902b0be670555f1bb3";
  }

  get setClassStatus() {
    return this.id?.length < this.requiredLength ? "error" : "successfully";
  }

  get validationInput() {
    return this.id?.length !== this.requiredLength;
  }

  get getLengthInput() {
    return this.id?.length;
  }

  submitHandler() {
    AuthorizationModule.authorizationAction(this.id)
      .then((resp) => {
        if (resp === "ok") {
          NotificationModule.setNotificationOptions({
            message: "Поздравляю, вы успешно авторизованы!",
            type: "success"
          });
          NotificationModule.toggleShowNotification(true);
          setTimeout(() => {
            NotificationModule.toggleShowNotification(false);
          }, 3000);
          this.$router.push("/analytics");
        }
      })
      .catch(() => {
        NotificationModule.setNotificationOptions({
          message: "К сожалению, не удалось войти!",
          type: "error"
        });
        NotificationModule.toggleShowNotification(true);
        setTimeout(() => {
          NotificationModule.toggleShowNotification(false);
        }, 3000);
        console.error("Ошибка запроса");
      });
  }
  setTextWithEnding(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }
}
</script>

<style scoped lang="scss">
.successfully {
  border: 1px solid $color-success;
}

.error {
  border: 1px solid $color-error;
}

.authorization {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;

  &__title {
    color: $color-primary;
  }
}

.form {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    border-radius: 7px 7px 0 0;
    background-color: $color-secondary;
    color: $color-primary;
  }

  &__body {
    padding: 50px;
  }

  &__input-wrapper {
    max-width: 370px;
    width: 100%;
    margin: auto;
  }

  &__input {
    position: relative;
    outline: none;
    display: flex;
    padding: 8px;
    font-weight: 300;
    line-height: 20px;
    align-items: center;
    color: $color-text;
    border-radius: 8px;
    font-size: $font-size-h2;
    width: 100%;
  }

  &__description {
    position: absolute;
    margin-top: -2px;
    margin-left: 10px;
    font-style: italic;
    color: $color-text;
  }

  &__button {
    @include button($color-secondary, $color-primary);
    display: flex;
    margin-top: 50px;
  }

  &__button-demo {
    font-style: italic;
    display: flex;
    margin: 5px auto 0;

    color: $color-text;
    font-size: $font-size-text;
  }
}
.button_disabled {
  span {
    color: $color-text;
    opacity: 0.2;
  }
}
</style>
