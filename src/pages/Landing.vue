<template lang="pug">
div
  h2 Start
  p
    | Welcome to an unofficial Shadowrun: Anarchy 
    em character creator
    | .
  br
  p
    | You can 
    router-link(to="/new") start a new character 
    | or 
    router-link(to="/continue") continue a previous character
    | .
  br
  br
  br
  p.small.
    This tool nor its author is affiliated with Catalyst Game Labs. All <em>Shadowrun</em> and
    <em>Shadowrun: Anarchy</em> trademarks belong to them.
  p.small
    | This tool is open source, 
    a(href="https://github.com/Celeo/SR-Anarchy-CharGen") here
    | .
</template>

<style lang="stylus" scoped>
.small
  font-size 0.8rem
</style>
