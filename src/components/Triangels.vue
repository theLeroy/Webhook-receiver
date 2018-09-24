<template>
  <div class="Triangels">
    <div v-for="Dreieck in Dreiecke"
      class="D_El"
      :class="{ Hover: Dreieck.Hover }"
      :style="{
        'z-index': Dreieck.Zindex,
        width: Dreieck.Size,
        height: Dreieck.Size,
        'margin-left': Dreieck.PositionX,
        'margin-top': Dreieck.PositionY
        }"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Triangels',
  props: {
    Dreiecke: Object
  }
}
</script>

<style scoped lang="scss">
</style>
