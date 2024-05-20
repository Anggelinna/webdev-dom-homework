import { format } from "date-fns";
//import { formatDateToRu, formatDateToUs } from "date-fns" 
import { loginUser, setToken, setUser, token } from "./api.js";
import { fetchPromiseGet } from "./main.js";


const tasksHtml = tasks
  .map((task) => {
		// Вызываем функцию format из date-fns, первый параметр — это дата, которую
		// хотим отформатировать, второй параметр — это строка: к какому формату
		// желаем привести дату. Обратите внимание MM — это номер месяца,
		// mm — это минуты
    const createDate = format(new Date(task.created_at), 'dd/MM/yyyy hh:mm');
    return `
        <li class="task">
          <p class="task-text">
            ${task.text} (Создал: ${task.user?.name ?? "Неизвестно"})
            <button data-id="${
              task.id
            }" class="button delete-button">Удалить</button>
          </p>
          <p><i>Задача создана: ${createDate}</i></p>
        </li>`;
  })
  .join("");

  const now = new Date();

  format(now, "dd/MM/yyyy hh:mm"); // 26/03/2023 10:33
  format(now, "MM-dd-yyyy hh:mm"); // 03-26-2023 10:33
  format(now, "dd.MM.yyyy hh:mm:ss"); // 26.03.2023 10:33:41

  
// Приводим дату к формату ДД/ММ/ГГГГ ЧЧ:ММ
//export const formatDateToRu = (date) => {
//    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
//  };
  // Приводим дату к формату ММ-ДД-ГГГГ ЧЧ:ММ
//  export const formatDateToUs = (date) => {
//    return `${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
//  };