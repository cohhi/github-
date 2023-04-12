<template>
  <ul>
      <li v-for="list in UserReposMessage.data">
          {{list}}
      </li>
  </ul>
</template>

<script>
export default {
    name: "repos",
    props: [
        'UserReposMessage',
    ]
}

</script>

<style scoped>

</style>