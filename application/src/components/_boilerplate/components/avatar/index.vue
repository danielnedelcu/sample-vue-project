<template>
  <div class="component">
    <v-avatar
      class="avatar--block white--text" :size="size">{{ driver.first_name.charAt(0) }}{{ driver.last_name.charAt(0) }}</v-avatar>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props : {
      driver : { type : Object, required : true },
      size : { type : String, required : false },
  },
};
</script>

<style scoped lang="scss">
.avatar--block {
  background-color: rgb(58, 58, 58);
  font-weight: bold;
  font-size: 14px;
}
</style>