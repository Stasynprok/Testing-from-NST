# Testing-from-NST
Тестирование для стажировки в Neo Stack Technology

<h1 align="center">Тестирование для NST</h1>

## Описание

<p>Создан компонент с возможностью внедрять в систему.</p>
<p>Создано демо-приложение состоящее из этого компонента.</p>
<p>Приложение состоит из одной страницы которая отображает:</p>

- Список сотрудников в виде таблицы
-	Модальное окно для создания сотрудника
-	Модальное окно для редактирования сотрудника
-	Модальное окно при удалении сотрудника


## Как запустить демо-приложение

Необходимо наличие установленного **Node.js**

1. Откройте два терминала от **имени администратора** для запуска сервера и приложения

2. В каждом терминале перейдите в папку с проектом

3. На первом терминале запустить json server (приложение сохраняет и получает из него данные) командой:

```
npm run server
```
4. На втором терминале запустить приложение командой:
```
serve -s build
```
5. Перейти по ссылке:
```
 http://localhost:3000 
```

## Расширенное описание

- Для реализации приложения был использован **React**.
- Использовалось оформление кода по **Google JavaScript Style Guide**.
- Верстка адаптивна, работает исправно на различных разрешениях.
- Приложение стабильно работает на **Google**, на **IE11** работает, но имеются проблемы с расположениями компонентов.
- Для эмуляции сервера используется **json server**. В **package.json** прописан скрипт 'server' для запуска сервера с настройками.
- Для нотификаций была использована библиотека **react-hot-toast**.

## json server и api
### json server
json server запускается на 3001 порту, как базу данных использует файл 'db.json' и использует маршруты из 'routes.json'.
```
 json-server -p 3001 -w server/db.json --id id --routes server/routes.json
```
### API взаимодействия
В файле 'routes.json' прописаны маршруты:
```
 {
  "/api/v1/persons": "/persons",
  "/api/v1/person/:id": "/persons/:id",
  "/api/v1/person": "/persons"
}
```

**В коде происходят взаимодействия по прописанным маршрутам:**

```
 GET api/v1/persons
```

> *Возвращает массив объектов типа Person.*

```
 GET api/v1/person/[id]
```

> *Где id - уникальный идентификатор сотрудника. Возвращает объект типа Person.*

```
 PUT api/v1/person/[id]
```

> *Где id - уникальный идентификатор сотрудника. Обновляет данные сотрудника согласно переданным значениям.*

```
 POST api/v1/person
```
> *Передает объект Person. Создает нового сотрудника с указанными навыками.*

```
 DELETE api/v1/person/[id]
```
> *Где id - уникальный идентификатор сотрудника. Удаляет сотрудника с указанным id из системы.*

# Предпоказ

## **Пустая таблица**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/1.PNG">
</p>

## **Таблица с сотрудниками**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/2.PNG">
</p>

## **Добавление сотрудника**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/3.PNG">
</p>

## **Редактирование сотрудника**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/4.PNG">
</p>

## **Удаление сотрудника**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/5.PNG">
</p>
