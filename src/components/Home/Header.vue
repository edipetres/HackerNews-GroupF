<template>
  <table border="0" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td>
          <a href="#"><img src="/static/img/y18.gif" class="icon"></a>
        </td>
        <td>
          <span class="header-title">Hacker News</span>
          <a href="#">new</a> |
          <a href="#">comments</a> |
          <a href="#">show</a> |
          <a href="#">ask</a> |
          <a href="#">jobs</a> |
          <a href="#">submit</a>
        </td>
        <td style="text-align:right;padding-right:4px;">
          <router-link to="/login">Login</router-link>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
    props:[]
}
</script>

<style lang="scss" scoped>

table {
  padding: 2px 0 0 2px;
  width: 100%;
}

td {
  color: black;
  font-size: 10pt;

  .icon {
    border: 1px white solid;
  }

  .header-title {
    font-weight: bold;
    margin-right: 10px;
  }

  a {
    color: black;
    text-decoration: none;
  }
}

</style>



