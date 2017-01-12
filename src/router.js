import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import Landing from './pages/Landing'
import SelectGameLevel from './pages/SelectGameLevel'
import MainMenu from './pages/MainMenu'
import SelectName from './pages/select/Name'
import SelectTags from './pages/select/Tags'
import SelectMetatype from './pages/select/Metatype'
import SelectAwakenedOrEmerged from './pages/select/AwakenedOrEmerged'
import SelectAttributes from './pages/select/Attributes'
import SelectSkills from './pages/select/Skills'
import SelectShadowAmps from './pages/select/ShadowAmps'
import SelectQualities from './pages/select/Qualities'
import SelectArmor from './pages/select/Armor'
import SelectWeapons from './pages/select/Weapons'
import SelectItems from './pages/select/Items'
import SelectContacts from './pages/select/Contacts'
import SelectCues from './pages/select/Cues'
import SelectBackground from './pages/select/Background'
import ContinueCharacter from './pages/ContinueCharacter'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Landing },
  { path: '/select-game-level', component: SelectGameLevel },
  { path: '/main-menu', component: MainMenu },
  { path: '/continue', component: ContinueCharacter },
  { path: '/select/name', component: SelectName },
  { path: '/select/tags', component: SelectTags },
  { path: '/select/metatype', component: SelectMetatype },
  { path: '/select/awakened-or-emerged', component: SelectAwakenedOrEmerged },
  { path: '/select/attributes', component: SelectAttributes },
  { path: '/select/skills', component: SelectSkills },
  { path: '/select/shadow-amps', component: SelectShadowAmps },
  { path: '/select/qualities', component: SelectQualities },
  { path: '/select/armor', component: SelectArmor },
  { path: '/select/weapons', component: SelectWeapons },
  { path: '/select/items', component: SelectItems },
  { path: '/select/contacts', component: SelectContacts },
  { path: '/select/cues', component: SelectCues },
  { path: '/select/background', component: SelectBackground }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (store.getters.gameLevel === '') {
    if (to.path !== '/' && to.path !== '/select-game-level') {
      next('/')
    }
  }
  next()
})

export default router
