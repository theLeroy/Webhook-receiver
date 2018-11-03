<template>
  <div>
    <div v-for="(WebhookByUser, index) in WebhookByUser">
      {{WebhookByUser}}
    </div>
  </div>
</template>

<script>

import QqlgetWebhook from '@/graphql/Query/WebhookByUser.gql'
import NewWebhookIncoming from '@/graphql/Subscription/NewWebhookIncoming.gql'

export default {
  name: 'Interface',
  apollo: {
    WebhookByUser: {
      query: QqlgetWebhook,
      variables () {
        return {
          token: `EaLxPFoCVkfAMGkA4XqqGyLdvs2ZcaiMqE3o7VY1C5bhnghsVkmbbfqXNU8ThWg4`
        }
      },
      subscribeToMore: {
        document: NewWebhookIncoming,
        // Variables passed to the subscription. Since we're using a function,
        // they are reactive
        variables () {
          return {
            token: `EaLxPFoCVkfAMGkA4XqqGyLdvs2ZcaiMqE3o7VY1C5bhnghsVkmbbfqXNU8ThWg4`
          }
        },
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          console.log(previousResult, subscriptionData)
          return {
            WebhookByUser: [
              ...previousResult.WebhookByUser,
              subscriptionData.data.NewWebhookIncoming
            ]
          }
          // Here, return the new result from the previous with the new data
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
