<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      quizzes: this.$store.getters.loadedQuiz.quizzes
    }
  },
  methods: {

  }
}

</script>
