import React, {Component } from 'react';
import TodoListUI from './TodoListUi'
import axios from 'axios'
import { changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreatores'
import store from './store/index'
class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state=store.getState();
        this.changeInput=this.changeInput.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.addItem=this.addItem.bind(this)
        store.subscribe(this.storeChange)//订阅redux的状态
    }
    changeInput(e){
        const action=changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addItem(){
        const action=addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
       const action=deleteItemAction(index)
        store.dispatch(action)
    }
    storeChange(){
        console.log(store.getState())
        this.setState(store.getState(),()=>{
            console.log(this.state)
        })
    }
    // 生命周期
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const action=getListAction(res);
            store.dispatch(action)
        })
    }
    render() { 
        return ( 
            <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInput={this.changeInput}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            />
         );
    }
}
 
export default TodoList;