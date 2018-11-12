<template>
  <div>
    <div class="edpoint">
      <span>{{Token}}</span>
    </div>
    <div v-for="(WebhookByUser, index) in WebhookByUser">

      <Webhookcard :WTime="WebhookByUser['intTime']" :WStart="WebhookByUser['WebhookConntent'].substring(0,50)"/>

      <prism language="json">
        {{WebhookByUser}}
      </prism>
    </div>
  </div>
</template>

<script>

import QqlgetWebhook from '@/graphql/Query/WebhookByUser.gql'
import NewWebhookIncoming from '@/graphql/Subscription/NewWebhookIncoming.gql'
import Webhookcard from '@/components/Webhookcard'

import Prism from 'vue-prism-component'

export default {
  name: 'Interface',
  components: {
    Prism,
    Webhookcard
  },
  data () {
    return {
      Token: this.$route.params.Token
    }
  },
  apollo: {
    WebhookByUser: {
      query: QqlgetWebhook,
      variables () {
        return {
          token: this.$route.params.Token
        }
      },
      subscribeToMore: {
        document: NewWebhookIncoming,
        // Variables passed to the subscription. Since we're using a function,
        // they are reactive
        variables () {
          return {
            token: this.$route.params.Token
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

<style lang="scss">
/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+http+json */
/**
* okaidia theme for JavaScript, CSS and HTML
* Loosely based on Monokai textmate theme by http://www.monokai.nl/
* @author ocodia
*/

code[class*="language-"],
pre[class*="language-"] {
  width: 60%;
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
code > * {
  // display: block !important;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  border-radius: 0.3em;
  display: block;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #777279;
}

.token.punctuation {
  color: #d0d4d7;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #c1ef65;
}

.token.boolean,
.token.number {
  color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #d0d0d0;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #d0d4d7;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #ebde68;
}

.token.keyword {
  color: #ebde68;
}

.token.regex,
.token.important {
  color: #ebde68;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

</style>
