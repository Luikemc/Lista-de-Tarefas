import './Organizador.css';
import React from 'react';


class Organizador extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
    }
  
    render() {
        return (
          <div className='box'>
            <h3>LISTA DE TAREFAS</h3>
    
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">O que precisa ser feito?</label>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>Adicionar #{this.state.items.length + 1}</button>
            </form>
            <TodoList items={this.state.items} onRemove={this.handleRemove} />
          </div>
        );
      }
    
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  
    handleRemove(id) {
      this.setState(state => ({
        items: state.items.filter(item => item.id !== id)
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul className="todo-list">
          {this.props.items.map(item => (
            <li key={item.id}>
              {item.text}
              <button className="remove-btn" onClick={() => this.props.onRemove(item.id)}>x</button>
            </li>
          ))}
        </ul>
      );
    }
  }
  
  export default Organizador;
  