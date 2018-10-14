<template>
  <div>
    <div>sd</div>
    <input type="text" :value="data.UserId"/>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {

    }
  },
  apollo: {
    WebhookByUser: {
      query: gql`
      query WebhookByUser($token: String) {
        WebhookByUser(userid: $token) {
          _id
          UserId
          intTime
          WebhookConntent
        }
      }`,
      variables: {
        token: `sdsdsdsdsd`
      },
      update(data) {
        console.log(data)
      }
    }
  }
}

</script>

<style scoped lang="scss">

</style>
