<template>
  <v-container>
  <div class="headline mt-10"
  justify="center"
  align="center">
      {{quiz.title}} <br />
      <span class="mr-4">Question: {{qNumber+1}} / {{quiz.questions.length}}</span> |
      <span class="ml-4">Score: {{score}}</span>
  </div>
  <div class="display-1"
  justify="center"
  align="center">
      {{question().question}}
  </div>
<v-row
    justify="center"
    align="center"
    class="mb-6">
      <v-col v-for="(answer, i) in question().answers"
      cols="12"
      sm="6">
        <v-card @click="onAnswer(answer.value)" class="text-center pa-4 info white--text">
          <div class="headline" style="z-index: 1">{{answer.content}}</div>
          <v-overlay
            v-if="true"
            absolute
            opacity=.8
            color=red
          >
          something
          </v-overlay>
          </v-card>
      </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      quiz: this.$store.getters.selectedQuiz,
      qNumber: 0,
      score: 0,
      overylay: false
    }
  },
  methods: {
    something () {
      console.log('something')
    },
    question (qNumber) {
      let question = this.quiz.questions
      //console.log(question)
      //question.push({'onAnswer': question.answers[qNumber].value})
      return question[this.qNumber]
    },
    onAnswer (answer) {
      console.log(answer)
      if (answer === true) {
        this.score++
        this.qNumber++
      }
    }
  }
}
</script>
