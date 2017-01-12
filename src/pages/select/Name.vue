<template lang="pug">
div
  h2.p-bottom Select name
  p Your name is, well, 
    strong what people will call you
    | . Probably.
  br
  p Most characters have a real name: the name the were born with or choose for themselves 
    | some time in their childhood.
  br
  p Some players also opt to give their character a 
    strong street name
    | , a name that they go by as a 
    em shadowrunner
    | . This could be to hide their identity, or just because it sounds cool.
  div.m-bottom
  div.row
    div.col.s6.input-field
      input#personal(v-model="personal" type="text")
      label(for="personal") Real name
    div.col.s6.input-field
      input#street(v-model="street" type="text")
      label(for="street") Street name
  div.m-bottom
  div.row
    a.btn.green(@click="save") Save and continue
</template>

<script>
export default {
  data() {
    return {
      personal: '',
      street: ''
    }
  },
  methods: {
    save() {
      this.$store.commit('setPersonalName', this.personal)
      this.$store.commit('setStreetName', this.street)
      this.$router.push('/main-menu')
    }
  },
  created() {
    const names = this.$store.getters.names
    this.personal = names.personal
    this.street = names.street
  }
}
</script>
