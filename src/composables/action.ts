import { Ref } from 'vue'
import { Todo } from '@/types/todo'
import useData from '@/composables/data'

export default (todoList: Ref<Todo[]>) => {
  const { saveData } = useData(todoList)

  const addTodo = (text: string, color: string) => {
    todoList.value = [...todoList.value, {
      id: (new Date()).getTime().toString(),
      done: false,
      date: new Date(),
      text: text,
      color: color
    }]
    saveData()
  }

  const removeTodo = (id: string) => {
    todoList.value = todoList.value.filter((todo: Todo) => todo.id !== id)
    saveData()
  }

  const doneTodo = (id: string) => {
    const newTodoList = todoList.value.slice()
    const todo = newTodoList.find((todo: Todo) => todo.id === id)
    if (todo) {
      todo.done = !todo.done
      todoList.value = newTodoList
      saveData()
    }
  }

  return {
    addTodo,
    removeTodo,
    doneTodo
  }
}
