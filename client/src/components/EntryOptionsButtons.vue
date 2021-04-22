<template>
  <section class="is-flex-direction-row is-justify-content-flex-end">
    <div>
      <b-button
        id="edit-entry-button"
        label=""
        type="is-transparent"
        size="is-medium"
        icon-left="lead-pencil"
        @click="isEditEntryModalActive = true" 
      />
      <b-modal
        v-model="isEditEntryModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="true"
        aria-role="dialog"
        aria-label="Edit Vehicle Modal"
        aria-modal>
        <template #default="props">
          <EditVehicleForm 
            @close="props.close" 
            @edited="edits => showUpdates(edits)" 
            :vehicle="vehicle"
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
            :messageTitle="'Vehicle successfully updated'"
            :messageBodyArr="updates"
          />
        </template>
      </b-modal>
    </div>
    <div>
      <b-button
          id="delete-entry-button"
          label=""
          type="is-transparent"
          size="is-medium"
          icon-left="delete"
          @click="isDeleteEntryModalActive = true" 
      />

      <b-modal
        v-model="isDeleteEntryModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-label="Example Modal"
        aria-modal>
        <template #default="props">
          <DeleteVehicleForm 
            @close="props.close" 
            :vehicleId="vehicleId" 
          />
        </template>
      </b-modal>
    </div>
  </section>
</template>

<script>
import EditVehicleForm from './EditVehicleForm.vue';
import DeleteVehicleForm from './DeleteVehicleForm.vue';
import MessageModal from './MessageModal.vue';
export default ({
    name: "EntryOptionsButtons",
    props: ["active", "vehicle"],
    data () {
      return {
        isEditEntryModalActive: false,
        isDeleteEntryModalActive: false,
        isSaved: false,
        updates: [],
      }
    },
    components: {
      EditVehicleForm,
      DeleteVehicleForm,
      MessageModal
    }, 
    methods: {
      showUpdates(edits) {
        this.isSaved = true;
        this.updates = edits;
      }
    }
})
</script>


<style lang="scss" scoped>
#edit-entry-button, #delete-entry-button {
  color: $low-opacity-grey;
  border: none;
  padding: 0 10px;
  margin: 0;

  :hover{
    color: $accent;
  }
}
</style>