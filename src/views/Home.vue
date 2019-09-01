<template>
  <v-container>
  <div class="display-3 mt-10"
  justify="center"
  align="center">
      Welcome <br />
      <span class="headline">Please select a quiz.</span>
  </div>
  <v-row
    justify="center"
    align="center"
    class="mb-6">
      <v-col v-for="(quiz, i) in quizzes"
      cols="12"
      sm="6">
        <v-card @click="selectQuiz(quiz)" class="text-center pa-8 info white--text">
          <span class="headline">{{quiz.title}}</span>
          </v-card>
      </v-col>
  </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      quizzes: this.$store.getters.loadedQuiz.quizzes
    }
  },
  methods: {
    selectQuiz (quiz) {
      this.$router.push('/quiz')
      this.$store.dispatch('selectedQuiz', quiz)
      console.log(quiz.title)
    }
  }
}
</script>
