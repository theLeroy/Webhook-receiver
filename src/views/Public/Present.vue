<template>
  <div>
    <input name="EndpointToken" type="text"/>
    <input type="submit" onclick="Loggin()"/>
  </div>
</template>

<script>
import WebhookByUser from '@/graphql/Query/WebhookByUser.gql'

export default {
  name: 'Present',
   methods: {
     Loggin () {
       let regexp = /^(\+41)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/
       if (regexp.test(this.EndpointToken)) {
         

       }
     }
   },

}

}

</script>

<style scoped lang="scss">

</style>
