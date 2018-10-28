<template>
  <div>
    <input name="EndpointToken" type="text" />
    <input type="submit" :onclick="this.$apollo.queries.pingMessage"/>

    <span>{{pingMessage}}</span>
  </div>
</template>

<script>
import WebhookByUser from '@/graphql/Query/WebhookByUser.gql'

export default {
  name: 'Present',
  data () {
    return {
    }
  },
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
}

</script>

<style scoped lang="scss">

</style>


<!--

Loggin () {
       let regexp = /^(\+41)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/
       if (regexp.test(this.EndpointToken)) {


       }
     } -->
