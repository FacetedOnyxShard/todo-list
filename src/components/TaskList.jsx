import React from 'react'

function TaskListTitle({ content }) {
  return (
    <>
      <p style={{ color: "black", margin: 0, padding: 0}}>
        {content}
      </p>
      <hr></hr>
    </>
  )
}

function Task({ item }) {
  const TaskList = [
    {id: 1, text: "Первое задание", completed: false},
    {id: 2, text: "Второе задание", completed: true},
    {id: 3, text: "Третье задание", completed: false},
  ]

  const TaskContainerStyle = {
    color: 'black',
  }

  return (
    <p style={TaskContainerStyle}>
      {item.id} - {item.text}
      <input type="checkbox" checked={item.completed}></input>
    </p>
  )
}

function TaskList() {
  const TaskList = [
    {id: 1, text: "Первое задание", completed: false},
    {id: 2, text: "Второе задание", completed: true},
    {id: 3, text: "Третье задание", completed: false},
  ]

  const TaskListContainerStyle = {
    backgroundColor: "white",
    padding: '30px',
    borderRadius: '10px',
    marginTop: '10px',
  }

  return (
    <>
      <div style={TaskListContainerStyle}>
      <TaskListTitle content="Список заданий нашего todo-list:"/>
      {
        TaskList.map(item => {
          return (
            <Task item={item}/>
          )
        })
      }
      </div>
    </>
  )
}

export default TaskList
