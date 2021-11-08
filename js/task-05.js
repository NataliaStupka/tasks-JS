import qwe from './validate-password';
console.log('import',qwe);


// Noda
// путь (pwd)
// лист (ls)
// навигация (cd)
// очистка clear или control + l
// создание файлов (touch)
// создание папок (mkdir)
// переименование/перемещение (mv)
// удаление (rm), rmdir удалит папку
// rm -rf например css - удалит папку css со всем ее содержимым

// require('имя пакета') -  для использавания пакета в коде ноды (не в коде браузера)

// 1.

console.log('Привет из Node.js');
// ------------------------------
// 2.
// используем для валидации пароля; во втором const укажим каким должен быть пароль, alphanum - только буквы и цифры

const Joi = require('joi');
const passwordSchema = Joi.string().min(3).max(10).alphanum();
console.log('Валидация пароля', passwordSchema.validate('12345fff'));

// в консоли node js/task-05.js (путь к файлу где пишем, в зависимости где сейчас находимся будет разный путь)
// можем в скрипт в файле package.json прописать сокращение "scripts": { "start": "node js/task-05.js" }
// и в консоли вызывать npm run имя скрипта
// --------------------------------------
// 3. делает сервер (в консоли npm start), не дописано (видео 1ч18м) 

// const express = require('express');
// const app = express();
// const lestener = app.listen(4444, () => {
//     console.log(`Веб-сервер запущен на порту ${lestener.address().port}`);
// })
// -----------------------

// 4 Parcel
console.log('this is Parcel, перезагрузка выполняется')
