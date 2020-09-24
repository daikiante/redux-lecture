import { SELL_MEAT } from './actionTypes'

// reducerはステートとアクションを引数に取る
// stateにはオブジェクトが入るので空の[]を用意している
const reducerMeat = (state=[], action) => {

    // switch文を使ってactionに応じて分岐させる
    switch(action.type) {
        case SELL_MEAT: return {
            ...state,
            numOfMeat: state.numOfMeat - 1
        }
        default: return state
    }
}

export default reducerMeat
