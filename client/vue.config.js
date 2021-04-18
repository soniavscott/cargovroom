module.exports = {
 css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/_variables.scss"; @import "./node_modules/bulma/bulma.sass";`
      }
    }
  }
}