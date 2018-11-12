<template>
  <div class="WElement">
    <div class="Time">
      {{WTime}}
    </div>
    <div class="Start">
      {{WStart}}...
    </div>
  </div>
</template>

<script>

export default {
  name: 'Webhookcard',
  props: {
    WTime: Number,
    WStart: String
  }
}
</script>

<style scope lang="scss">
.WElement {
  width: 40%;
  max-width: 690px;
  height: 200px;
  background-color: rgb(238, 238, 238);
}

</style>
