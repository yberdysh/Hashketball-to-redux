import {createStore} from 'redux';
import reducer from './reducer'

const store = createStore(reducer)

export default store
// export {selectPlayer} from './actions'
// in a different file => import {selectPLayer } from './store'
// export * from './actions'
