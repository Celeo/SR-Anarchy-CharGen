<template lang="pug">
div
  h2 Start
  p
    | Welcome to the Shadowrun: Anarchy 
    em character creator
    | .
  br
  p
    | You can 
    router-link(to="/new") start a new character 
    | or 
    router-link(to="/continue") continue a previous character
    | .
</template>
