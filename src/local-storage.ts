export const getUserData = (key: unknown):string|null => {
  if (typeof(key) == 'string'){   
    return localStorage.getItem(`user.${key}`)
  } else { return ''}
  
}

export const getFavoritesAmount = ():unknown => {
  const numberFavirut = localStorage.getItem('favoritesAmount')
  if (numberFavirut != null){
    return numberFavirut
  } else {
    return 0
  }
  
}
