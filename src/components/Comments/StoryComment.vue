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
          <a href="#" class="hnuser">{{ commentData.username }}</a> <span class="age"><a href="#">{{ commentData.createdAt }}}</a></span> <span id=""></span><span class="par"></span> <a class="togg" n="1" href="javascript:void(0)" onclick="return toggle(event, 18377971)">[-]</a>                                                            <span class="storyon"></span>
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
    },
      timeAgo: function () {
          var time = new Date(0);
          var seconds = time.getMilliseconds(); //1440516958
          return time;
      }
  }
}
</script>
