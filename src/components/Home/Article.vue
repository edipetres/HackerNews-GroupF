<template>
  <div class="tr-wrapper">
    <tr class="article-header">
      <td>{{ index + 1 }}.</td>
      <td>
        <svg class="upvote-arrow" style="" viewBox="0 0 20 20">
          <path fill="#757575" d="M8,15L12,10L17,15H7Z" />
        </svg>
      </td>
      <td>
        <a :href="data.articleUrl" class="title">{{ data.title }}</a>
        <span class="domain">
          (<a :href="data.articleUrl">{{ data.articleUrl | trimHost }}</a>)
        </span>
        <!-- (<span class="sitebit comhead"> <a href="#" class="title"></a></span>) -->
      </td>
    </tr>
    <tr class="article-info">
      <td colspan="2"></td>
      <td style="padding-top: 2px;">{{ data.votes }} points by {{ data.user.userName }} {{ data.dateAdded }} | hide | {{ data.commentCount }} comments </td>
    </tr>
    <tr class="spacer" style="height:5px"></tr>
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  filters: {
    trimHost: value => {
      if (!value) return ''

      return value.split('.')[1] + '.' + value.split('.')[2]
    }
  }
}
</script>

<style lang="scss" scoped>

svg.upvote-arrow {
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 2px -5px -5px;
}

div.tr-wrapper {
  padding-left: 10px;
}

tr {
  .article-header {
    font-size: 10pt;
    
    .title {
      color: black;
    }

    .domain {
      font-size: 8pt;

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .article-info {
    font-size: 9px;
    padding-top: 2px !important;
  }
}

td {
  a {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: #828282;
    text-decoration: none;
  }
}

</style>

