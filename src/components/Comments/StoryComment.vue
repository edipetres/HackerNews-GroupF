<template>
<tbody>
                                <tr class="athing comtr " id="18377971">
                                    <td>
                                        <table border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="ind"><img src="s.gif" height="1" width="0"></td>
                                                    <td valign="top" class="votelinks">
                                                        <center>
                                                            <a id="up_18377971" href="vote?id=18377971&amp;how=up&amp;goto=item%3Fid%3D18376741">
                                                                <div class="votearrow" title="upvote"></div>
                                                            </a>
                                                        </center>
                                                    </td>
                                                    <td class="default">
                                                        <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
          <a href="user?id=falcor84" class="hnuser">falcor84</a> <span class="age"><a href="item?id=18377971">13 minutes ago</a></span> <span id="unv_18377971"></span><span class="par"></span> <a class="togg" n="1" href="javascript:void(0)" onclick="return toggle(event, 18377971)">[-]</a>                                                            <span class="storyon"></span>
                                                            </span>
                                                        </div><br>
                                                        <div class="comment">
                                                            <span class="commtext c00">I for one really liked that Blade Runner reference with the repetition of "interlinked". My initial vision of the post's future was of The Terminator, but that reference made me consider a more interesting future with different kinds of artificial beings.</span>
                                                            <div class="reply">
                                                                <p>
                                                                    <font size="1">
                                                                        <u><a href="reply?id=18377971&amp;goto=item%3Fid%3D18376741%2318377971">reply</a></u>
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
      timeAgo: function () {
          var time = new Date(0);
          var seconds = time.getMilliseconds(); //1440516958
          return time;
      }
  }
}
</script>
