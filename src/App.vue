<template>
  <div id="app">
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addNewTodo" placeholder="Add a new task" />
    <button @click="addNewTodo">Add</button>
    <p>Incomplete tasks: {{ incompleteTodos }}</p>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(index)" />
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.task }}</span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from './stores/countStore'

const todoStore = useTodoStore()

const newTodo = ref('')

function addNewTodo() {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
}

const incompleteTodos = computed(() => {
  return todoStore.incompleteTodos
})

const { todos, removeTodo, toggleTodo } = todoStore
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=OCR+A+Extended&display=swap');

#app {
  font-family: 'unispace', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 60px auto;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.5);
}
body {
  background-image: url('https://wallpapercave.com/wp/wp7651657.png');
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'unispace', monospace;
}
input, button {
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 0.5em;
  border-radius: 20px;
  border: none;
}

button {
  cursor: pointer;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
}

li {
  list-style-type: none;
  margin: 0.5em 0;
  padding: 0.5em;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
