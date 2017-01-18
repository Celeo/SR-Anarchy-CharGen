<template lang="pug">
div
  h2.p-bottom Character components
  p These are all of the components of your character that you'll work on.
  p You can start anywhere and jump around as you please.
  div.m-bottom
  div.collection
    router-link.collection-item(to="/select/name") Name
    router-link.collection-item(to="/select/tags") Tags
    router-link.collection-item(to="/select/cues") Cues
    router-link.collection-item(to="/select/background") Background
    router-link.collection-item(to="/select/metatype") Metatype
    router-link.collection-item(to="/select/awakened-or-emerged") Awakened / Emerged
    router-link.collection-item(to="/select/attributes") Attributes
    router-link.collection-item(to="/select/skills") Skills
    router-link.collection-item(to="/select/shadow-amps") Shadow Amps
    router-link.collection-item(to="/select/qualities") Qualities
    router-link.collection-item(to="/select/armor") Armor
    router-link.collection-item(to="/select/weapons") Weapons
    router-link.collection-item(to="/select/items") Items
    router-link.collection-item(to="/select/contacts") Contacts
</template>
