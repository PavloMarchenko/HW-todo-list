import './todoList.css'
import {Component} from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          text: 'qwe',
          done: true
        },
        {
          text: 'ewq',
          done: false
        }
      ],

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
      const listCopy = [...this.state.list, newItem]
      this.setState({list: listCopy, value: ''})
    } else {
      const listCopy = [...this.state.list];
      listCopy[this.state.editIndex] = { ...listCopy[this.state.editIndex], text: this.state.value};
      this.setState({ list: listCopy, value: '', editIndex: -1});
    }
   
  }

  markToggle = (index) => {
    const listCopy = [...this.state.list]
    listCopy[index] = {...listCopy[index], done: !listCopy[index].done}
    this.setState({list: listCopy})
  }

  delItem = (index) => {
    const listCopy = [...this.state.list]
    listCopy.splice(index, 1)
    this.setState({list: listCopy})
  }

  editItem = (index) => {
    this.setState({value: this.state.list[index].text, editIndex: index})
  }

  render() {
    
    return (
      <div className="main-block">
        <div className="todo-block">
        <h2>To do:</h2>
        {this.state.list.map((listItem, i) => {

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

export default TodoList;
