// eslint-disable-next-line no-unused-vars
import React from 'react'

import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map(todo => {

                        return (
                            <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                        )
                        }
                ).reduce((acc, cur, index) => {

          return (
            
              [...acc,<div key={index}> < hr /></div>, cur]
            
          )
        }, [])
         
      }
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}

export default TodoList