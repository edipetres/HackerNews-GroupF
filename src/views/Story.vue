<template>
    <center>
    <div class="story">
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
              <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
                <Article v-for="(article, index) in articles" v-bind:key="index" :data="article" :index="index"></Article>
              </table>

            </td>
          </tr>
          <tr>
              <td class="storycontent">
                  Story content to be here!
                <!-- content to be put here -->
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </center>
</template>
<script>
import Header from "@/components/Home/Header.vue";
import Article from "@/components/Home/Article.vue";

export default {
    name:"story",
    components: {
        Header,
        Article
    },
    data: function() {
    return {
      // do something here
      storyData:{}
    };
  },
  created() {
      // fetch the content of the story
    // this.fetchContent();
    this.storyData = this.data
    console.log(this.$route.query.id)
  }
}
</script>

<style>

</style>
