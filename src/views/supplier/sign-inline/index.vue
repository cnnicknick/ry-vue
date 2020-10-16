<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ word }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class About extends Vue {
  word: string = "天涯共此时";
}
</script>