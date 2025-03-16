import { Ref } from 'vue'
import { Todo } from '@/types/todo'

export default (todoList: Ref<Todo[]>) => {
  const loadData = async () => {
    // データの読み込み処理
    todoList.value = [] as Todo[]
    console.log('loadData')
  }

  const saveData = () => {
    // データの書き込み処理
    console.log('saveData')
  }

  return {
    loadData,
    saveData
  }
}
