<template>
  <div>
    <div class="box" ref="apa">
      <img class="ground" src="@/assets/Ground.svg">
      <!-- first7 -->
      <img class="as" ref="F1" src="@/assets/F1.svg">
      <img class="as" ref="F2" src="@/assets/F2.svg">
      <img class="as" ref="F3" src="@/assets/F3.svg">
      <img class="as" ref="F4" src="@/assets/F4.svg">
      <img class="as" ref="F5" src="@/assets/F5.svg">
      <img class="as" ref="F6" src="@/assets/F6.svg">
      <img class="as" ref="F7" src="@/assets/F7.svg">
      <!-- second7 -->
      <img class="as" ref="F8" src="@/assets/F1.svg">
      <img class="as" ref="F9" src="@/assets/F2.svg">
      <img class="as" ref="F10" src="@/assets/F3.svg">
      <img class="as" ref="F11" src="@/assets/F4.svg">
      <img class="as" ref="F12" src="@/assets/F5.svg">
      <img class="as" ref="F13" src="@/assets/F6.svg">
      <img class="as" ref="F14" src="@/assets/F7.svg">
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'FpAnimation',
  mounted: function () {
    setInterval(() => {

     }, 1000)
}
}

</script>

<style scoped lang="scss">
$greenText: #2ee6b7;

.as {
  width: 100px;
  position: absolute;
  margin-top: 0vh;
  margin-left: 0vw;
}

@for $i from 0 through 20 {
  $tempN: animmoveR + $i;
.as:nth-child(20n + #{$i}) {
    animation-name: $tempN;
    animation-duration: (random(20)+ 40) + s; //min 10 sec max 30
    animation-iteration-count: infinite;
    animation-delay: (random(40)- 40) + s;
  }
  //!Achtung plus und Minus -> Max * 2 - max
  $tempx: (random(50) - 10);
  $tempy: (random(90)+ 10); // y start
  $tempye: (random(100)+ 0); // y end
  $tempr: (random(800)- 400);
  $tempWe: (random(125)+ 50);
  $tempWs: $tempWe * 0.5;


  @keyframes #{$tempN} {
    0% {
      transform: rotate(0deg) translateX(#{$tempx}vw) translateY(#{$tempy}vh);
      opacity: 0;
      width: $tempWs +px;
      height: $tempWs +px;
    }
    10% {
      opacity: 1;
    }
    100% {
      width: $tempWe +px;
      height: $tempWe +px;
      transform: rotate(0deg) translateX(100vw) translateY(#{$tempye}vh);
    }
  }
}

.ground {
  position: absolute;
  height: 130vh;
  margin-top: -10vh;
  right: -10vw;
}
.box{
  -webkit-filter: url("#goo");
  filter: url("#goo");
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;
}
.square{
  position:absolute;
  background:$greenText;
  left:50%;
  top:50%;
  width:100px;
  height:100px;
  margin-top:-50px;
  margin-left:-50px;
  border-radius: 100%;
  transition: .3s ease background;
}
.draggable {
  cursor: move; /* fallback: no `url()` support or images disabled */
  // cursor: url(images/grab.cur); /* fallback: Internet Explorer */
  cursor: -webkit-grab; /* Chrome 1-21, Safari 4+ */
  cursor:    -moz-grab; /* Firefox 1.5-26 */
  cursor:         grab; /* W3C standards syntax, should come least */
}
.draggable:active {
  // cursor: url(images/grabbing.cur);
  cursor: -webkit-grabbing;
  cursor:    -moz-grabbing;
  cursor:         grabbing;
}
label{
  font-family: sans-serif;
  text-align: center;
  display: block;
  position:absolute;
  width:100%;
  left:0;
  top: calc(50% + 50px);
  z-index: -1;
}

</style>
