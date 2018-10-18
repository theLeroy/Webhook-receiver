<template>
  <div>
    <p> sdsasjkhdg</p>
    <ApolloQuery :query="require('../../graphql/Query/WebhookByUser.gql')" :variables="{ token: `sadsda` }">
      <template slot-scope="{result : {loading, error, data } }">
        <span v-if="loading">Loading</span>
        <div v-if="data && !loading">
          <span>{{data}}</span>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: 'Interface'
}
</script>

<style scoped lang="scss">

</style>
