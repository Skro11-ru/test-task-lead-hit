<template>
  <div id="app">
    <router-view />
    <transition name="slide">
      <NotificationView v-if="isShowNotification" />
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/_main.scss";
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NotificationView from "@/modules/Notification/views/NotificationView.vue";
import NotificationModule from "@/modules/Notification/store";
@Component({
  components: { NotificationView }
})
export default class App extends Vue {
  get isShowNotification() {
    return NotificationModule.isShowNotification;
  }
}
</script>

<style scoped lang="scss">
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
