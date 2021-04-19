<template>
  <form action="" id="create-card-form">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Vehicle</p>
        <button
            type="button"
            class="delete"
            @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <p>Are you sure you want to delete this vehicle? This action can't be undone.</p>
      </section>

      <footer class="modal-card-foot is-justify-content-center">
        <b-button
            label="Cancel"
            @click="$emit('close')" />
        <b-button
            label="Delete"
            type="is-primary" 
            @click="deleteVehicle(1034)"/>
      </footer>
    </div>
  </form>
</template>

<script>

export default ({
    name: "DeleteVehicleForm",
    data () {
    },
    methods: {
      deleteVehicle (id) {
        console.log(`Vehicle ${id} has been deleted.`);
      }
    }
})
</script>

<style lang="scss" scoped>

</style>