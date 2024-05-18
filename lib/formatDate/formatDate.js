import { formatDateToRu, formatDateToUs } from "date-fns" 
import { loginUser, setToken, setUser, token } from "./api.js";
import { fetchPromiseGet } from "./main.js";
//import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.

const tasksHtml = tasks
    .map((task) => {
      return `
          <li class="task">
            <p class="task-text">
              ${task.text} (Создал: ${task.user?.name ?? "Неизвестно"})
              <button data-id="${
                task.id
              }" class="button delete-button">Удалить</button>
            </p>
            <p><i>Задача создана: ${formatDateToRu(new Date(task.created_at))}</i></p>
          </li>`;
    })
    .join("");

// Приводим дату к формату ДД/ММ/ГГГГ ЧЧ:ММ
export const formatDateToRu = (date) => {
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };
  
  // Приводим дату к формату ММ-ДД-ГГГГ ЧЧ:ММ
  export const formatDateToUs = (date) => {
    return `${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };