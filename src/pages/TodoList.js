import './todoList.css'
import {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo, editTodo, toggleTodo, removeTodo} from '../actions/todoActions' 

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      editIndex: -1
    }
  }

  onAddToList = () => {
    if (this.state.editIndex === -1) {
      const newItem = {
        text: this.state.value,
        done: false
      }
      this.setState({value: ''})
      this.props.addTodo(newItem);
    } else {
      const newItem = { 
        ...this.props.list[this.state.editIndex],
        text: this.state.value
      }
      
      this.props.editTodo(newItem, this.state.editIndex)
      this.setState({
        value: '',
        editIndex: -1
      })
    }
   
  }

  markToggle = (index) => {
    this.props.toggleTodo(!this.props.list[index].done, index)
  }

  delItem = (index) => {
    this.props.removeTodo(index)
  }

  editItem = (index) => {
    this.setState({value: this.props.list[index].text, editIndex: index})
  }

  render() {
    console.log(this.props.list)
    return (
      <div className="main-block">
        <div className="todo-block">
        <h2>To do:</h2>
        {this.props.list.map((listItem, i) => {

          return (
            <div key={`${listItem.text}-${i}`} className="row">
              <span style={{textDecoration: listItem.done ? 'line-through' : 'none'}}>{listItem.text}</span>
              <div className='all-btn'>
                <button className="btn-done" onClick={() => this.markToggle(i)}>&#10003;</button>
                <button className="btn-del" onClick={() => this.delItem(i)}>&times;</button>
                <button className="btn-edit" onClick={() => this.editItem(i)}>Edit</button>
              </div>
            </div>
          );
        })}

        <div className="todo-task-save">
          <label>Task</label>
          <input value={this.state.value} onChange={(event) => {
            this.setState({value: event.target.value})
          }}/>
          <button className="btn-save" onClick={this.onAddToList}>Save</button>
        </div>
      </div>
      </div>
      
    );
  }
  
}
export default connect(
  state => {
    return {
      list: state.todo.list
    }
  },
  {
    addTodo,
    editTodo,
    removeTodo,
    toggleTodo
  }
)(TodoList) ;
