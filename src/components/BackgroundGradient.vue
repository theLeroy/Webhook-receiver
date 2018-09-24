<template>
  <div class="background"></div>
</template>

<script>
export default {
  name: 'BackgroundGradient'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.background {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  z-index: -99999;
  position: absolute;
  background: linear-gradient(-30.606407031509484deg, #A04CFF 0%, #EE74C4 100%);
}
</style>
