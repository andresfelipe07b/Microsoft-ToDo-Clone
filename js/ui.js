// ui.js
// Funciones para renderizar tareas, listas y manipular el DOM
import { formatDate } from './storage.js';

/** Renderiza la lista de tareas pendientes y completadas en el DOM */
export function renderTasks(tasks, currentList, completedOpen) {
  const list = document.getElementById('task-list');
  const completedList = document.getElementById('completed-list');
  const completedCount = document.getElementById('completed-count');
  
  // Limpiar listas
  list.innerHTML = '';
  completedList.innerHTML = '';

  // Filtrar tareas por lista actual
  const filtered = tasks.filter(t => t.list === currentList);
  const pending = filtered.filter(t => !t.completed);
  const completed = filtered.filter(t => t.completed);

  // Renderizar tareas pendientes
  pending.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <input type="checkbox" class="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''} />
      <div class="task-main">
        <span class="task-text">${task.text}</span>
        <span class="task-date">${task.list} • ${formatDate(task.createdAt)}</span>
      </div>
      <button class="delete-btn" data-id="${task.id}" title="Eliminar tarea"><i class="fa-solid fa-trash"></i></button>
    `;
    list.appendChild(li);
  });

  // Renderizar tareas completadas
  completed.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item completed';
    li.innerHTML = `
      <input type="checkbox" class="checkbox" data-id="${task.id}" checked />
      <div class="task-main">
        <span class="task-text">${task.text}</span>
        <span class="task-date">${task.list} • ${formatDate(task.createdAt)}</span>
      </div>
      <button class="delete-btn" data-id="${task.id}" title="Eliminar tarea"><i class="fa-solid fa-trash"></i></button>
    `;
    completedList.appendChild(li);
  });

  // Actualizar contador y estado de completadas
  completedCount.textContent = completed.length;
  completedList.classList.toggle('open', completedOpen);
  
  // Actualizar icono de toggle
  const toggleIcon = document.querySelector('#toggle-completed i');
  if (toggleIcon) {
    toggleIcon.className = 'fa-solid ' + (completedOpen ? 'fa-chevron-up' : 'fa-chevron-down');
  }

  // Actualizar estado activo del sidebar
  document.querySelectorAll('.list-item').forEach(li => {
    li.classList.toggle('active', li.dataset.list === currentList);
  });
  
  // Actualizar título y select
  const mainTitle = document.getElementById('main-title');
  const listSelect = document.getElementById('list-select');
  
  if (mainTitle) mainTitle.textContent = currentList;
  if (listSelect) listSelect.value = currentList;
}

/** Actualiza la fecha de hoy en el header */
export function renderTodayDate(formatTodayFn) {
  const todayDateElement = document.getElementById('today-date');
  if (todayDateElement && formatTodayFn) {
    todayDateElement.textContent = formatTodayFn();
  }
} 