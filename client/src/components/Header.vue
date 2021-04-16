<template>
  <div id="header"> 
    <div class="site-title-container">
      <h1 class="site-title">cargovroom</h1>
    </div>

    <nav class="menu">
      <div class="menu-item">Search</div>
      <div class="menu-item">Login</div>
    </nav>
  </div>
</template>

<script>
export default ({
  name: "Header"
})
</script>

<style lang="scss">
#header {
  background-color: $main-color;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .site-title-container {
    .site-title {
      font-size: $largest-text-size
    }
  }

  .menu {
    display: flex;
    align-items: center;

    .menu-item{
      margin: 10px;
    }
  }
}

</style>