import { computed, Ref } from 'vue'
import { Todo } from '@/types/todo'

export default (todoList: Ref<Todo[]>) => {
  const sortedTodo = computed(() => {
    return todoList.value.sort((a, b) => {
      return b.date.getTime() - a.date.getTime()
    })
  })

  return {
    sortedTodo
  }
}
