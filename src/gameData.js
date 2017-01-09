const allowedAttributePoints = (gameLevel) => {
  switch (gameLevel) {
    case 'gang':
      return 12
    case 'street':
      return 16
    case 'prime':
      return 20
    default:
      return -1
  }
}

const allowedSkillPoints = (gameLevel) => {
  switch (gameLevel) {
    case 'gang':
      return 10
    case 'street':
      return 12
    case 'prime':
      return 14
    default:
      return -1
  }
}

const allowedShadowAmps = (gameLevel) => {
  switch (gameLevel) {
    case 'gang':
      return 6
    case 'street':
      return 10
    case 'prime':
      return 14
    default:
      return -1
  }
}

const allowedWeapons = (gameLevel) => {
  let ranged = 0
  let melee = 0
  let either = 0
  switch (gameLevel) {
    case 'gang':
      either = 1
      break
    case 'street':
      ranged = 1
      melee = 1
      break
    case 'prime':
      either = 3
      break
  }
  return { ranged, melee, either }
}

const allowedArmor = (gameLevel) => true

const allowedItems = (gameLevel) => {
  switch (gameLevel) {
    case 'gang':
      return 3
    case 'street':
      return 4
    case 'prime':
      return 5
    default:
      return -1
  }
}

const allowedContacts = (gameLevel) => {
  switch (gameLevel) {
    case 'gang':
      return 1
    case 'street':
      return 2
    case 'prime':
      return 3
    default:
      return -1
  }
}

export const rules = {
  allowedAttributePoints,
  allowedSkillPoints,
  allowedShadowAmps,
  allowedWeapons,
  allowedArmor,
  allowedItems,
  allowedContacts
}
