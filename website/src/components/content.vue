<template>
    <div id="content">
        <el-input v-model="githubUser" placeholder="user name please" @keydown.enter="searchUser()"/>
        <el-button type="primary" @click="searchUser()">Search
        </el-button>
        <el-button type="warning" plain @click="clear()">Clear</el-button>
    </div>
    <div id="state">
        {{ searchState }}
    </div>
    <div id="stateMessage" v-show="showReturnMessage">
        <UserMessage
                :UserName="UserName"
                :UserId="UserId"
                :UserNodeId="UserNodeId"
                :UserHeadPicture="UserHeadPicture"
                :UserBlog:="UserBlog"
                :UserLocation="UserLocation"
                :UserEmail="UserEmail"
                :UserTwitter="UserTwitter"
                :UserRepos="UserRepos"
                :UserFollowers="UserFollowers"
                :UserFollowing="UserFollowing"
                :UserCreateTime="UserCreateTime"
                :UserUpdateTime="UserUpdateTime"
        ></UserMessage>
    </div>
    <hr>
    <div id="moreMessage" v-show="showReturnMessage">
        <router-link to="/userRepos">
            <el-button type="primary" round @click="searchRepos()">
                Repos
            </el-button>
        </router-link>
        <router-view></router-view>
        <ul>
            <li v-for="list in UserReposMessage">
                {{list.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import UserMessage from "@/components/userMessage.vue";
import UserRepos from "@/components/userRepos.vue";
import {defineComponent} from "vue";


export default defineComponent({
    name: "content",
    components: {
        axios,
        UserMessage,
        UserRepos,
    },
    data() {
        return {
            githubUser: '',
            userMessage: 'https://api.github.com/users/',
            userMessageRepos: 'https://api.github.com/users/',
            searchState: '',
            showReturnMessage: false,
            // 基本信息
            UserName: '',
            UserId: '',
            UserNodeId: '',
            UserHeadPicture: '',
            UserBlog: '',
            UserLocation: '',
            UserEmail: '',
            UserTwitter: '',
            UserRepos: '',
            UserFollowers: '',
            UserFollowing: '',
            UserCreateTime: '',
            UserUpdateTime: '',
            //用户存储库信息
            UserReposMessage: '',

        }
    },
    props: [
        'UserName',
        'UserId',
        'UserNodeId',
        'UserHeadPicture',
        'UserBlog',
        'UserLocation',
        'UserEmail',
        'UserTwitter',
        'UserRepos',
        'UserFollowers',
        'UserFollowing',
        'UserCreateTime',
        'UserUpdateTime',
        //仓库信息
        'UserReposMessage',
    ],
    methods: {
        searchUser() {
            this.searchState = "查找中..."
            this.showReturnMessage = true
            axios.get(this.userMessage + this.githubUser, {}).then(response => {
                switch (response.status) {
                    case 200: {
                        this.searchState = "找到了捏"
                        break;
                    }
                }
                this.UserName = response.data.login;
                this.UserId = response.data.id;
                this.UserNodeId = response.data.node_id;
                this.UserHeadPicture = response.data.avatar_url;
                this.UserBlog = response.data.blog;
                this.UserLocation = response.data.location;
                this.UserEmail = response.data.email;
                this.UserTwitter = response.data.twitter_username;
                this.UserRepos = response.data.public_repos;
                this.UserFollowers = response.data.followers;
                this.UserFollowing = response.data.following;
                this.UserCreateTime = response.data.created_at;
                this.UserUpdateTime = response.data.updated_at;

            }).catch(error => {
                console.log(error)
            })
        },
        searchRepos() {
            axios.get(this.userMessageRepos + this.githubUser + '/repos', {}).then(response => {
                this.UserReposMessage = response.data;
                console.log(response)
                console.log(response.data[0])
            }).catch(error => {
                console.log(error)
            })
        },
        clear() {
            this.showReturnMessage = false
        }
    },
    watch: {
        githubUser(newValue, oldValue) {
            // this.searchUser()
        }
    }
})
</script>

<style scoped>
#content {
    display: flex;
    align-content: center;
    align-items: center;
}

el-button {
    width: 70%;
    text-align: center;
}

#state {
    background: cyan;
    text-align: center;
}
</style>