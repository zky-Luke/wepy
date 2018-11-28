import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise' // 中间件
import rootReducer from './reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}