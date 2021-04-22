<template>
  <form action="" id="create-card-form">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit vehicle entry</p>
        <button
          type="button"
          class="delete"
          @click="$emit('close')"
        />
      </header>
      <section class="modal-card-body">
        <b-field label="Make">
          <b-input
            type="text"
            :placeholder="vehicle.make"
            v-model="inputMake">
          </b-input>
        </b-field>

        <b-field label="Model">
          <b-input
            type="text"
            :placeholder="vehicle.model"
            v-model="inputModel">
          </b-input>
        </b-field>

        <b-field label="Year">
          <b-input
              class="prefill"
              type="text"
              :placeholder="vehicle.year"
              v-model="inputYear">
          </b-input>     
        </b-field>

        <b-field label="Category">
          <b-input
            type="text"
            :placeholder="vehicle.category"
            v-model="inputCategory">
          </b-input>
        </b-field>

        <b-field label="Color">
          <b-input
            type="text"
            :placeholder="vehicle.color"
            v-model="inputColor">
          </b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot is-flex-direction-column">
        <section class="is-justify-content-center">
          <b-button
            label="Cancel"
            @click="$emit('close')" />
          <b-button
            label="Save"
            type="is-primary" 
            @click="saveVehicle({
              id: vehicle.id,
              make: inputMake,
              model: inputModel,
              year: inputYear,
              category: inputCategory,
              color: inputColor
            });"
          />
        </section>
        <section v-if="isUnedited" id="error-saving">
          <h3>Nothing's changed!</h3>
          <p>To update vehicle, please make changes.</p>
        </section>

      </footer>
    </div>
  </form>
</template>

<script>
import EventBus from '../main';
export default ({
  name: "EditVehicleForm",
  props: ["vehicle"],
  data () {
    return {
      isUnedited: false,
      isSaved: false,
      inputMake: this.vehicle.make,
      inputModel: this.vehicle.model,
      inputYear: this.vehicle.year,
      inputCategory: this.vehicle.category.toString(),
      inputColor: this.vehicle.color,
    }
  },
  methods: {
    saveVehicle(input) {
      var edits = this.getEdits(input)
      if (!edits.length) {
        this.isUnedited = true
        return
      }
      EventBus.$emit('edit-vehicle', input);
      this.$emit('edited', edits)
      this.$emit('close')
      this.isUnedited = false
    },
    getEdits(input) {
      var changes = [];
      if (input.make !== this.vehicle.make) {
        changes.push(`Make: ${this.vehicle.make} -->  ${input.make}`)
      }
      if (input.model !== this.vehicle.model) {
        changes.push(`Model: ${this.vehicle.model} --> ${input.model}`)
      }
      if (input.year !== this.vehicle.year) {
        changes.push(`Year: ${this.vehicle.year} --> ${input.year}`)
      }
      if (input.category !== this.vehicle.category.toString()) {
        changes.push(`Category: ${this.vehicle.category.toString()} --> ${input.category}`)
      }
      if (input.color !== this.vehicle.color) {
        changes.push(`Color: ${this.vehicle.color} --> ${input.color}`)
      }
      return changes;
    }
  }
})
</script>

<style lang="scss" scoped>
#error-saving {
    color: $red;
    margin: $size-7;
    text-align: center;
}
</style>