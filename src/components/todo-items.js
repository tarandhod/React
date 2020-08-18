import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';


class TodoItem extends React.Component {
  render() {
    return <li>
      {this.props.todo.content}
      <button onClick={this.props.onCompleted}>
        {this.props.todo.done ? "Undone" : "Done" }
      </button>
      <button class="button1" onClick={this.props.onDelete}>X</button>
    </li>
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onCompleted: PropTypes.func,
  onDelete: PropTypes.func
}

export default TodoItem