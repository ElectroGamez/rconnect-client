<template>
  <div class="icon-header">
    <div id="brand-icon">
      <FontAwesomeIcon
        v-if="icon"
        :icon="icon.iconName"
        size="3x"
        fixed-width
      />
    </div>
    <div>
      <p id="brand-text">{{ title }}</p>
      <p id="brand-sub-text">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Options({
  components: {
    FontAwesomeIcon
  },
  props: {
    title: String,
    subtitle: String,
    icon: null // This might be bad?
  }
})
export default class IconHeader extends Vue {
  title!: string;
  subtitle!: string;
  icon!: IconDefinition;

  created() {
    if (this.icon) library.add(this.icon);
  }
}
</script>

<style scoped>
.icon-header {
  display: inline-flex;
  flex-direction: row;
  color: white;
}

#brand-icon {
  margin: auto 0;
}

#brand-text {
  margin: auto 0 auto 5px;
  font-size: 200%;
}

#brand-sub-text {
  margin: auto 0 auto 5px;
  font-weight: 100;
  font-size: 200%;
}
</style>
