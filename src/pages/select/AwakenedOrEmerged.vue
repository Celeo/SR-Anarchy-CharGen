<template lang="pug">
div
  h2.p-bottom Select awakened or emerged
  p Your character can be 
    strong awakened
    | , which means that they can connect to the mana in the world and use magic, 
    strong emerged
    | , which means that they can connect to the matrix without need of any electronic devices, or neither. 
  br
  p Characters are neither awakened nor emerged are often refered to as 
    strong mundane
    | , but there's nothing wrong with this.
  br
  p
    | Why 
    em wouldn't 
    | I want this?
    br
    | First off, it doesn't fit for all character ideas. If your character idea is a rough, tough dwarf who only relies 
    | on his aim to get him through the day, then it doesn't make sense to make him a mage. Secondly, choosing either
    | awakened or emerged 
    em does 
    | require spending the 
    strong shadow amp 
    | points to purchase them.
  div.m-bottom
  div.row
    div.col.s8.offset-s2
      div.row
        div.col.s4
          a.btn.lighten-1(v-bind:class="{ green: selectedAwakened, grey: !selectedAwakened }" @click="setMagic('awakened')") Awakened
        div.col.s4
          a.btn.lighten-1(v-bind:class="{ green: selectedEmerged, grey: !selectedEmerged }" @click="setMagic('emerged')") Emerged
        div.col.s4
          a.btn.lighten-1(v-bind:class="{ green: selectedMundane, grey: !selectedMundane }" @click="setMagic('mundane')") Mundane
</template>

<script>
export default {
  data() {
    return {
      magic: ''
    }
  },
  computed: {
    selectedAwakened() {
      return this.magic === 'awakened'
    },
    selectedEmerged() {
      return this.magic === 'emerged'
    },
    selectedMundane() {
      return !this.magic || this.magic === 'mundane'
    }
  },
  created() {
    this.magic = this.$store.getters.magic
  },
  methods: {
    setMagic(selected) {
      this.magic = selected
      this.$store.commit('setMagic', this.magic)
      this.$router.push('/main-menu')
    }
  }
}
</script>
