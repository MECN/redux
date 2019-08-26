import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
const defaultState={
    inputValue:'DO something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};//默认数据
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        console.log("newState")
        console.log(newState)
        return newState;
    }
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state));//深度拷贝state
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }
    if(action.type===GET_LIST){
        let newState=JSON.parse(JSON.stringify(state));
        console.log(action.value)
        newState.list=[...action.value.data.data.list];
        return newState;
    }
    return state
}