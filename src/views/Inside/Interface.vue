<template>
  <div>
    <div class="edpoint"  v-on:click="copy">
      <span ref="Ctext" class="ShowToken">{{Url}}/r/us/{{Token}}</span>
    </div>
    <div v-for="(WebhookByUser, index) in WebhookByUser">
      <prism class="no-whitespace-normalization" language="json">
Id: "{{WebhookByUser._id}}",
Endpoint: "{{WebhookByUser.UserId}}",
Time: {{new Date(WebhookByUser.intTime).toLocaleString()}},
Content: {
   {{WebhookByUser.WebhookConntent}}
}
      </prism>
    </div>
    <div v-if="WebhookByUser.length > 100" class="morethen50">
      Unfortunately, more than 100 webhooks cannot be displayed. However, new webhooks are automatically updated and displayed at the top.
    </div>
  </div>
</template>

<script>
import QqlgetWebhook from '@/graphql/Query/WebhookByUser.gql'
import NewWebhookIncoming from '@/graphql/Subscription/NewWebhookIncoming.gql'

import Prism from 'vue-prism-component'

export default {
  name: 'Interface',
  components: {
    Prism
  },
  data () {
    return {
      Token: this.$route.params.Token,
      Url: window.location.hostname
    }
  },
  methods: {
    copy: function (event) {
      var copyText = this.$refs.Ctext

      var textArea = document.createElement('textarea')

      textArea.value = copyText.innerHTML

      document.body.appendChild(textArea)
      textArea.select()
      try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        if (msg === 'successful') {
          console.log('copied')
          let t = this.$refs.Ctext.innerHTML
          this.$refs.Ctext.innerHTML = 'Copied!'
          setTimeout(() => {
            this.$refs.Ctext.innerHTML = t
          }, 1200)
        }
      } catch (err) {
        console.log('Oops, unable to copy')
      }
      document.body.removeChild(textArea)
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
          // console.log(previousResult, subscriptionData)
          return {
            WebhookByUser: [
              subscriptionData.data.NewWebhookIncoming,
              ...previousResult.WebhookByUser
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
$greenText: #2ee6b7;

@mixin backG() {
  background: #33e6d7;
  background: -moz-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, #33e6d7), color-stop(100%, #29e68e));
  background: -webkit-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: -o-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: -ms-linear-gradient(-45deg, #33e6d7 0%, #29e68e 100%);
  background: linear-gradient(135deg, #33e6d7 0%, #29e68e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33e6d7', endColorstr='#29e68e', GradientType=1 );
}

.edpoint {
  width: 820px;
  margin-left: calc(50% - 410px);
  margin-top: 30px;
  margin-bottom: 60px;
  background: #fff;
  box-shadow: 0px 0px 250px rgba(0, 0, 0, 1);
  height: 100px;
  @include backG;
  border-radius: 8px;
}
.ShowToken {
  border-radius: 4px;
  background: #fff;
  position: relative;
  height: 50px;
  margin-top: calc(50px - 25px);
  margin-left: 50%;
  transform: translateX(-50%);
  line-height: 3.2;
  padding: 0px 20px;
  color: #8b8b8b;
  display: inline-block;
}
.morethen50 {
  color: $greenText;
  font-size: 16px;
  text-align: center;
  margin: 20px;
}

</style>

<style lang="scss">
$greenText: #2ee6b7;
/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+http+json */
/**
* okaidia theme for JavaScript, CSS and HTML
* Loosely based on Monokai textmate theme by http://www.monokai.nl/
* @author ocodia
*/

code[class*="language-"],
pre[class*="language-"] {
  // width: 100%;
  color: $greenText;
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

  white-space: pre-wrap !important;
  /* These are technically the same, but use both */
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;

  -ms-word-break: break-all !important;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all !important;
  /* Instead use this non-standard one: */
  word-break: break-word !important;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto !important;
  -moz-hyphens: auto !important;
  -webkit-hyphens: auto !important;
  hyphens: auto !important;
}
code > * {
  // display: block !important;
}

/* Code blocks */
pre[class*="language-"] {
  margin: .5em 0;
  overflow: auto;
  border-radius: 0.3em;
  display: block;
  padding: 5px 85px;
  box-sizing: border-box;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  // background: #272822;
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
