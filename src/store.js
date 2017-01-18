import Vue from 'vue'
import Vuex from 'vuex'

import {rules} from './gameData'


Vue.use(Vuex)

const state = {
  gameLevel: '',
  stats: {
    attributePointsSpent: 0,
    skillPointsSpent: 0,
    shadowAmpPointsSpent: 0,
    rangedWeaponsPurchased: 0,
    meleeWeaponsPurchased: 0,
    armorPurchased: false,
    itemsPurchased: 0,
    contactsPurchased: 0
  },
  description: {
    name: {
      personal: '',
      street: ''
    },
    tags: []
  },
  components: {
    metatype: '',
    magic: ''
  }
}

const mutations = {
  setLevel(state, level) {
    state.gameLevel = level
  },

  setPersonalName(state, name) {
    state.description.name.personal = name
  },

  setStreetName(state, name) {
    state.description.name.street = name
  },

  setTags(state, tags) {
    state.description.tags = tags
  },

  setMetaType(state, metatype) {
    state.components.metatype = metatype
  },

  setMagic(state, magic) {
    state.components.magic = magic
  }
}

const getters = {
  gameLevel(state) {
    return state.gameLevel
  },

  names(state) {
    return state.description.name
  },

  tags(state) {
    return state.description.tags
  },

  metatype(state) {
    return state.components.metatype
  },

  magic(state) {
    return state.components.magic
  },

  remainingAttributePoints(state) {
    return rules.allowedAttributePoints(state.gameLevel) - state.stats.attributePointsSpent
  },

  remainingSkillPoints(state) {
    return rules.allowedSkillPoints(state.gameLevel) - state.stats.skillPointsSpent
  },

  remainingShadowAmpPoints(state) {
    return rules.allowedShadowAmps(state.gameLevel) - state.stats.shadowAmpPointsSpent
  },

  remainingWeapons(state) {
    const totals = rules.allowedWeapons(state.gameLevel)
    const ranged = totals.ranged - state.stats.rangedWeaponsPurchased
    const melee = totals.melee - state.stats.meleeWeaponsPurchased
    const either = totals.either - state.stats.rangedWeaponsPurchased - state.stats.meleeWeaponsPurchased
    return { ranged, melee, either }
  },

  remainingArmor(state) {
    return rules.allowedArmor && !state.stats.armorPurchased
  },

  remainingItems(state) {
    return rules.allowedItems(state.gameLevel) - state.stats.itemsPurchased
  },

  remainingContacts(state) {
    return rules.allowedContacts(state.gameLevel) - state.stats.contactsPurchased
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
