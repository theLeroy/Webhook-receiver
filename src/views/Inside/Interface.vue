<template>
  <div>
    <p>sdsasjkhdg</p>
    <ApolloQuery :query="require('../../graphql/Query/WebhookByUser.gql')" :variables="{ token: `KLUGHILUSdgluiweiuzg` }">
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
  name: 'Interface',
  methods: {
  onMessageAdded (previousResult, { Data }) {
    // The previous result is immutable
    const newResult = {
      messages: [...previousResult.messages],
    }
    // Add the question to the list
    newResult.messages.push(Data.data.messageAdded)
    return newResult
  },
},
}
</script>

<style scoped lang="scss">

</style>
