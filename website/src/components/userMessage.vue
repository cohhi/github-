<template>
    <div id="content">
        <div id="left">
            <img v-bind:src="UserHeadPicture" alt="">
        </div>
        <div id="right">
            <h3>user:{{ UserName }}</h3>
            <h3>id:{{ UserId }}</h3>
            <h3>node id:{{ UserNodeId }}</h3>
        </div>
        <br>
    </div>
    <div id="moreMessage">
        <p>More</p>
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
</style>