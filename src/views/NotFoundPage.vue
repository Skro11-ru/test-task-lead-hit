<template>
  <div class="not-found-page">
    <h1>404 page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class NotFoundPage extends Vue {}
</script>

<style scoped lang="scss">
.not-found-page {
  display: flex;
  height: 100%;
  h1 {
    margin: auto;
    font-size: $font-size-large;
  }
}
</style>
