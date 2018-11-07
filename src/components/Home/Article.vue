<template>
<div>
                                  <tr class="athing">
                                    <td align="right" valign="top" class="title"><span class="rank">{{ index + 1 }}.</span></td>
                                    <td valign="top" class="votelinks">
                                        <center>
                                            <a href="#" @click="vote" v-show="!voted">
                                                <div class="votearrow" title="upvote"></div>
                                            </a>
                                        </center>
                                    </td>
                                    <td class="title"><a href="#" @click="contentCheck" class="storylink" >{{ articleData.title }} </a><span class="sitebit comhead"> (<a :href="articleData.url"><span class="sitestr">{{ articleData.url | trimHost }}</span></a>)</span>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="subtext">
                                        <span class="score">{{ articleData.voteCount }} points</span> by <a href="#" class="hnuser">{{ articleData.username }}</a>  <span class="age">&nbsp;<a href="#">{{ timeSince(articleData.createdAt) }}</a></span> <span ></span> |
                                        <a href="#">hide</a> | <router-link :to="{ path: '/storycomments', query: { id: articleData.sequenceId }}" >{{ articleData.commentCount }} comments</router-link> 
                                        <!-- <a href="#">hide</a> | <router-link :to="{ path: '/story', query: { id: articleData.sequenceId }}">{{ contentCheck(articleData.article) }} -->
                                        </td>
                                </tr>
                                <tr class="spacer" style="height:5px"></tr>
</div>
  <!-- <div class="tr-wrapper">
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
        </span> -->
        <!-- (<span class="sitebit comhead"> <a href="#" class="title"></a></span>) -->
     <!-- </td>
    </tr>
    <tr class="article-info">
      <td colspan="2"></td>
      <td style="padding-top: 2px;">{{ articleData.voteCount }} points by {{ articleData.username }} {{ articleData.dateAdded }} | hide | {{ articleData.commentCount }} comments </td>
    </tr>
    <tr class="spacer" style="height:5px"></tr>
  </div> -->
</template>

<script>
export default {
  props: ["data", "index"],
  data: function() {
    return {
      voted: false,
      articleData: {}
    };
  },
  created: function() {
    this.articleData = this.data;
  },
  methods: {
    timeSince: function(date) {
      var timeStamp = new Date(date);
      var seconds = Math.floor(
        (new Date().getTime() - timeStamp.getTime()) / 1000
      );
      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + " years ago";
      }
      interval = seconds / 31536000;
      if (interval < 2 && interval >= 1) {
        return Math.floor(interval) + " year ago";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months ago";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days ago";
      }
      interval = seconds / 86400;
      if (interval < 2 && interval >= 1) {
        return Math.floor(interval) + " day ago";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours ago";
      }
      interval = seconds / 3600;
      if (interval < 2 && interval >= 1) {
        return Math.floor(interval) + " hour ago";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes ago";
      }
      interval = seconds / 60;
      if (interval < 2 && interval >= 1) {
        return Math.floor(interval) + " minute ago";
      }
      return Math.floor(seconds) + " seconds ago";
    },

    vote: function() {
      this.$http
        .post("/story/vote/" + this.data._id, {
          token: localStorage.getItem("token")
        })
        .then(response => {
          console.log("test test test");
          this.articleData = response.data.payload.story;
          this.voted = true;
        })
        .catch(response => {
          console.log("resp", response);
        });
    },
    contentCheck: function() {
      // check if it has url or other content
      if (this.articleData.content) {
        this.$router.push({ path: '/storycomments', query: { id: this.articleData.sequenceId }})
      } else {
        window.location = this.articleData.url;
      }
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




