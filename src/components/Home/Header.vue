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
                              <div v-if="username">
                                <a class="default-cursor" id="username-head">{{ username }}</a>
                                <a class="pointer" @click="onLogout">Logout</a>
                              </div>
                              <router-link class="pointer" to="/login" v-else>Login</router-link>

                          </span></td>
        </tr>
    </tbody>
</table>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
    data() {
        return {
            username: '',

        };
    },
    props: [],
    created() {
        const token = localStorage.getItem('token')
        if (token) {
            const decodedToken = jwtDecode(token)
            this.username = decodedToken.username
        }
    },
    methods: {
        onLogout() {
            //Currently clears the whole localStorage, be specific if you want to save data.
            localStorage.clear()
            this.username = ''
        },
    }

};
</script>

<style lang="scss" scoped>
#username-head {
    margin-right: 15px;
}
.pointer {cursor: pointer;}

.default-curser {cursor: default;}
</style>
