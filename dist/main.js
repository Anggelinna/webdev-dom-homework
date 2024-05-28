/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPromise: () => (/* binding */ getPromise),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   postPromise: () => (/* binding */ postPromise),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   setUser: () => (/* binding */ setUser),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n\r\nconst loginURL = \"https://wedev-api.sky.pro/api/user/login\";\r\nconst host = \"https://wedev-api.sky.pro/api/v1/Angellina/comments\"\r\n\r\nlet token;\r\nlet user;\r\n\r\nconst setToken = (newToken) => {\r\n  token = newToken;\r\n} \r\n\r\nconst setUser = (newUser) => {\r\n  user = newUser;\r\n} \r\n\r\nfunction getPromise () {\r\n    return fetch(host, {\r\n        method: \"GET\",\r\n        headers: {\r\n            Authorization: `Bearer ${token}`,\r\n          },\r\n    })\r\n      .then((response) => {\r\n        if (response.status === 200) {\r\n            return response.json();\r\n        } else {\r\n            throw new Error(\"failed to get: \" + response.status);\r\n        }\r\n    })\r\n    .catch((error) => {\r\n        console.error(\"Произошла ошибка при выполнении GET-запроса:\", error);\r\n    });\r\n}\r\n      function postPromise({ text, name})  {\r\n    return fetch(host, {\r\n        method: \"POST\",\r\n        headers: {\r\n            Authorization: `Bearer ${token}`,\r\n          },\r\n        body: JSON.stringify({\r\n            name: name,\r\n            text: text,\r\n            forceError: true,\r\n            })\r\n   }) .then((response) => {\r\n\r\n    console.log(response);\r\n    \r\n    if (response.status === 201) {\r\n      return response.json();\r\n    }else if (response.status === 500) {\r\n      throw new Error(\"Сервер сломался\")\r\n    }else if (response.status === 400) {\r\n      throw new Error(\"Недопустимое количество символов\")\r\n    }\r\n    \r\n    }) \r\n   }\r\n\r\n   function loginUser ({ login, password }) {\r\n    return fetch(loginURL, {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n        login,\r\n        password,\r\n      }),\r\n    })\r\n    .then((response) => {\r\n      if (response.status === 201) {\r\n        return response.json();\r\n      }\r\n      if (response.status === 400) {\r\n        throw new Error(\"Неправильный логин или пароль\");\r\n      }\r\n    })\r\n    .catch((error) => {\r\n      alert(error);\r\n      console.warn(error);\r\n    });\r\n  }\n\n//# sourceURL=webpack://webdev-dom-homework/./api.js?");

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeComments: () => (/* binding */ normalizeComments),\n/* harmony export */   sanitize: () => (/* binding */ sanitize)\n/* harmony export */ });\nfunction sanitize(text) {\r\n    return text\r\n      .replaceAll(\"<\", \"&lt;\")\r\n      .replaceAll(\">\", \"&gt;\");\r\n  };\r\n\r\nfunction normalizeComments(comments) {\r\n    return comments.map((comment) => {\r\n        return {\r\n          name: comment.author.name,\r\n          time: new Date().toLocaleString(),\r\n          comment: comment.text,\r\n          likes: comment.likes,\r\n          isliked: false,\r\n        }\r\n      });\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./helpers.js?");

/***/ }),

/***/ "./listeners.js":
/*!**********************!*\
  !*** ./listeners.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addComment: () => (/* binding */ addComment),\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   answerComment: () => (/* binding */ answerComment)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./helpers.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//функция добвления лайка\r\nconst addLike = ({comments}) => {\r\n    const likesElements = document.querySelectorAll(\".like-button\");\r\n    for (const likesElement of likesElements) {    \r\n      likesElement.addEventListener('click', (event) => {\r\n        event.stopPropagation();\r\n\r\n        if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n            return\r\n          }\r\n        const index = likesElement.dataset.index;\r\n    \r\n        console.log(comments[index].likes);\r\n        if (comments[index].isLiked) {\r\n          comments[index].isLiked = false;\r\n          comments[index].likes--;\r\n          \r\n        } else {\r\n          comments[index].isLiked = true;\r\n          comments[index].likes++;\r\n        }\r\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({comments});\r\n    \r\n      });\r\n    }\r\n    };\r\n\r\nconst addComment = () => {\r\n    const nameInputElement = document.querySelector(\".add-form-name\");\r\n    const textInputElement = document.querySelector(\".add-form-text\");\r\n    const buttonElement = document.querySelector(\".add-form-button\");\r\n    \r\n    textInputElement.addEventListener(\"keydown\", function (event) {\r\n      if (event.key === \"Enter\") {\r\n        event.preventDefault();\r\n        buttonElement.click();\r\n      }\r\n    });\r\n    //удаление последнего комментария\r\n    \r\n    const buttonElementDel = document.querySelector(\".delete-form-button\");\r\n    \r\n    if (buttonElementDel) {\r\n      buttonElementDel.addEventListener(\"click\", () => {\r\n        _main_js__WEBPACK_IMPORTED_MODULE_3__.comments.pop();\r\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({comments: _main_js__WEBPACK_IMPORTED_MODULE_3__.comments, addLike, answerComment});\r\n      });\r\n    } else {\r\n      console.error(\"Элемент не найден в DOM\");\r\n    }\r\n\r\n    buttonElement.addEventListener(\"click\", () => {\r\n      nameInputElement.classList.remove(\"error\");\r\n      textInputElement.classList.remove(\"error\");\r\n        if (nameInputElement.value.trim() === \"\" || textInputElement.value.trim() === \"\") {\r\n          nameInputElement.classList.add(\"error\");\r\n          textInputElement.classList.add(\"error\");\r\n          return;\r\n        }\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postPromise)({\r\n            text: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.sanitize)(textInputElement.value),\r\n            name: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.sanitize)(nameInputElement.value)\r\n        \r\n        }).then(() => {\r\n        \r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPromise)()\r\n        .then((responseData) => {\r\n            // console.log(responseData);\r\n            const appComments = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.normalizeComments)(responseData.comments);\r\n              \r\n            // получили данные и рендерим их в приложении\r\n            (0,_main_js__WEBPACK_IMPORTED_MODULE_3__.setComments)(appComments);\r\n            (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({comments: _main_js__WEBPACK_IMPORTED_MODULE_3__.comments, addLike, answerComment});\r\n            \r\n          })\r\n        \r\n        })\r\n        .then(() => {\r\n        buttonElement.disabled = false;\r\n        buttonElement.textContent = 'Написать';\r\n        nameInputElement.value = \"\";\r\n        textInputElement.value = \"\";\r\n        })\r\n        .catch((error) => {\r\n        buttonElement.disabled = false;\r\n        buttonElement.textContent = 'Написать';\r\n        \r\n        if (error.message === \"Сервер сломался\") {\r\n          alert(\"Сервер сломался, попробуйте снова\")\r\n        }\r\n        if (error.message === \"Недопустимое количество символов\") {\r\n          alert(\"Имя и комментарий должны быть не короче 3-х символов\")\r\n        }\r\n        if (error.message === 'Failed to fetch') {\r\n          alert('Интернет не работает, попробуйте позже');\r\n        }\r\n        console.warn(error);\r\n        })\r\n      \r\n        buttonElement.disabled = true;\r\n        buttonElement.textContent = 'Комментарий добавляется...';\r\n      \r\n      });\r\n}\r\n//ответ на комментарии\r\n   function answerComment() {\r\n    if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n        return\r\n      }\r\n    const comment = document.querySelectorAll(\".comment\");\r\n    const textInputElement = document.querySelector(\".add-form-text\");\r\n    comment.forEach((el, index) => {\r\n      el.addEventListener(\"click\", () => {\r\n        textInputElement.value = `${_main_js__WEBPACK_IMPORTED_MODULE_3__.comments[index].name} \\n ${_main_js__WEBPACK_IMPORTED_MODULE_3__.comments[index].comment}`;\r\n      });\r\n    });\r\n  }\n\n//# sourceURL=webpack://webdev-dom-homework/./listeners.js?");

/***/ }),

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\nconst renderLogin = () => {\r\n  //отрисовываем форму\r\n    const appElement = document.getElementById(\"app\");\r\n    const loginHtml = `<h1>Страница входа</h1>\r\n    <div class=\"add-form\">\r\n      <h3 class=\"form-title\">Форма входа</h3>\r\n      <div class=\"form-row\">\r\n        <input type=\"text\" id=\"login-input\" class=\"input\" placeholder=\"Логин\" />\r\n        <input\r\n          type=\"password\"\r\n          id=\"password-input\"\r\n          class=\"input\"\r\n          placeholder=\"Пароль\"\r\n        />\r\n      </div>\r\n      <br />\r\n      <button class=\"button\" id=\"login-button\">Войти</button>\r\n      <button class=\"button-reg\">Зарегистрироваться</button>\r\n    </div>`\r\n     //создаем элемент app\r\n    appElement.innerHTML = loginHtml;\r\n\r\n    const buttonGet = document.getElementById(\"login-button\");\r\n    const loginInput = document.getElementById(\"login-input\");\r\n    const passwordInput = document.getElementById(\"password-input\");\r\n//Получаем данные от API\r\nbuttonGet.addEventListener(\"click\", () => {\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n        login: loginInput.value,\r\n        password: passwordInput.value\r\n    }).then((responseData) => {\r\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setUser)(responseData.user.name);\r\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n    }).then(() => {\r\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.fetchPromiseGet)();\r\n    })\r\n    .catch((error) => {\r\n     //////// alert(error.message);\r\n      console.error(\"Произошла ошибка при установке имени пользователя:\", error);\r\n});\r\n})\r\n};\n\n//# sourceURL=webpack://webdev-dom-homework/./login.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   fetchPromiseGet: () => (/* binding */ fetchPromiseGet),\n/* harmony export */   setComments: () => (/* binding */ setComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ \"./helpers.js\");\n\r\n\r\n\r\nconst commentsLoading = document.querySelector('.data-loading');\r\n//import {formatDateToRu, formatDateToUs} from \"./lib/formatDate/formatDate.js\" \r\n\r\nconst nameInputElement = document.querySelector(\".add-form-name\");\r\nconst textInputElement = document.querySelector(\".add-form-text\");\r\nconst buttonElement = document.querySelector(\".add-form-button\");\r\n// Переносим данные из разметки\r\nlet comments = [];\r\nfunction setComments(newComments) {\r\n  comments = newComments;\r\n}\r\nconst fetchPromiseGet = () => {\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPromise)().then((responseData) => {\r\n    // console.log(responseData);\r\n\r\n    const appComments = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.normalizeComments)(responseData.comments)\r\n    // получили данные и рендерим их в приложении\r\n    comments = appComments;\r\n    \r\n    //console.log(comments)\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)({comments});\r\n    \r\n  })\r\n};\r\nfetchPromiseGet();\r\n\r\nconsole.log(\"It works!\");\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./main.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./listeners.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.js */ \"./login.js\");\n\r\n\r\n\r\n\r\nconst renderComments = ({comments}) => {\r\n\r\n    const appElement = document.getElementById(\"app\");\r\n//создаем комментарий\r\n    const commentsHtml = comments\r\n    .map((comment, index) => {\r\n      return ` <li class=\"comment\">\r\n          <div class=\"comment-header\">\r\n            <div>${comment.name}</div>\r\n            <div>${comment.time}</div>\r\n          </div>\r\n          <div class=\"comment-body\">\r\n            <div class=\"comment-text\">\r\n              ${comment.comment}\r\n            </div>\r\n          </div>\r\n          <div class=\"comment-footer\">\r\n            <div class=\"likes\">\r\n              <span class=\"likes-counter\">${comments[index].likes}</span>\r\n              <button data-index= \"${index}\" class=\"like-button ${comment.isLiked ? '-active-like' : ''}\"></button>\r\n            </div>\r\n          </div>\r\n        </li> `\r\n    }).join(\"\");\r\n    //\r\n    const formHtml = `<div class=\"add-form\">\r\n    <input\r\n      type=\"text\"\r\n      class=\"add-form-name\"\r\n      placeholder=\"Введите ваше имя\"\r\n      value=${_api_js__WEBPACK_IMPORTED_MODULE_0__.user}\r\n      disabled\r\n    />\r\n    <textarea\r\n      type=\"textarea\"\r\n      class=\"add-form-text\"\r\n      placeholder=\"Введите ваш коментарий\"\r\n      rows=\"4\"\r\n    ></textarea>\r\n    <div class=\"add-form-row\">\r\n      <button class=\"add-form-button\">Написать</button>\r\n      <button class=\"delete-form-button\">Удалить последний комментарий</button>\r\n    </div>\r\n  </div>`\r\n  \r\n  appElement.innerHTML = `\r\n    <ul class=\"comments\" id=\"list-comments\" >${commentsHtml}</ul>\r\n    ${_api_js__WEBPACK_IMPORTED_MODULE_0__.token ? formHtml : '<p class=\"login-btn\">Чтобы добавить комментарий, авторизуйтесь</p>'}\r\n    `; \r\n//открыть форму авторизации\r\n    function actionLogin() {\r\n      if (_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n        return\r\n      }\r\n      const loginBtn = document.querySelector('.login-btn');\r\n      loginBtn.addEventListener('click', () => {\r\n      (0,_login_js__WEBPACK_IMPORTED_MODULE_2__.renderLogin)();\r\n      })\r\n    }\r\n    actionLogin();\r\n    \r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.addLike)({comments});\r\nif (_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n  (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.addComment)();  \r\n}   \r\n  (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.answerComment)();\r\n};\r\n    \n\n//# sourceURL=webpack://webdev-dom-homework/./render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;