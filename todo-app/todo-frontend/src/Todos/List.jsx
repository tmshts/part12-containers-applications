// eslint-disable-next-line no-unused-vars
import React from 'react'

import PropTypes from 'prop-types'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => {
                              const doneInfo = (
                                  <div >
                                    <span>This todo is done</span>
                                    <span>
                                      <button onClick={onClickDelete(todo)}> Delete </button>
                                    </span>
                                  </div>
                              )

                              const notDoneInfo = (
                                  <div>
                                    <span>
                                      This todo is not done
                                    </span>
                                    <span>
                                      <button onClick={onClickDelete(todo)}> Delete </button>
                                      <button onClick={onClickComplete(todo)}> Set as done </button>
                                    </span>
                                  </div>
                              )

                              return (
                                   <div key={todo._id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
                                      <span>
                                        {todo.text} 
                                      </span>
                                      {todo.done ? doneInfo : notDoneInfo}
                                  </div>                               
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