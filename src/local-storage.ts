export const getUserData = (key: unknown):string => {
  if (typeof(key) == 'string'){   
    return localStorage.getItem(`user.${key}`)
  } else { return ''}
  
}

export const getFavoritesAmount = ():unknown => {
  const numberFavirut = +localStorage.getItem('favoritesAmount')
  if (typeof(numberFavirut)=='number'){
    return numberFavirut
  } else {
    return 0
  }
  
}
