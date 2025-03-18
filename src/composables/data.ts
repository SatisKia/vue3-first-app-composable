import { Ref } from 'vue'
import { Todo } from '@/types/todo'
import MyCookie from '@/plugins/Cookie'

export default (todoList: Ref<Todo[]>) => {
  const loadData = async () => {
    console.log('loadData')

    // データの読み込み処理
    todoList.value = [] as Todo[]
    const cookie: MyCookie = new MyCookie()
    for (let i = 0; ; i++) {
      const id = cookie.getValue('id' + i, '')
      if (id.length === 0) {
        break
      }
      const done = cookie.getBool('done' + i, false)
      const date = new Date(cookie.getNumber('date' + i, 0))
      const text = cookie.getValue('text' + i, '')
      const color = cookie.getValue('color' + i, '')
      todoList.value.push({
        id: id,
        done: done,
        date: date,
        text: text,
        color: color
      })
    }
  }

  const saveData = () => {
    console.log('saveData')

    // データの書き込み処理
    const cookie: MyCookie = new MyCookie()
    let i = 0
    for (; i < todoList.value.length; i++) {
      const todo = todoList.value[i]
      cookie.setValue('id' + i, todo.id)
      cookie.setBool('done' + i, todo.done)
      cookie.setNumber('date' + i, todo.date.getTime())
      cookie.setValue('text' + i, todo.text)
      cookie.setValue('color' + i, todo.color)
    }
    cookie.setValue('id' + i, '')
  }

  return {
    loadData,
    saveData
  }
}
