<template>
  <div>
    <input type="text" class="input" v-model="state.text" />
    <div>
      <input type="radio" id="color1" name="color" value="#80ffff" checked />
      <label for="color1">シアン</label>
      <input type="radio" id="color2" name="color" value="#ff80ff" />
      <label for="color2">マゼンタ</label>
      <input type="radio" id="color3" name="color" value="#ffff80" />
      <label for="color3">イエロー</label>
    </div>
    <div v-if="!state.isError">
      <button style="width:100%" v-on:click="onAdd" v-bind:disabled="(state.text.length == 0) || state.isError">登録</button>
    </div>
    <div v-if="state.isError">
      <span class="error">入力できる文字は100文字までです</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'

interface State {
  text: string;
  isError: boolean;
}

export default defineComponent({
  emits: ['add'],
  setup (_, context) {
    const state = reactive<State>({
      text: '',
      isError: false
    })

    const onAdd = () => {
      const input1 = document.getElementById('color1') as HTMLInputElement
      const input2 = document.getElementById('color2') as HTMLInputElement
      const input3 = document.getElementById('color3') as HTMLInputElement
      let color = input1.value
      if (input2.checked) {
        color = input2.value
      } else if (input3.checked) {
        color = input3.value
      }
      context.emit('add', state.text, color)
      state.text = ''
    }

    watchEffect(() => {
      if (state.text.length > 100) {
        state.isError = true
      } else {
        state.isError = false
      }
    })

    return {
      state,
      onAdd
    }
  }
})
</script>

<style scoped>
.input {
  width: 100%;
  border: 0;
  border-bottom: 1px solid #808080;
  padding: 4px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.input:focus {
  outline: none;
}
.error {
  color: #ff0000;
}
</style>
