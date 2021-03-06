import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.refresh()
    this.state = {
      description: '',
      list: []
    }
  }
  refresh () {
    axios.get(`${URL}?sort=-createdAt`)
         .then(resp => this.setState({...this.state, description: '', list: resp.data}))
  }

  handleAdd () {
    const description = this.state.description
    axios.post(URL, {description})
         .then(resp => this.refresh())
  }

  handleChange (event) {
    this.setState({...this.state, description: event.target.value})
  }

  handleRemove (todo) {
    axios.delete(`${URL}/${todo._id}`)
         .then(resp => this.refresh())
  }

  handleMarkAsDone (todo) {
    axios.put(`${URL}/${todo._id}`)
         .then(resp => this.refresh())
  }

  render () {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} />
      </div>
    )
  }
}
