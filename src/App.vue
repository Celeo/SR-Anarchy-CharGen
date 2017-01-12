<template lang="pug">
main
  div.container-large
    div.row
      div.col.s3
        div#status
          ul.collection.with-header
            li.collection-header
              h4 Creation Progress
            li.collection-item
              span {{ gameLevel }} 
              strong game level
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canSpendAttributes") {{ this.$store.getters.remainingAttributePoints }} 
              | remaining 
              strong Attribute points
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canSpendSkills") {{ this.$store.getters.remainingSkillPoints }} 
              | remaining 
              strong Skill points
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canSpendShadowAmps") {{ this.$store.getters.remainingShadowAmpPoints }} 
              | remaining 
              strong Shadow Amp points
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canBuyRangedWeapons") {{ this.$store.getters.remainingWeapons.ranged }} 
              | remaining 
              strong Ranged weapons
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canBuyMeleeWeapons") {{ this.$store.getters.remainingWeapons.melee }}  
              | remaining 
              strong Melee weapons
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canBuyEitherWeapons") {{ this.$store.getters.remainingWeapons.either }} 
              | remaining 
              strong weapons of either type
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canBuyItems") {{ this.$store.getters.remainingItems }} 
              | remaining 
              strong Items
            li.collection-item(v-if="gameLevel !== 'Unknown'")
              span.text-lighten-1(v-bind:class="canBuyContacts") {{ this.$store.getters.remainingContacts }} 
              | remaining 
              strong Contacts
      div.col.s9
        div.card
          div.card-content
            transition(name="fade" mode="out-in")
              router-view
  div.fixed-action-btn.click-to-toggle(v-if="this.$store.getters.gameLevel !== ''")
    a.btn-floating.btn-large.red(@click.prevent="gotoMainMenu")
      i.large.material-icons menu
</template>

<script>
const titleCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  computed: {
    gameLevel() {
      return titleCase(this.$store.getters.gameLevel || 'Unknown')
    },
    canSpendAttributes() {
      return {
        'green-text': this.$store.getters.remainingAttributePoints > 0,
        'red-text': this.$store.getters.remainingAttributePoints <= 0
      }
    },
    canSpendSkills() {
      return {
        'green-text': this.$store.getters.remainingSkillPoints > 0,
        'red-text': this.$store.getters.remainingSkillPoints <= 0
      }
    },
    canSpendShadowAmps() {
      return {
        'green-text': this.$store.getters.remainingShadowAmpPoints > 0,
        'red-text': this.$store.getters.remainingShadowAmpPoints <= 0
      }
    },
    canBuyRangedWeapons() {
      return {
        'green-text': this.$store.getters.remainingWeapons.ranged > 0,
        'red-text': this.$store.getters.remainingWeapons.ranged <= 0
      }
    },
    canBuyMeleeWeapons() {
      return {
        'green-text': this.$store.getters.remainingWeapons.melee > 0,
        'red-text': this.$store.getters.remainingWeapons.melee <= 0
      }
    },
    canBuyEitherWeapons() {
      return {
        'green-text': this.$store.getters.remainingWeapons.either > 0,
        'red-text': this.$store.getters.remainingWeapons.either <= 0
      }
    },
    canBuyItems() {
      return {
        'green-text': this.$store.getters.remainingItems > 0,
        'red-text': this.$store.getters.remainingItems <= 0
      }
    },
    canBuyContacts() {
      return {
        'green-text': this.$store.getters.remainingContacts > 0,
        'red-text': this.$store.getters.remainingContacts <= 0
      }
    }
  },
  methods: {
    gotoMainMenu() {
      this.$router.push('/main-menu')
    }
  }
}
</script>

<style lang="stylus">
body
  display flex
  min-height 100vh
  flex-direction column
  font-size 1.3rem

main
  flex 1 0 auto
  margin-top 1rem

::-webkit-scrollbar
  width 17px

::-webkit-scrollbar-track
  background-color #333
::-webkit-scrollbar-thumb

  background-color #666666

::-webkit-scrollbar-thumb:hover
  background-color gray

.container-large
  width 85%
  margin-left auto
  margin-right auto

.clearfix::after
  content ""
  display block
  clear both

.fade-enter-active, .fade-leave-active
  transition opacity .3s

.fade-enter, .fade-leave-active
  opacity 0

.small
  font-size 0.8rem

.m-bottom
  margin-bottom 3rem

.p-top-slight
  padding-top 2rem
</style>
