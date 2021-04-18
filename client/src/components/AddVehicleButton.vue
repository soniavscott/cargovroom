<template>
    <section>
        <b-button
            label="Add Vehicle"
            type="is-primary"
            size="is-medium"
            class="is-rounded"
            @click="isComponentModalActive = true" />

        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template #default="props">
                <AddVehicleForm v-bind="formProps" @close="props.close" />
            </template>
        </b-modal>
    </section>
</template>

<script>
    import AddVehicleForm from './AddVehicleForm';

    export default {
        components: {
            AddVehicleForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    }
    
</script>


<style lang="scss" scoped>

</style>