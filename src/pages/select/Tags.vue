<template lang="pug">
div
  h2.p-bottom Select tags
  p Tags are simple, one-word descriptors for your character.
  br
  p For example, a player making a hacker character would likely include the tag
    em hacker
    | .
  br
  p You can go beyond your role in the team, though - what about a one-word description
  | of your personality? Appearance?
  div.m-bottom
  div.row
    div.col.s8.input-field
      textarea.materialize-textarea(v-model="tags" placeholder="Write your tags here, one per line")
  div.m-bottom
  div.row
    a.btn.green(@click="save") Save
</template>

<script>
export default {
  data() {
    return {
      tags: ''
    }
  },
  methods: {
    save() {
      this.$store.commit('setTags', this.tags.split('\n'))
      this.$router.push('/main-menu')
    }
  },
  created() {
    this.tags = this.$store.getters.tags.join('\n')
  }
}
</script>
