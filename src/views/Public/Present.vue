<template>
  <div>
    <input v-model="pingInput" placeholder="Enter a message" />
   <p>
     {{ping}}
   </p>

    <input name="EndpointToken" type="text" />
  </div>
</template>

<script>
import WebhookByUser from '@/graphql/Query/WebhookByUser.gql'

export default {
  name: 'Present',
  data () {
    return {
      pingInput: 'KLUGHILUSdgluiweiuzg'

    }
  },
  apollo: {
    // Query with parameters
    ping: {
      query: WebhookByUser,
      // Reactive parameters
      variables() {
        // Use vue reactive properties here
        return {
            token: this.pingInput,
        }
      },
    },
  },
}

</script>

<style scoped lang="scss">

</style>
