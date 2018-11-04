<template>
<center>
   <div class="storycomments">
    <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
            <tr>
                <td bgcolor="#ff6600">
                    <Header/>
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
                                        <a id="up_18376741" href="vote?id=18376741&amp;how=up&amp;goto=item%3Fid%3D18376741">
                                            <div class="votearrow" title="upvote"></div>
                                        </a>
                                    </center>
                                </td>
                                <td class="title"><a href="http://blog.robertelder.org/jeri-ellsworth-robot-uprising/" class="storylink">Jeri Ellsworth and the Robot Uprising of 2038</a><span class="sitebit comhead"> (<a href="from?site=robertelder.org"><span class="sitestr">robertelder.org</span></a>)</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"></td>
                                <td class="subtext">
                                    <span class="score" id="score_18376741">89 points</span> by <a href="user?id=robertelder" class="hnuser">robertelder</a> <span class="age"><a href="item?id=18376741">4 hours ago</a></span> <span id="unv_18376741"></span>                                    | <a href="hide?id=18376741&amp;goto=item%3Fid%3D18376741">hide</a> | <a href="https://hn.algolia.com/?query=Jeri%20Ellsworth%20and%20the%20Robot%20Uprising%20of%202038&amp;sort=byDate&amp;dateRange=all&amp;type=story&amp;storyText=false&amp;prefix&amp;page=0"
                                        class="hnpast">past</a> | <a href="https://www.google.com/search?q=Jeri%20Ellsworth%20and%20the%20Robot%20Uprising%20of%202038">web</a> | <a href="fave?id=18376741&amp;auth=494a43f747a74406633e928337c5f738fd3971d5">favorite</a>                                    | <a href="item?id=18376741">34&nbsp;comments</a> </td>
                            </tr>
                            <tr style="height:10px"></tr>
                            <tr>
                                <td colspan="2"></td>
                                <td>
                                    <form method="post" action="comment"><input type="hidden" name="parent" value="18376741"><input type="hidden" name="goto" value="item?id=18376741"><input type="hidden" name="hmac" value="e6cbb8d2abb18194b89bc65311dd062ce72c3f3a"><textarea name="text" rows="6"
                                            cols="60"></textarea>
                                        <br><br><input type="submit" value="add comment"></form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br><br>
                    <table border="0" class="comment-tree">

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

export default {
  name: "storycomments",
  components: {
    Header,
    StoryComment
  },
  data: function() {
    return {
      storyComments: {}
    };
  },
  created() {
    this.fetchStoryComments();
  },
  methods: {
    fetchStoryComments() {
      const vm = this;
      this.$http
        .get("/comment/story/"+this.$route.query.id)
        .then(function(response) {
          // handle success
          vm.storyComments = response.data.payload;
        })
        .catch(function(error) {
          // handle error
          alert("Error loading articles from server.", error);
        })
        .then(function() {
          // always executed
        });
    }
  }
};
</script>