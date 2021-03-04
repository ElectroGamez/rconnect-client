<template>
  <div class="error-list">
    <ErrorCard v-for="error in errors" :key="error.id" :error="error" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ErrorCard from "./ErrorCard.vue";

@Options({
  components: {
    ErrorCard
  }
})
export default class ErrorList extends Vue {
  get errors() {
    return this.$store.state.app.errors;
  }
}
</script>

<style scoped></style>
