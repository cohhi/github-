<template>
    <div id="content">
        <el-input v-model="githubUser" placeholder="user name please" @keydown.enter="searchUser()"/>
        <el-button type="primary" @click="searchUser()">Search
        </el-button>
    </div>
    <div id="state">
        {{ searchState }}
    </div>
    <div id="stateMessage">
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
</template>

<script>
import axios from "axios";
import UserMessage from "@/components/userMessage.vue";
import {defineComponent} from "vue";


export default defineComponent({
    name: "content",
    components: {
        axios,
        UserMessage,
    },
    data() {
        return {
            githubUser: '',
            userMessage: 'https://api.github.com/users/',
            searchState: '',
            // props
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
    ],
    methods: {
        searchUser() {
            this.searchState = "查找中..."
            axios.get(this.userMessage + this.githubUser, {}).then(response => {
                console.log(response)
                switch (response.status) {
                    case 200: {
                        this.searchState = "找到了捏"
                        console.log(response)
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
                this.UserFollowers = response.data.followers_url;
                this.UserFollowing = response.data.following;
                this.UserCreateTime = response.data.created_at;
                this.UserUpdateTime = response.data.updated_at;

            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        githubUser(newValue, oldValue) {

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