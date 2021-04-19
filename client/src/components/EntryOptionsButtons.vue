<template>
    <section class="is-flex-direction-row is-justify-content-flex-end">
      <div>
        <b-button
          id="edit-entry-button"
            label=""
            type="is-transparent"
            size="is-medium"
            icon-left="lead-pencil"
            @click="isEditEntryModalActive = true" />
        <b-modal
            v-model="isEditEntryModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template #default="props">
                <EditVehicleForm @close="props.close" />
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
            @click="isDeleteEntryModalActive = true" />

        <b-modal
            v-model="isDeleteEntryModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template #default="props">
                <!-- <DeleteVehicleForm @close="props.close" /> -->
                <DeleteVehicleForm @close="props.close" />
            </template>
        </b-modal>
      </div>
    </section>
    <!-- <b-icon
      pack="fas"
      icon="edit"
      size="is-medium"
      id="edit-icon"
      @click="isComponentModalActive = true">
    </b-icon>
    <b-icon
      pack="fas"
      icon="trash"
      size="is-medium"
      alt="hi"
      id="delete-icon"
      @click="openDeleteVehicleEntry()">
    </b-icon> -->
  <!-- </div> -->
  
</template>

<script>
import EditVehicleForm from './EditVehicleForm.vue';
import DeleteVehicleForm from './DeleteVehicleForm.vue';
export default ({
    name: "EntryOptionsButtons",
    props: ["active"],
    data () {
      return {
        isEditEntryModalActive: false,
        isDeleteEntryModalActive: false,
      }
    },
    components: {
      EditVehicleForm,
      DeleteVehicleForm
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