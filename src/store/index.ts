import {createStore, combineReducers} from 'redux';

const modules: any = {}
const modulesFiles = require.context('./modules', true, /\.ts$/)

modulesFiles.keys().forEach((modulePath: string) => {
  const moduleName: string = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath).default
  modules[moduleName] = value
}, {})
let store = combineReducers(modules);

export default createStore(store);