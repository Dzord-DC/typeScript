import { renderSearchFormBlock, search, searchFormData } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {getFavoritesAmount, getUserData} from './local-storage.js'
import { getTodosByCount } from './apiTodos.js'


const userData = { name: 'Ivan', avatar: './img/avatar.png' }
localStorage.setItem('user.name', userData.name)
localStorage.setItem('user.avatar', userData.avatar)
localStorage.setItem('favoritesAmount', '0')

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData('name'), getUserData('avatar'), getFavoritesAmount())
  renderSearchFormBlock(null, null)
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
  searchFormData()
  getTodosByCount(30)
})
