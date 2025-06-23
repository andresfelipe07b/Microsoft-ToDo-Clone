// events.js
// Listeners y lógica de interacción de la app
import { getTasks, saveTasks, formatToday } from './storage.js';
import { renderTasks, renderTodayDate } from './ui.js';

// Estado global de la aplicación
let tasks = getTasks();
let completedOpen = false;
let currentList = localStorage.getItem('todo-current-list') || 'Mi día';

/** Inicializa todos los listeners y renderiza la app */
export function initApp() {
  // Inicializar la fecha de hoy
  renderTodayDate(formatToday);
  
  // Configurar el estado inicial
  document.getElementById('main-title').textContent = currentList;
  document.getElementById('list-select').value = currentList;
  
  // Renderizar tareas iniciales
  renderTasks(tasks, currentList, completedOpen);

  // Configurar todos los event listeners
  setupEventListeners();
}

function setupEventListeners() {
  // Agregar tarea
  document.getElementById('task-form').addEventListener('submit', handleAddTask);

  // Completar o eliminar tarea (pendientes)
  document.getElementById('task-list').addEventListener('click', handleTaskAction);

  // Completar o eliminar tarea (completadas)
  document.getElementById('completed-list').addEventListener('click', handleTaskAction);

  // Mostrar/ocultar completadas
  document.getElementById('toggle-completed').addEventListener('click', handleToggleCompleted);

  // Menú hamburguesa
  document.getElementById('menu-btn').addEventListener('click', handleMenuToggle);
  document.getElementById('sidebar-overlay').addEventListener('click', handleMenuClose);

  // Cambiar de lista desde el sidebar
  document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', () => handleListChange(item.dataset.list));
  });

  // Cambiar lista desde el select
  document.getElementById('list-select').addEventListener('change', (e) => {
    handleListChange(e.target.value);
  });
}

function handleAddTask(e) {
  e.preventDefault();
  const input = document.getElementById('task-input');
  const select = document.getElementById('list-select');
  const text = input.value.trim();
  const listValue = select.value;
  
  if (!text) return;
  
  const newTask = {
    id: Date.now(),
    text,
    completed: false,
    createdAt: new Date().toISOString(),
    list: listValue
  };
  
  tasks.push(newTask);
  saveTasks(tasks);
  input.value = '';
  
  // Actualizar lista actual si es diferente
  if (currentList !== listValue) {
    currentList = listValue;
    localStorage.setItem('todo-current-list', currentList);
  }
  
  renderTasks(tasks, currentList, completedOpen);
}

function handleTaskAction(e) {
  if (e.target.classList.contains('checkbox')) {
    const id = Number(e.target.dataset.id);
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTasks(tasks);
    renderTasks(tasks, currentList, completedOpen);
  } else if (e.target.closest('.delete-btn')) {
    const id = Number(e.target.closest('.delete-btn').dataset.id);
    tasks = tasks.filter(t => t.id !== id);
    saveTasks(tasks);
    renderTasks(tasks, currentList, completedOpen);
  }
}

function handleToggleCompleted() {
  completedOpen = !completedOpen;
  renderTasks(tasks, currentList, completedOpen);
}

function handleMenuToggle() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}

function handleMenuClose() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').style.display = 'none';
}

function handleListChange(newList) {
  currentList = newList;
  localStorage.setItem('todo-current-list', currentList);
  renderTasks(tasks, currentList, completedOpen);
  
  // Cierra el sidebar en móvil
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').style.display = 'none';
} 