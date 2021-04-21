<template>
  <form action="" id="create-card-form">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a vehicle</p>
        <button
            type="button"
            class="delete"
            @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <b-field label="Make">
            <b-input
                type="text"
                placeholder="Ford"
                required
                v-model="inputMake">
            </b-input>
        </b-field>
        <b-field label="Model">
            <b-input
                type="text"
                placeholder="Focus"
                required
                v-model="inputModel">
            </b-input>
        </b-field>

        <b-field label="Year">
            <b-input
                type="text"
                placeholder="2021"
                required
                v-model="inputYear">
            </b-input>
            
        </b-field>

        <b-field label="Category">
            <b-input
                type="text"
                placeholder="Sedan"
                required
                v-model="inputCategory">
            </b-input>
        </b-field>

        <b-field label="Color">
            <b-input
                type="text"
                placeholder="black"
                required
                v-model="inputColor">
            </b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot is-justify-content-center">
        <!-- <b-button
            label="Close"
            @click="$emit('close')" /> -->
        <b-button
            label="Save"
            type="is-primary" 
            @click="saveVehicle({
              make: inputMake,
              model: inputModel,
              year: inputYear,
              category: inputCategory,
              color: inputColor
            })"/>
      </footer>
    </div>
  </form>
</template>

<script>

export default ({
    name: "AddVehicleForm",
    data () {
      return {
        inputMake: '',
        inputModel: '',
        inputYear: '',
        inputCategory: '',
        inputColor: '',
      }
    },
    methods: {
      saveVehicle(input) {
        this.$store.dispatch('addNewVehicle', input);
      }
    }
})
</script>

<style lang="scss" scoped>

</style>