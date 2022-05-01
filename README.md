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

- Для реализации приложения был использован React.
- Верстка адаптивна, работает исправно на различных разрешениях.
- Приложение стабильно работает на **Google**, на **IE11** работает, но имеются проблемы с расположениями компонентов.
- Для эмуляции сервера используется **json server**. В **package.json** прописан скрипт 'server' для запуска сервера с настройками.
- Для нотификаций была использована библиотека **react-hot-toast**.

# Предпоказ

## **Пустая таблица**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/1.PNG" width="80%">
</p>

## **Таблица с сотрудниками**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/2.PNG" width="80%">
</p>

## **Добавление сотрудника**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/3.PNG" width="80%">
</p>

## **Редактирование сотрудника**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/4.PNG" width="80%">
</p>

## **Удаление сотрудника**

<p align="center">
<img  src="https://raw.githubusercontent.com/Stasynprok/Testing-from-NST/main/readme_image/5.PNG" width="80%">
</p>
