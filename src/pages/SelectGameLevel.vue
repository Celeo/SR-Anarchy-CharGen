<template lang="pug">
div
  h2.m-bottom Select game level
  p
    | The first thing you need to do is determine what 
    strong level of the game 
    | your group is playing.
  br
  p
    strong Gang 
    | is the lowest of the three levels, and grants the least amount of stats at character creation.
  p
    strong Street 
    | is the middle of the levels, and grants a medium amount of stats.
  p
    strong Prime 
    | is the highest of the levels, and grants the largest amount of stats.
  br
  br
  p
    em
      b Important note!
  p
    | Don't be afraid to start the game playing at the 
    strong gang 
    | level. Any level is suitable for playing the game. Talk with your GM to determin the 
    | best level for your group.
  div.row
    div.col.s6.offset-s3
      div.row
        div.col.s4
          a.btn.green.darken-1(@click="setLevel('gang')") Gang
        div.col.s4
          a.btn.green.darken-1(@click="setLevel('street')") Street
        div.col.s4
          a.btn.green.darken-1(@click="setLevel('prime')") Prime
</template>

<script>
import MainMenu from './MainMenu'


export default {
  components: { MainMenu },
  methods: {
    setLevel(level) {
      this.$store.commit('setLevel', level)
      console.log(`Game level set to ${level}`)
      this.$router.push('/main-menu')
    }
  }
}
</script>

<style lang="stylus" scoped>
.row
  padding-top 1.5rem
</style>
