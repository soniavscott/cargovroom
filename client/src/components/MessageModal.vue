<template>
  <section>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ messageTitle }}</p>
        <button type="button" class="delete" @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <h3 v-for="message in messageBodyArr" :key="message.id">
          {{message}}
        </h3>
      </section>
    </div>
  </section>
</template>

<script>

export default ({
  name: "MessageModal",
  props: ["messageTitle", "messageBodyArr"],
})
</script>
