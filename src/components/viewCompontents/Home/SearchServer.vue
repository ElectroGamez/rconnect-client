<template>
  <div id="searchPlayer">
    <div class="content">
      <div class="flex-content">
        <Icon />
      </div>
      <div class="flex-content">
        <h1>Enter your server name:</h1>
        <form @submit="checkUser" method="post">
          <input type="text" name="" id="" />
          <input type="submit" value="Check" class="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Options from "vue-class-component";
import Vue from "vue";

import Icon from "./Icon.vue";

@Options({
  components: {
    Icon
  }
})
export default class SearchServer extends Vue {
  checkUser(e: Event) {
    e.preventDefault();

    console.log("test");
  }
}
</script>

<style scoped>
#searchPlayer {
  display: flex;
  justify-content: center;
  color: white;
}

* {
  font-weight: normal;
}

.content {
  background-color: #df542a;
  padding: 3ex 5ex;
  box-shadow: black 0 0 2ex;
  display: flex;
}

.flex-content {
  padding: 2ex;
  margin: auto;
}

h1 {
  margin: 0.5ex 1ex;
}

input {
  width: 100%;
  border: 1px solid black;
  padding: 1ex;
  margin: 5px;
}

.submit {
  font-size: 100%;
  cursor: pointer;
}
</style>
