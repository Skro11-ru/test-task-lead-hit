<template>
  <div class="notification" :class="setClass">
    <div class="notification__title">{{ setTitle }}</div>
    <p class="notification__message">{{ setMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NotificationModule from "@/modules/Notification/store";
@Component({
  components: {}
})
export default class NotificationView extends Vue {
  typeNotification: { [key: string]: any } = {
    error: "Ошибка",
    success: "Успех"
  };
  get setTitle() {
    return this.getNotificationOptions
      ? this.typeNotification[this.getNotificationOptions.type]
      : null;
  }

  get setMessage() {
    return this.getNotificationOptions
      ? this.getNotificationOptions.message
      : null;
  }

  get setClass() {
    return this.getNotificationOptions
      ? `notification_${this.getNotificationOptions.type}`
      : null;
  }

  get getNotificationOptions() {
    return NotificationModule.notificationOptions;
  }
}
</script>

<style scoped lang="scss">
.notification {
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 300px;
  width: 100%;
  color: white;
  border-radius: 6px;
  padding: 10px;
  opacity: 0.8;
  &__title {
    font-weight: $font-bold;
  }
  &__message {
    line-height: 20px;
  }
  &_error {
    background-color: $color-error;
  }
  &_success {
    background-color: $color-success;
  }
}
</style>
