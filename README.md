# Тестовое задание

### Результат выполнения:

> [Просмотр](https://skro11-ru.github.io/test-task-lead-hit/)

### Используемый стек:

- Vue.js
- Vuex
- Vue Router
- Vanilla JS
- TypeScript
- Axios
- AmCharts 4
- Vite
- HTML5
- SCSS

---

### Техническое задание:

Создать приложение с помощью Vue-CLI. В приложении должны использоваться библиотеки vue-router и vuex. С помощью vue-router создать две страницы:
Страница “Авторизация”
Страница “Аналитика”
Все страницы необходимо оформить в одном стиле на ваш вкус. Для оформления можно использовать любые библиотеки.

#### Страница “Авторизация”

На странице “Авторизация” должны быть - заголовок с текстом “LeadHit” и форма. Форма должна содержать одно поле и кнопку. Поле необходимо для ввода “id сайта”. Кнопка должна содержать текст - “Войти”. При нажатии кнопки необходимо:
Проверить, что длина значения, введенного в поле, равна 24 символам. Если значение не соответствует условию отображать ошибку с текстом: “id сайта должен содержать 24 символа”. Скрывать ошибку при вводе значения в поле.
Если значение соответствует условию, делать HTTP запрос. Запрос можно реализовать через стандартные методы или подключив какую-либо библиотеку на ваш выбор. Запрос необходимо выполнить со следующими данными:
URL - https://track-api.leadhit.io/client/test_auth
метод - GET
Headers:
Api-Key: 5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo
Leadhit-Site-Id: 5f8475902b0be670555f1bb3
Заголовок Leadhit-Site-Id необходимо брать из поля формы.
В случае получения ответа "message": "ok", сохранять в localStorage ключ - ‘leadhit-site-id’, со значением - ‘5f8475902b0be670555f1bb3’, после чего перенаправлять пользователя на страницу “Аналитика”.

#### Страница “Аналитика”

На странице “Аналитика” необходимо отобразить:
заголовок страницы - “Аналитика”;
заголовок графика - “Аналитика по визитам”;
график визитов;
График должен состоять из двух осей:
на оси x должно отображаться время (данные для этой оси должны быть взяты из ключа “date” объектов массива, приведенного ниже);
на оси y должны отображаться визиты (данные для этой оси должны быть взяты из ключа “visits” объектов массива, приведенного ниже);
Пример отображения графика:

При наведении на точки пересечения осей желательно отображать дату и количество визитов конкретно для этой точки. Для отображения графика использовать бибилиотеку https://www.amcharts.com/

Данные для отображения на графике:

```bash
[
{"date":"2020-07-01","visits":213},
{"date":"2020-07-02","visits":249},
{"date":"2020-07-03","visits":179},
{"date":"2020-07-04","visits":170},
{"date":"2020-07-05","visits":184},
{"date":"2020-07-06","visits":202},
{"date":"2020-07-07","visits":198},
{"date":"2020-07-08","visits":168},
{"date":"2020-07-09","visits":176},
{"date":"2020-07-10","visits":171},
{"date":"2020-07-11","visits":190},
{"date":"2020-07-12","visits":154},
{"date":"2020-07-13","visits":246},
{"date":"2020-07-14","visits":250},
{"date":"2020-07-15","visits":227},
{"date":"2020-07-16","visits":140},
{"date":"2020-07-17","visits":170},
{"date":"2020-07-18","visits":125},
{"date":"2020-07-19","visits":106},
{"date":"2020-07-20","visits":207},
{"date":"2020-07-21","visits":222},
{"date":"2020-07-22","visits":198},
{"date":"2020-07-23","visits":204},
{"date":"2020-07-24","visits":213},
{"date":"2020-07-25","visits":145},
{"date":"2020-07-26","visits":166},
{"date":"2020-07-27","visits":163},
{"date":"2020-07-28","visits":135},
{"date":"2020-07-29","visits":45}
]

```

При переходе на страницу “Аналитика” по ссылке, отслеживать наличие в localStorage ключа - ‘leadhit-site-id’, и в случае его отсутствия перенаправлять пользователя на страницу “Авторизация”.

## Команды

```bash
npm ci            # установка зависимостей проекта (предпочтительный способ)
npm i             # установка зависимостей проекта
npm run dev       # запуск сервера разработки
npm run build     # сборка проекта
npm run preview   # локальная предварительная версия рабочей сборки

```
