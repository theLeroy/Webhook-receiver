<template>
  <div>
    <div class="Title">
      We are the easiest way to receive,<br> read and save webhooks.
    </div>
    <div class="sTitle">
      For free, unlimited.
    </div>
    <FpAnimation/>
  </div>
</template>

<script>

import FpAnimation from '@/components/FpAnimation'

export default {
  name: 'Present',
  components: {
    FpAnimation
  }
}

</script>

<style scoped lang="scss">
$greenText: #2ee6b7;

.Title {
  font-size: 60px;
  margin-left: 5%;
  margin-top: 10%;
  color: $greenText;
  font-weight: 700;
  line-height: 1.2;
}
.sTitle {
  line-height: 3;
  font-size: 22px;
  margin-left: 5%;
  color: $greenText;
  font-weight: 500;
}

</style>
