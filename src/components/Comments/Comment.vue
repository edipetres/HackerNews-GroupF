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
          <a href="#" class="hnuser">{{ commentData.username }}</a> <span class="age"><a href="#"> {{ commentData.createdAt }}</a></span> <span id=""></span><span class="par"> | <a href="#">parent</a></span>
                                            <a class="togg" n="1"
                                                href="javascript:void(0)" onclick="return toggle(event, 18376184)"></a> <span class="storyon"> | on: <a href="#">{{ commentData.parentId }}</a></span>
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

    <!-- <tbody>
        <tr class="newstcomments" id="MAKE AN AUTOMATIC ID" >
            <td class="indline"></td>
            <td class="votebutton">
                <center>
                    <a id="THE AUTOMATIC ID FROM CLASS" href="SOMETHING">
                        <div class="votearrow" title="upvote">
                        </div>
                    </a>
                </center>
            </td>
            <td class="default">
                <div id="div2">
                    <span class="commhead">
                        <a href="USER ID" class="commuser">USER ID</a>
                        <span class="age">
                            <a href="TIME AGO ID">TIME AGO IT WAS POSTED</a>
                            <span id="NOT SURE WHAT THIS IS FOR"></span>
                            <span class="par"></span>
                                <a href="PARENT ID">PARENT</a>
                        </span>
                        <a class="togg" n="1" href="javascript:void(0)" onclick="return toggle(event,SOME ID???"></a>
                        <span class="storyon">
                            <a href="TOPIC TITLE ID">TOPIC TITLE ID</a>
                        </span>
                    </span>
                </div>
                <br>
                <div>
                    <span class="commtext c00">
                        USER TEXT
                        <p>

                        </p>
                        <div class="reply"></div>
                    </span>                    
                </div>
            </td>
        </tr>
    </tbody> -->
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



