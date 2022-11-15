<template>
    <div class="component">
        <div class="container--fluid px-12">
            <h1>Drivers</h1>

            <div v-if="loading">
                <Loader :loading="loading" />
            </div>

            <div v-if="driversList.length" class="drivers--wrapper">
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-text-field
                            v-model.trim="searchDrivers"
                            label="Search drivers"
                            outlined
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-row>

                <div
                    v-for="driver in filterDriversByName"
                    :key="driver.id"
                    class="driver">
                    <Driver :driver="driver" />
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import { ACTIONS_FETCH_DRIVERS} from '@/store/modules/_boilerplate/drivers/action-types';
    import { GETTER_GET_DRIVERS, GETTER_GET_LOADING_STATUS} from '@/store/modules/_boilerplate/drivers/getter-types';
    import { mapActions, mapGetters } from 'vuex';
    import Loader from '@/components/_boilerplate/components/loader';
    import Driver from '@/components/_boilerplate/components/driver';

    export default {
        name: 'views-orders-index',
        watch: {},
        props: {},
        data() {
            return {
                result: [],
                searchDrivers: '',
            }
        },
        methods: {
            ...mapActions( {
                fetchDrivers: 'Drivers/' + ACTIONS_FETCH_DRIVERS
            })
        },
        computed: {
            ...mapGetters({
                driversList: 'Drivers/' + GETTER_GET_DRIVERS,
                loading: 'Drivers/' + GETTER_GET_LOADING_STATUS
            }),

            filterDriversByName: function() {
                if(this.searchDrivers.trim().length) {
                    return this.driversList.filter((driver) => driver.first_name.toLowerCase().includes(this.searchDrivers.toLowerCase().trim()))
                } else {
                    return this.driversList;
                }
            },
        },
        created() {
        },
        mounted() {
            console.log(this.loading);
            this.fetchDrivers();
        },
        beforeDestroy() {
        },
        mixins: [],
        components: {
            Loader,
            Driver
        }
    }
</script>


<style scoped lang="scss">
.drivers--wrapper{
  display: flex;
  flex-flow: column;

  .driver {
    cursor: pointer;
    margin: 5px 0;
  }
}
</style>
