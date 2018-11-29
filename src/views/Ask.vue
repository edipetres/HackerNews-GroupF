<template>
  <center>      
    <div class="home">
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
        </tbody>
      </table>
    </div>
    <h1>Ask it currently under construction. Sorry for the inconvenience</h1>
  </center>
</template>

<script>
import Header from "@/components/Home/Header.vue";
import Article from "@/components/Home/Article.vue";

export default {
  name: "ask",
  components: {
    Header,
    Article
  },
}
</script>

