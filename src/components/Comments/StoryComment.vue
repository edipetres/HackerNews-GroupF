<template>
<tbody>
                                <tr class="athing comtr " id="">
                                    <td>
                                        <table border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="ind"><img src="s.gif" height="1" width="0"></td>
                                                    <td valign="top" class="votelinks">
                                                        <center>
                                                            <a href="#" @click="vote" v-show="!voted">
                                                <div class="votearrow" title="upvote"></div>
                                            </a>
                                                        </center>
                                                    </td>
                                                    <td class="default">
                                                        <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
          <a href="#" class="hnuser">{{ commentData.username }}</a> <span class="age"><a href="#">{{ timeSince(commentData.createdAt) }}}</a></span> <span id=""></span><span class="par"></span> <a class="togg" n="1" href="javascript:void(0)" onclick="return toggle(event, 18377971)">[-]</a>                                                            <span class="storyon"></span>
                                                            </span>
                                                        </div><br>
                                                        <div class="comment">
                                                            <span class="commtext c00">{{commentData.content}}</span>
                                                            <div class="reply">
                                                                <p>
                                                                    <font size="1">
                                                                        <u><a href="#">reply</a></u>
                                                                    </font>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                            </template>
<script>
export default {
  props: ["data", "index"],
  data: function() {
    return {
      voted: false,
      commentData: {}
    }
  },
  created: function() {
    this.commentData = this.data
  },
  methods: {
      timeSince: function(date) {
  var timeStamp = new Date(date);
  var seconds = Math.floor((new Date().getTime() - timeStamp.getTime()) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = seconds / 31536000;
  if(interval < 2 && interval >= 1){
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
  if(interval < 2 && interval >= 1){
    return Math.floor(interval) + " day ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = seconds / 3600;
  if(interval < 2 && interval >= 1){
    return Math.floor(interval) + " hour ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  interval = seconds / 60;
  if(interval < 2 && interval >= 1){
    return Math.floor(interval) + " minute ago";
  }
  return Math.floor(seconds) + " seconds ago";
},
      vote: function () {
      this.$http.post('/comment/vote/' + this.commentData._id, {
        token: localStorage.getItem('token')
      })
      .then(response => {
        this.commentData = response.data.comment
        this.voted = true
        })
      .catch(response => {
        console.log('resp', response)
        
      })
    }
  }
}
</script>
