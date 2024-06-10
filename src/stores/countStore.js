import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  function addTodo(task) {
    todos.value.push({ task, completed: false })
  }

  function removeTodo(index) {
    todos.value.splice(index, 1)
  }

  function toggleTodo(index) {
    todos.value[index].completed = !todos.value[index].completed
  }

  // Getter untuk menghitung jumlah tugas yang belum selesai
  const incompleteTodos = computed(() => {
    return todos.value.filter(todo => !todo.completed).length
  })

  return { todos, addTodo, removeTodo, toggleTodo, incompleteTodos }
})
