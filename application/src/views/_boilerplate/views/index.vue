<template>
  <div class="component">
    <div class="container--fluid">

        <div v-if="loading">
            <Loader :loading="loading" />
        </div>

        <v-card
            class="driver--block mx-auto my-12"
            elevation="3"
            max-width="374"
        >
            <v-card-title>{{ driver.first_name }} {{ driver.last_name }}</v-card-title>
            <v-card-text>
                <v-row
                    align="center"
                    class="mx-0"
                >
                    <div class="my-4 text-subtitle-1">
                        Driver Id: {{ driver.id}}
                    </div>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ACTIONS_FETCH_DRIVER} from '@/store/modules/_boilerplate/drivers/action-types';
import { GETTER_GET_DRIVER, GETTER_GET_LOADING_STATUS} from '@/store/modules/_boilerplate/drivers/getter-types';
import Loader from '@/components/_boilerplate/components/loader';

export default {
  name: 'driver-details',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions( {
      fetchDriver: 'Drivers/' + ACTIONS_FETCH_DRIVER
    })
  },
  computed: {
    ...mapGetters({
      driver: 'Drivers/' + GETTER_GET_DRIVER,
      loading: 'Drivers/' + GETTER_GET_LOADING_STATUS
    }),
  },
  mounted() {
    this.fetchDriver(this.$route.params.id);
  },
  components: {
      Loader
  },
};
</script>

<style></style>