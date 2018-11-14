<template>
  <center>
    <div class="storycomments">
      <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          <tr>
            <td bgcolor="#ff6600">
              <Header />
            </td>
          </tr>
          <tr style="height:10px"></tr>
          <tr>
            <td>
              <table class="fatitem" border="0">
                <tbody>
                  <tr class="athing" id="18376741">
                    <td align="right" valign="top" class="title"><span class="rank"></span></td>
                    <td valign="top" class="votelinks">
                      <center>
                        <a href="#" @click="vote" v-show="!voted">
                          <div class="votearrow" title="upvote"></div>
                        </a>
                      </center>
                    </td>
                    <td class="title"><a :href="storyData.url" class="storylink" target="_blank">{{ storyData.title }}</a><span
                        class="sitebit comhead"> (<a :href="storyData.url"><span class="sitestr">{{ storyData.url |
                            trimHost }}</span></a>)</span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <!-- <td>
                      {{ this.storyData.content }} 
                    </td>
                  </tr> 
                  <tr>-->
                    <td class="subtext">
                      <span class="score">{{ storyData.voteCount }} points</span> by <a href="#" class="hnuser">{{
                        storyData.username }}</a> <span class="age">&nbsp;<a href="#">{{ timeSince(storyData.createdAt)
                          }}</a></span> <span></span> |
                      <a href="#">hide</a> | <a href="#" class="hnpast">past</a> | <a href="#">web</a> | <a href="#">favorite</a>
                      | <router-link :to="{ path: '/storycomments', query: { id: storyData.sequenceId }}">{{
                        storyData.commentCount }} comments</router-link>
                    </td>
                  </tr>
                  <tr style="height:10px"></tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>
                      <div>
                        <textarea name="text" rows="6" cols="60" v-model="commentText"></textarea>
                        <br><br><input type="submit" value="add comment" @click="postCommentParent"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br><br>
              <table border="0" class="comment-tree">
                <StoryComment v-for="(comment, index) in commentData" v-bind:key="index" :data="comment" :index="index"></StoryComment>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </center>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Home/Header.vue";
import StoryComment from "@/components/Comments/StoryComment.vue";
import { timeSince } from "../assets/helper.js";

export default {
  name: "storycomments",
  components: {
    Header,
    StoryComment
  },
  data: function() {
    return {
      voted: false,
      storyData: {},
      commentData: [],
      commentText: ""
    };
  },
  created() {
    this.fetchStoryComments();
  },
  methods: {
    timeSince,
    vote: function() {
      if (localStorage.getItem("token")) {
        this.$http
          .post("/story/vote/" + this.storyData._id, {
            token: localStorage.getItem("token")
          })
          .then(response => {
            console.log("test test test");
            this.storyData = response.data.payload.story;
            this.voted = true;
          })
          .catch(response => {
            console.log("resp", response);
          });
      } else {
        this.$router.push("login");
      }
    },
    postCommentParent: function() {
      if (localStorage.getItem("token")) {
        if(this.commentText){
      this.$http
        .post("/post", {
          token: localStorage.getItem("token"),
          post_text: this.commentText,
          hanesst_id: 0,
          post_parent: this.storyData.sequenceId,
          post_type: "comment"
        })
        .then(response => {
          this.commentData = response.data.payload.comments;
          this.$router.go(this.$router.currentRoute);
        })
        .catch(response => {
          console.log("resp", response);
        });
        } else {
          alert("The text field is empty!");
        }
        } else {
        this.$router.push("login");
      }
    },
    fetchStoryComments: function() {
      this.$http
        .get("/comment/story/" + this.$route.query.id)
        .then(response => {
          this.storyData = response.data.payload.story[0];
          this.commentData = response.data.payload.comments;
        })
        .catch(response => {
          console.log("resp", response);
        });
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