<template>
  <div class="error-card" :class="`type-${error.type}`">
    <div class="error-text-wrapper">
      <span class="error-title">{{ error.title }}:</span>
      <span class="error-text">{{ error.text }}</span>
    </div>
    <div @click="close" class="error-icon-wrapper">
      <FontAwesomeIcon :icon="faWindowClose.iconName" />
    </div>
  </div>
</template>

<script lang="ts">
import { ErrorMessage } from "@/store/entities/ErrorMessage";
import { Options, Vue } from "vue-class-component";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { MutationTypes } from "@/store/mutations";

@Options({
  props: {
    error: {}
  },
  components: {
    FontAwesomeIcon
  }
})
export default class ErrorCard extends Vue {
  error!: ErrorMessage;

  get faWindowClose() {
    return faWindowClose;
  }

  created() {
    if (this.faWindowClose) library.add(this.faWindowClose);
  }

  close() {
    this.$store.commit(MutationTypes.ERROR_REMOVE, this.error);
  }
}
</script>

<style scoped>
.error-card {
  padding: 1ex;
  margin: 5px 0;
  border-radius: 5px;
  color: white;
  display: grid;
  grid-template-columns: auto 4ex;
}

.error-icon-wrapper {
  margin-left: 10px;
  padding: 2px;
  opacity: 0.5;
  cursor: pointer;
}

.error-text-wrapper {
  padding: 2px;
}

.error-icon-wrapper:hover {
  opacity: 0.9;
}

.error-title {
  margin-right: 1ex;
}

.error-text {
  font-weight: 100;
}

.type-info {
  background-color: #1f7fbe;
}

.type-error {
  background-color: #be1f1f;
}

.type-warning {
  background-color: #be791f;
}
</style>
