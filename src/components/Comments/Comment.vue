<template>
    <div class="table-wrapper">
        <tr class="athing" id="18376184">
            <td class="ind"></td>
            <td valign="top" class="votelinks">
                <center>
                    <a href="#" @click="vote" v-show="!voted">
                        <div class="votearrow" title="upvote"></div>
                    </a>
                </center>
            </td>
            <td class="default">
                <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                        <a href="#" class="hnuser">{{ commentData.username }}</a> <span class="age">&nbsp;<a href="#">{{
                                timeSince(commentData.createdAt) }}</a></span> <span id=""></span><span class="par"> |
                            <a href="#">parent</a></span>
                        <a class="togg" n="1" href="javascript:void(0)" onclick="return toggle(event, 18376184)"></a>
                        <span class="storyon"> | on: <router-link :to="{ path: '/storycomments', query: { id: commentData.parentId }}">{{
                                commentData.parentId }}</router-link></span>
                    </span>
                </div><br>
                <div class="comment">
                    <span class="commtext c00">{{ commentData.content }}</span>
                    <div class="reply"></div>
                </div>
            </td>
        </tr>
        <tr class="spacer" style="height:15px"></tr>
    </div>
</template>

<script>
import { timeSince } from "../../assets/helper.js";
export default {
  props: ["data", "index"],
  data: function() {
    return {
      voted: false,
      commentData: {}
    };
  },
  created: function() {
    this.commentData = this.data;
    this.checkVote();
  },
  methods: {
    checkVote: function(){
      if(localStorage.getItem("cvotes")){
        const votes =  JSON.parse(localStorage.getItem("cvotes"));
        if(votes.includes(this.commentData.sequenceId)){
          this.voted = true;
        }
      } 
    }, 
    timeSince,
    vote: function() {
      if (localStorage.getItem("token")) {
        this.$http
          .post("/comment/vote/" + this.commentData.sequenceId, {
            token: localStorage.getItem("token")
          })
          .then(response => {
            this.commentData = response.data.payload.comment;
            const votes =  JSON.parse(localStorage.getItem("cvotes"));
            votes.push(this.commentData.sequenceId);
            localStorage.setItem("cvotes", JSON.stringify(votes));
            this.voted = true;
          })
          .catch(response => {
            console.log("resp" + response);
          });
      } else {
        this.$router.push("login");
      }
    },
    timeAgo: function() {
      var time = new Date(0);
      var seconds = time.getMilliseconds(); //1440516958
      return time;
    }
  }
  //testingrharambe
};
</script>



