import Vue from 'vue'
import Vuex from 'vuex'

import {rules} from './gameData'


Vue.use(Vuex)

const state = {
  gameLevel: 'street',
  attributePointsSpent: 0,
  skillPointsSpent: 0,
  shadowAmpPointsSpent: 0,
  rangedWeaponsPurchased: 0,
  meleeWeaponsPurchased: 0,
  armorPurchased: false,
  itemsPurchased: 0,
  contactsPurchased: 0
}

const mutations = {
  // TODO
}

const getters = {
  remainingAttributePoints(state) {
    return rules.allowedAttributePoints(state.gameLevel) - state.attributePointsSpent
  },

  remainingSkillPoints(state) {
    return rules.allowedSkillPoints(state.gameLevel) - state.skillPointsSpent
  },

  remainingShadowAmpPoints(state) {
    return rules.allowedShadowAmps(state.gameLevel) - state.shadowAmpPointsSpent
  },

  remainingWeapons(state) {
    const totals = rules.allowedWeapons(state.gameLevel)
    const ranged = totals.ranged - state.rangedWeaponsPurchased
    const melee = totals.melee - state.meleeWeaponsPurchased
    const either = totals.either - state.rangedWeaponsPurchased - state.meleeWeaponsPurchased
    return { ranged, melee, either }
  },

  remainingArmor(state) {
    return rules.allowedArmor && !state.armorPurchased
  },

  remainingItems(state) {
    return rules.allowedItems(state.gameLevel) - state.itemsPurchased
  },

  remainingContacts(state) {
    return rules.allowedContacts(state.gameLevel) - state.contactsPurchased
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
