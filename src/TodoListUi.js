import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List } from 'antd'
// class TodoListUi extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() { 
//         return ( 
//         <div>
//             <Input placeholder={this.props.inputValue} value={this.props.inputValue} style={{ width:'250px',marginRight:'10px'}} onChange={this.props.changeInput}/>
//             <Button onClick={this.props.addItem}>增加</Button>
//             <div style={{margin:'10px',width:'300px'}}>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index)=>(<List.Item onClick={this.props.deleteItem.bind(this,index)}>{item}</List.Item>)}
//                 ></List>
//             </div>
//         </div> 
//         );
//     }
// }
/* 无状态组件 就是一个函数 返回JSX */
const TodoListUi=(props)=>{
    return (
        <div>
            <Input placeholder={props.inputValue} value={props.inputValue} style={{ width:'250px',marginRight:'10px'}} onChange={props.changeInput}/>
            <Button onClick={props.addItem}>增加</Button>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>(<List.Item onClick={props.deleteItem.bind(this,index)}>{item}</List.Item>)}
                ></List>
            </div>
        </div> 
    )
}
 
export default TodoListUi;