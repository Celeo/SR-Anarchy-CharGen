<template lang="pug">
div
  h2.p-bottom Select name
  p Your 
    strong metatype 
    | is your character's race. All 5 races in the game are humanoid, but each 
    | (that isn't human) is different from humans in some ways.
  br
  p.
    Each metatype includes some racial bonuses that are tailored to their anatomy,
    but any race can play any role in your group.
  div.m-bottom
  div.row
    div.col.s6.input-field
      select(v-model="metatype")
        option Human
        option Elf
        option Dwarf
        option Ork
        option Troll
  div.m-bottom
  div.row
    a.btn.green(@click="save") Save
</template>

<script>
import $ from 'jquery'


export default {
  data() {
    return {
      metatype: ''
    }
  },
  created() {
    this.metatype = this.$store.getters.metatype
  },
  mounted() {
    const vm = this
    $('select').material_select()
    $('select').change(function() {
      vm.metatype = $(this).find(':selected').text()
    })
  },
  methods: {
    save() {
      this.$store.commit('setMetaType', this.metatype)
      this.$router.push('/main-menu')
    }
  }
}
</script>
