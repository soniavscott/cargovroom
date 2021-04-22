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
                <AddVehicleForm 
                  @close="props.close" 
                  @added="input => showSaved(input)"
                />
            </template>
        </b-modal>

        <b-modal
          v-model="isSaved"
          has-modal-card
          trap-focus
          :destroy-on-hide="true"
          aria-role="dialog"
          aria-label="Message Modal"
          aria-modal>
          <template #default="props">
            <MessageModal 
              @close="props.close"
              :messageTitle="'Vehicle successfully saved'"
              :messageBodyArr="input"
            />
          </template>
        </b-modal>
    </section>
</template>

<script>
    import AddVehicleForm from './AddVehicleForm';
    import MessageModal from '../EditAndDelete/MessageModal'

    export default {
        components: {
            AddVehicleForm,
            MessageModal
        },
        data() {
            return {
                isComponentModalActive: false,
                isSaved: false,
                input: [],
            }
        }, 
        methods: {
          showSaved(input) {
            this.isSaved = true;
            this.input = input;
          }
        }
    }
    
</script>


<style lang="scss" scoped>

</style>