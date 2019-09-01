<template>
  <v-container v-if="!scoreDisplay">
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
      <v-col v-for="(answer) in question().answers"
      cols="12"
      sm="6">
        <v-card v-if="!disableClick" @click="onAnswer(answer)" class="text-center pa-4 info white--text">
          <div class="headline" style="z-index: 1">{{answer.content}}</div>
          <v-overlay
            v-if="answer.overlay"
            absolute
            opacity=.8
            :color="answer.color"
          >
          <v-icon>{{answer.icon}}</v-icon>{{answer.message}}
          </v-overlay>
          </v-card>

          <v-card v-if="disableClick" class="text-center pa-4 info white--text">
            <div class="headline" style="z-index: 1">{{answer.content}}</div>
            <v-overlay
              v-if="answer.overlay"
              absolute
              opacity=.8
              :color="answer.color"
            >
            <v-icon>{{answer.icon}}</v-icon>{{answer.message}}
            </v-overlay>
            </v-card>
      </v-col>
  </v-row>
  </v-container>

  <v-container v-else-if="scoreDisplay">
    <div class="display-4 mt-10"
    justify="center"
    align="center">
        Score
    </div>
    <div class="display-1"
    justify="center"
    align="center">
        {{Score()}} <br />
        <span>Your score is {{Math.round(score/quiz.questions.length*100)}}%</span><br />
        <v-btn @click="$router.push('/')" class="my-6 info" large>play again</v-btn>
    </div>

  </v-container>

</template>

<script>
export default {
  data () {
    return {
      quiz: this.$store.getters.selectedQuiz,
      qNumber: 0,
      score: 0,
      overylay: false,
      disableClick: false,
      index: 0,
      scoreDisplay: false
    }
  },
  methods: {
    Score () {
      if ((this.score / (this.quiz.questions.length + 1)) >= 0.5) {
        return 'Congratulations! You have passed.'
      } else if ((this.score / (this.quiz.questions.length + 1)) < 0.5) {
        return 'Sorry! You have failed.'
      }
    },
    question (qNumber) {
      let question = this.quiz.questions
      return question[this.qNumber]
    },
    onAnswer (answer) {
      this.disableClick = true
      answer.overlay = true
      this.$forceUpdate()
      if (answer.value === true) {
        this.score++
        answer.message = ' Correct'
        answer.color = 'success'
        answer.icon = 'mdi-check-bold'
      } else {
        answer.message = ' Wrong'
        answer.color = 'error'
        answer.icon = 'mdi-window-close'
      }
      setTimeout(() => {
        // console.log(i + this.quiz.questions.length)
        if (this.quiz.questions.length - 1 === this.qNumber) {
          this.scoreDisplay = true
        } else {
          this.qNumber++
          this.disableClick = false
        }
      }, 2000)
    }
  }
}
</script>
