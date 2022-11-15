<template>
  <router-link
    class="driver--block-wrapper"
    :to="{ name: 'Profile', params: { id: driver.id } }"
  >
    <v-card
      class="driver--block text-center"
      elevation="3"
    >
        <Avatar :driver="driver" size="50" />
        <h4>{{ driver.first_name }}</h4>
    </v-card>
  </router-link>
</template>

<script>
import Avatar from '@/components/_boilerplate/components/avatar';

export default {
  name: 'driver',
  props : {
    driver : { type : Object, required : true }
  },
  components: { Avatar },
};
</script>

<style scoped lang="scss">
.driver--block-wrapper {
  text-decoration: none;
}
.driver--block {
  width: 100%;
  border-radius: 5px;
  padding: 20px 10px;
  display: flex;
  align-items: baseline;
  transition: all 500ms;

  h4 {
    margin-left: 20px;
  }
  &:hover {
    background-color: #f1f0f0 !important;
  }
}
</style>