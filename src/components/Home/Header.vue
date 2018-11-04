<template>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
                            <tbody>
                                <tr>
                                    <td style="width:18px;padding-right:4px">
                                        <router-link to="/"><img src="/static/img/y18.gif" width="18" height="18" style="border:1px white solid;"></router-link>
                                    </td>
                                    <td style="line-height:12pt; height:10px;"><span class="pagetop"><b class="hnname"><router-link to="/">Hacker News</router-link></b>
              <router-link to="/">new</router-link>| <span class="pagetop"><router-link to="/newcomments">comments</router-link></span> | <a href="show">show</a> | <a href="ask">ask</a> | <a href="jobs">jobs</a> | <a href="submit">submit</a> </span>
                                    </td>
                                    <td style="text-align:right;padding-right:4px;"><span class="pagetop">
                              <router-link to="/login">Login</router-link>
                          </span></td>
                                </tr>

      <!-- <tr>
        
        <td>
          <a href="#"><img src="/static/img/y18.gif" class="icon"></a>
        </td>
        <td>
          <span class="header-title">Hacker News</span>
          <a href="#">new</a> |
          <router-link to="/newcomments">comments</router-link> |
          <a href="#">show</a> |
          <a href="#">ask</a> |
          <a href="#">jobs</a> |
          <a href="#">submit</a>
        </td>
        <td style="text-align:right;padding-right:4px;">
          <router-link to="/login">Login</router-link>
        </td>
      </tr> -->
    </tbody>
  </table>

</template>

<script>
export default {
  props: []
};
</script>

