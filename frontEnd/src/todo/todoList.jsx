import React from 'react'
import IconButton from '../template/iconButton'
import If from '../template/if'

export default props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td>
          {todo.description}
        </td>
        <td>
          <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} />
          <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th> Descrição </th>
          <th> Ações </th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
