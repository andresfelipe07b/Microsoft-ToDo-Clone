// storage.js
// Funciones para manejar tareas en localStorage y utilidades de fecha

/** Obtiene todas las tareas almacenadas en localStorage */
export function getTasks() {
  return JSON.parse(localStorage.getItem('todo-tasks') || '[]');
}

/** Guarda el array de tareas en localStorage */
export function saveTasks(tasks) {
  localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

/** Formatea una fecha a texto largo en español */
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Devuelve la fecha de hoy en formato largo (ej: lunes, 23 de junio) */
export function formatToday() {
  const d = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return d.toLocaleDateString('es-ES', options);
}

/** Listas/etiquetas predefinidas */
export const LISTS = [
  { name: 'Mi día', icon: 'fa-sun' },
  { name: 'Personal', icon: 'fa-user' },
  { name: 'Trabajo', icon: 'fa-briefcase' },
  { name: 'Compras', icon: 'fa-cart-shopping' },
  { name: 'Ideas', icon: 'fa-lightbulb' }
]; 