import { combineReducers } from 'redux'
import reducerMeat from './reducerMeat'
import reducerVegetable from './reducerVegetable'


// 2つのreducerを結合する
const rootReducer = combineReducers({
    reducerMeat,
    reducerVegetable
})

export default rootReducer