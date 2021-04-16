<template>
  <div>
      This is Test
      {{ testRes }}
      <TestResponse2 :testRes="testRes" />
  </div>
</template>

<script>
import TestService from '../services/TestService';
import TestResponse2 from '../components/TestResponse2';

export default ({
  data () {
    return {
      testRes: {}
    }
  },
  components: {
    TestResponse2
  },
  async mounted () {
    const make = this.$route.params.make
    this.testRes = (await TestService.show(make)).data
  }
})
</script>
