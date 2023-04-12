<template>
    <div id="content">
        <div id="left">
            <img v-bind:src="UserHeadPicture" alt="图片加载中">
        </div>
        <div id="right">
            <h3>user:&nbsp;&nbsp;<span>{{ UserName }}</span></h3>
            <h3>id:&nbsp;&nbsp;<span>{{ UserId }}</span></h3>
            <h3>node id:&nbsp;&nbsp;<span>{{ UserNodeId }}</span></h3>
        </div>
        <br>
    </div>
    <div id="moreMessage">
        <p>More</p>
        <h4>blog:<span>{{UserBlog}}</span></h4>
        <h4>location:<span>{{UserLocation}}</span></h4>
        <h4>email:<span>{{UserEmail}}</span></h4>
        <h4>Twitter:<span>{{UserTwitter}}</span></h4>
        <h4>Repos:<span>{{UserRepos}}</span></h4>
        <h4>Followers:<span>{{UserFollowers}}</span></h4>
        <h4>Following:<span>{{UserFollowing}}</span></h4>
        <h4>CreateTime:<span>{{UserCreateTime}}</span></h4>
        <h4>UpdateTime:<span>{{UserUpdateTime}}</span></h4>
    </div>
</template>

<script>
export default {
    name: "userMessage",
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
    ]
}
</script>

<style scoped>
body {
    /*text-align: center;*/
}

#content > div {
    display: inline-block;
}

#left {
    display: inline-block;
    margin: 3vh;
}

#left > img {
    width: 20vh;
    height: 20vh;
}

#right {
    display: inline;
    margin: 3vh;
}

#moreMessage > p {
    font-size: 3vh;
    color: green;
}
span{
    color: violet;
}
</style>