<template>
  <div class="Video">
    <iframe width="560" height="315" :src="videoLink" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen autoplay></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoAdvertiser',
  props: {
    videoLink: String
  }
}
</script>

<style scoped lang="scss">

</style>
