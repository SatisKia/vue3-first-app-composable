<template>
  <div>
    <todo-input
      v-on:add="addTodo"
    />
    <todo-label
      v-for="todo in sortedTodo"
      v-bind:key="todo.id"
      v-bind:todo="todo"
      v-on:done="doneTodo"
      v-on:remove="removeTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Todo } from '@/types/todo'
import TodoInput from '@/components/TodoInput.vue'
import TodoLabel from '@/components/TodoLabel.vue'
import useData from '@/composables/data'
import useAction from '@/composables/action'
import useSort from '@/composables/sort'

interface State {
  todoList: Todo[];
}

export default defineComponent({
  components: {
    TodoInput,
    TodoLabel
  },
  setup () {
    // data
    const state = reactive<State>({
      todoList: [] as Todo[]
    })
    const { todoList } = toRefs(state)

    // methods
    const { loadData } = useData(todoList)
    const { addTodo, removeTodo, doneTodo } = useAction(todoList)

    // computed
    const { sortedTodo } = useSort(todoList)

    // mounted
    onMounted(async () => {
      // データの読み込み
      await loadData()
    })

    return {
      addTodo,
      removeTodo,
      doneTodo,
      sortedTodo
    }
  }
})
</script>
