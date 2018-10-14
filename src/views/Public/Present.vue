<template>
  <div>
    <div>sd</div>
    <input type="text" :value="data.UserId"/>
  </div>
</template>

<script>
import WebhookByUser from '@/graphql/Query/WebhookByUser.gql'

export default {
  name: 'Video',
  data () {
    return {

    }
  },
  // Apollo-specific options
  apollo: {
    // Advanced query with parameters
    // The 'variables' method is watched by vue
    pingMessage: {
      query: WebhookByUser,
      // Reactive parameters
      variables () {
        // Use vue reactive properties here
        return {
          token: `sadsda`
        }
      },
      // Variables: deep object watch
      deep: false,
      // We use a custom update callback because
      // the field names don't match
      // By default, the 'pingMessage' attribute
      // would be used on the 'data' result object
      // Here we know the result is in the 'ping' attribute
      // considering the way the apollo server works
      update (data) {
        console.log(data)
        // The returned value will update
        // the vue property 'pingMessage'
        // return data.ping
      },
      // Optional result hook
      result ({ data, loading, networkStatus }) {
        console.log('We got some result!')
      },
      // Error handling
      error (error) {
        console.error('We\'ve got an error!', error)
      },
      // Loading state
      // loadingKey is the name of the data property
      // that will be incremented when the query is loading
      // and decremented when it no longer is.
      loadingKey: 'loadingQueriesCount',
      // watchLoading will be called whenever the loading state changes
      watchLoading (isLoading, countModifier) {
        // isLoading is a boolean
        // countModifier is either 1 or -1
      }
    }
  }
  // apollo: {
  //   WebhookByUser: {
  //     query: gql`
  //     query WebhookByUser($token: String) {
  //       WebhookByUser(userid: $token) {
  //         _id
  //         UserId
  //         intTime
  //         WebhookConntent
  //       }
  //     }`,
  //     variables: {
  //       token: `sdsdsdsdsd`
  //     },
  //     update(data) {
  //       console.log(data)
  //     }
  //   }
  // }
}

</script>

<style scoped lang="scss">

</style>
