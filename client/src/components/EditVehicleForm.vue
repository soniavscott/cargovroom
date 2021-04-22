<template>
  <form action="" id="create-card-form">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit vehicle entry</p>

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
        <b-button
            label="Cancel"
            @click="$emit('close')" />
        <b-button
            label="Save"
            type="is-primary" 
            @click="saveVehicle({
              id: vehicleId,
              make: inputMake,
              model: inputModel,
              year: inputYear,
              category: inputCategory,
              color: inputColor
            }); $emit('close'); "/>
      </footer>
    </div>
  </form>
</template>

<script>
import EventBus from '../main';
export default ({
    name: "EditVehicleForm",
    props: ["vehicleId"],
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
        EventBus.$emit('edit-vehicle', input);
      }
    }
})
</script>

<style lang="scss" scoped>

</style>