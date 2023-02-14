<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use 'sass:map';
p {
  @include more-line-ellipsis(1);
  background-color: get-color($rose, 500, 0.3);
  color: map.get($orange, 600);
}
</style>
