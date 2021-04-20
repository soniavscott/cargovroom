<template>
  <div id="header" class="level">
    <div class="level-item has-text-centered">
      <a class="title is-1" id="site-title" href="/">cargovroom</a>
    </div>
    
  </div>

  <!-- <div id="header"> 
    <div class="site-title-container">
      <h1 class="site-title">cargovroom</h1>
    </div>

    <nav class="menu">
      <div class="menu-item">
        <router-link to="/">Search</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/honda">Login</router-link>
      </div>
    </nav>
  </div> -->
</template>

<script>
export default ({
  name: "Header"
})
</script>

<style lang="scss">
#header {
  background-color: $primary;

  #site-title {
    font-style: italic;
    font-weight: $weight-bold;
    color: $white;
    margin: $size-6 $size-3;
  }
}

</style>