<template>
  <div class="tr-wrapper">
    <tr class="article-header">
      <td>{{ index + 1 }}.</td>
      <td style="width: 20px; height: 20px;">
        <svg class="upvote-arrow" style="" viewBox="0 0 20 20" @click="vote" v-show="!voted">
          <path fill="#757575" d="M8,15L12,10L17,15H7Z" />
        </svg>
      </td>
      <td>
        <a :href="articleData.url" class="title" target="_blank">{{ articleData.title }}</a>
        <span class="domain" v-if="articleData.url">
          (<a :href="articleData.url">{{ articleData.url | trimHost }}</a>)
        </span>
        <!-- (<span class="sitebit comhead"> <a href="#" class="title"></a></span>) -->
      </td>
    </tr>
    <tr class="article-info">
      <td colspan="2"></td>
      <td style="padding-top: 2px;">{{ articleData.voteCount }} points by {{ articleData.username }} {{ articleData.dateAdded }} | hide | {{ articleData.commentCount }} comments </td>
    </tr>
    <tr class="spacer" style="height:5px"></tr>
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  data: function() {
    return {
      voted: false,
      articleData: {}
    }
  },
  created: function() {
    this.articleData = this.data
  },
  methods: {
    vote: function () {
      this.$http.post('/story/vote/' + this.data._id, {
        token: localStorage.getItem('token')
      })
      .then(response => {
        this.articleData = response.data.payload.story
        this.voted = true
        })
      .catch(response => {
        console.log('resp', response)
        
      })
    }
  },
  filters: {
    trimHost: url => {
      if (!url) return "";
      var domain = extractHostname(url),
        splitArr = domain.split("."),
        arrLen = splitArr.length;
      //extracting the root domain here
      //if there is a subdomain
      if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (
          splitArr[arrLen - 2].length == 2 &&
          splitArr[arrLen - 1].length == 2
        ) {
          //this is using a ccTLD
          domain = splitArr[arrLen - 3] + "." + domain;
        }
      }
      return domain;

      function extractHostname(url) {
        var hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
        if (url.indexOf("//") > -1) {
          hostname = url.split("/")[2];
        } else {
          hostname = url.split("/")[0];
        }
        //find & remove port number
        hostname = hostname.split(":")[0];
        //find & remove "?"
        hostname = hostname.split("?")[0];
        return hostname;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
svg.upvote-arrow {
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 2px -5px -5px;
}

div.tr-wrapper {
  padding-left: 10px;
}

tr {
  .article-header {
    font-size: 10pt;

    .title {
      color: black;
    }
    a:visited {
      color: gray;
    }

    .domain {
      font-size: 8pt;

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .article-info {
    font-size: 9px;
    padding-top: 2px !important;
  }
}

td {
  a {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: #828282;
    text-decoration: none;
  }
}
</style>

