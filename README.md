# Testing-from-NST
Тестирование для стажировки в Neo Stack Technology

<h1 align="center">Тестирование для NST</h1>

## Описание

<p>Создан компонент с возможностью внедрения в систему.</p>
<p>Создано демо-приложение состоящее из этого компонента.</p>
<p>Приложение состоит из одной страницы которая отображает:</p>

- Список сотрудников в виде таблицы
-	Модальное окно для создания сотрудника
-	Модальное окно для редактирования сотрудника
-	Модальное окно при удалении сотрудника

## Исправления
**Критические замечания**
1. Исправлен импорт несуществующего файла **app.css**.

>В app.js импорт несуществующего файла app.css (должен быть App.css), из-за этого приложение не стартует 

2. Исправлено сохранение информации при редактировании, теперь все изменения применяются после нажатия кнопки **"Сохранить"**. Put-запрос отправляется после нажатия кнопки **"Сохранить"**, сервер перестал падать.

>Во время ввода нового символа при редактировании сотрудника, отправляется put-запрос, и результат сохраняется без подтверждения. Приложение падает.

**Не критичные замечания**
1. Добавлено описание по установке и запуску json-server. Приложение осталось с зависимостью от json-server, не считаю верным сохранять базу данных на стороне клиента, ведь она может занимать много места.

>Приложение имеет явную зависимость в виде json-server (также нет в README.md)

2. Исправлен gitignore из-за которого не загружалась папка build. Добавлено подробное описание запуска

>Не удалось запустить при помощи "serve -s build" из README.md

3. Убрана часть дублирующих констант.

>Дублирование констант

4. Все элементы взаимодействия подсвечиваются при наведении и нажатии.

>Не на всех элементах взаимодействия имеется выделение при наведении

5. Исправлено сравнение логических переменных с true и false.

>Значения, изначально имеющих логический тип, можно не сравнивать с true или false

6. Убрано дублирование setState.

> Чтобы изменить несколько свойств объекта состояния одного компонента, setState можно не вызывать несколько раз
## Как запустить демо-приложение

Необходимо наличие установленного **Node.js**

### Запуск собранного приложения

1. Откройте два терминала от **имени администратора** для запуска сервера и приложения

2. В каждом терминале перейдите в папку с проектом. Пример команды:

```
cd C:\Users\MrSappl\Desktop\Testing-from-NST
```
3. В одном из терминалов установите пакет **json-server**
 и локальный сервер для запуска собранного приложения **serve**
```
npm install json-server
```

```
npm install -g serve
```
4. На первом терминале запустить **json-server** (приложение сохраняет и получает из него данные) командой:

```
npm run server
```
5. На втором терминале запустить приложение командой:
```
serve -s build
```
6. Перейти в браузере по ссылке:
```
 http://localhost:3000 
```
**7. После завершения работы можно удалить json-server и serve**
```
npm uninstall -g json-server
```
```
npm uninstall -g serve
```
### Запуск в режиме разработки

1. Откройте два терминала от **имени администратора** для запуска сервера и приложения

2. В каждом терминале перейдите в папку с проектом

3. В одном из терминалов установите пакет json-server
```
npm install json-server
```
>Если в папке с проектом нет папки **node_module** установите командой:
>```npm install```

4. На первом терминале запустить **json-server** (приложение сохраняет и получает из него данные) командой:

```
npm run server
```
5. На втором терминале запустить приложение командой:
```
npm start
```
6. Перейти в браузере по ссылке:
```
 http://localhost:3000 
```
**7. После завершения работы можно удалить json-server**
```
npm uninstall -g json-server
```

## Расширенное описание

- Для реализации приложения был использован **React**.
- Использовалось оформление кода по **Google JavaScript Style Guide**.
- Верстка адаптивна, работает исправно на различных разрешениях.
- Приложение стабильно работает на **Google**, на **IE11** работает, но имеются проблемы с расположениями компонентов.
- Для эмуляции сервера используется **json-server**. В **package.json** прописан скрипт **'server'** для запуска сервера с настройками. Приложение имеет явную зависимость от **json-server**.
- Для нотификаций была использована библиотека **react-hot-toast**.

## json-server и api
### json-server
json-server запускается на 3001 порту, как базу данных использует файл 'db.json' и использует маршруты из 'routes.json'.
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
