<template>
  <div>
    <BackgroundGradient/>
    <Triangels :Dreiecke="Dreiecke"/>
    <VideoAdvertiser videoLink="https://www.youtube.com/embed/IbiN9xldVlM?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1;disablekb=1;modestbranding=1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BackgroundGradient from '@/components/BackgroundGradient.vue'
import VideoAdvertiser from '@/components/VideoAdvertiser.vue'
import Triangels from '@/components/Triangels.vue'

export default {
  name: 'Video',
  components: {
    BackgroundGradient,
    VideoAdvertiser,
    Triangels
  },
  data () {
    return {
      Dreiecke: [
        {
          PositionX: '0%',
          PositionY: '0%',
          link: './assets/test.JPG',
          Size: '100px',
          Hover: true,
          Zindex: '1'
        },
        {
          PositionX: '60%',
          PositionY: '10%',
          link: './assets/Lila.svg',
          Size: '100px',
          Hover: true,
          Zindex: '1'
        },
        {
          PositionX: '20%',
          PositionY: '60%',
          link: './assets/Lila.svg',
          Size: '100px',
          Hover: true,
          Zindex: '1'
        },
        {
          PositionX: '30%',
          PositionY: '30%',
          link: './assets/Lila.svg',
          Size: '100px',
          Hover: true,
          Zindex: '1'
        }
      ]
    }
  }
}

</script>

<style scoped lang="scss">

</style>
