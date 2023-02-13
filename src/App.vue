<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
p {
  @include more-line-ellipsis(1);
}
</style>
