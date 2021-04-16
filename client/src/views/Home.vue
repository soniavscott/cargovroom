<template>
  <div class="home">
    This is the home page
    <TestResponse />
  </div>
</template>

<script>
import TestResponse from "../components/TestResponse";
export default {
  name: "Home", 
  components: {
    TestResponse,
  },
};

</script>
