<template>
  <div>
    <div class="Title">
      We are the easiest way to receive,<br> read and save webhooks.
    </div>
    <div class="sTitle">
      For free, unlimited.
    </div>
    <div class="btnc">
      <div v-on:click="Cendpoint" class="btn">
        <span class="ShowToken">Create new Entpoint</span>
      </div>
      <div v-on:click="Gendpoint" ref="opentE" class="btn ib">
        <span ref="hide" class="ShowToken">Go to Endpoint</span>
        <input class="ShowToken ap" requered type="text" ref="iS1" name="Token" autofocus placeholder="Your entpoint Token.">
        <input v-on:click="GtoE" class="ShowToken ap" type="submit" ref="iS2" value="Send & go to Endpoint">
      </div>
    </div>
    <div class="Help">
      <a href="https://github.com/theLeroy/Webhook-receiver/blob/master/README.md">
        How does this work?
      </a>
    </div>
    <socialmediaLinks/>
    <FpAnimation/>
  </div>
</template>

<script>

import FpAnimation from '@/components/FpAnimation'
import socialmediaLinks from '@/components/socialmediaLinks'

export default {
  name: 'Present',
  components: {
    FpAnimation,
    socialmediaLinks
  },
  mounted: function () {
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('html').style.overflow = 'hidden'
  },
  methods: {
    Cendpoint: function (event) {
      var text = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < 64; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      this.$router.push('home/' + text)
    },
    Gendpoint: function (event) {
      this.$refs.iS1.classList.add('display')
      this.$refs.iS2.classList.add('display')
      this.$refs.opentE.classList.add('extend')
      this.$refs.opentE.classList.add('extend')
      this.$refs.hide.classList.add('hide')
    },
    GtoE: function (event) {
      let text = this.$refs.iS1.value
      if (text.length === 64) {
        this.$router.push('home/' + text)
      } else {
        this.$refs.opentE.style.background = '#E97569'
        setTimeout(() => {
          this.$refs.opentE.style.background = 'linear-gradient(135deg, #33e6d7 0%, #29e68e 100%)'
        }, 1000)
      }
    }
  }
}

</script>
<style lang="scss">

</style>

<style scoped lang="scss">
$greenText: #2ee6b7;
body {
  overflow: hidden;
}
html {
  overflow: hidden;
}
.Help {
  line-height: 3;
  font-size: 15px;
  margin-left: 5vw;
  color: $greenText;
  font-weight: 500;
  text-decoration: underline;
  margin-top: 150px;
  a {
    color: $greenText !important;
  }
}

.Title {
  font-size: 60px;
  margin-left: 5vw;
  margin-top: 20vh;
  color: $greenText;
  font-weight: 700;
  line-height: 1.2;
}
.sTitle {
  line-height: 3;
  font-size: 22px;
  margin-left: 5vw;
  color: $greenText;
  font-weight: 500;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(#8b8b8b, 0.59) !important;
}
::-moz-placeholder { /* Firefox 19+ */
  color: rgba(#8b8b8b, 0.59) !important;
}
:-ms-input-placeholder { /* IE 10+ */
  color: rgba(#8b8b8b, 0.59) !important;
}
:-moz-placeholder { /* Firefox 18- */
  color: rgba(#8b8b8b, 0.59) !important;
}
.btnc {
  margin-top: 50px;
  margin-left: 5vw;
  position: relative;
}
.ap {
  animation: ap 1s
}
@keyframes ap {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
input {
  border: none;
  outline: none;
  display: none !important;
}
.display {
  display: inline-block !important;
}
.extend {
  height: 175px !important;
}
.hide {
  display: none !important;
}

@mixin backG() {
  background: #33e6d7;
  background: -moz-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, #33e6d7), color-stop(100%, #29e68e));
  background: -webkit-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: -o-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: -ms-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: linear-gradient(135deg, #33e6d7 0%, #29e68e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33e6d7', endColorstr='#29e68e', GradientType=1 );
}

.btn {
  top: 0px;
  width: 270px;
  position: absolute;
  display: inline-block;
  z-index: 9;
  background: #fff;
  box-shadow: 0px 0px 250px -20px rgba(0, 0, 0, 1);
  height: 100px;
  @include backG;
  border-radius: 8px;
  transition: 0.5s;
}
.ib {
  margin-left: 350px;
}
.btn:hover {
  box-shadow: 0px 0px 250px rgba(0, 0, 0, 1);
  transform: scale(1.05);
  .ShowToken {
    transform: scale(0.95);
  }
}
.ShowToken {
  transition: 0.5s;
  text-align: center;
  width: 200px;
  border-radius: 4px;
  background: #fff;
  position: relative;
  height: 50px;
  margin-top: calc(50px - 25px);
  margin-left: calc(50% - 100px);
  line-height: 3.2;
  padding: 0px 20px;
  box-sizing: border-box;
  color: #8b8b8b;
  display: inline-block;
}

@media screen and (max-width: 1100px) {
  .Title {
    font-size: 40px;
  }
}
@media screen and (max-width: 850px) {
  .Title {
    font-size: 35px;
    width: 400px
  }
}
@media screen and (max-width: 580px) {
  .Title {
    font-size: 30px;
    width: 300px
  }
  .btn {
    display: block;
  }
  .ib {
    margin-left: 0px;
    margin-top: 140px;
  }
  .Help {
    margin-top: 300px;
  }
}
@media screen and (max-height: 650px) {
  .Title {
    margin-top: 5vh;
  }
}
</style>
