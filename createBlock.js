'use strict';

// Требует node.js и пакета mkdirp
// Пакет mkdirp: https://www.npmjs.com/package/mkdirp#install — установить глобально или прописать установку в package.json, в секции devDependencies
// Использование: 
//   - поместить этот файл в корень проекта
//   - исправить пути к генерируемым папкам и файлам, если блоки проекта лежат не в ./src/blocks/
//   - в терминале, будучи в корневой папке проекта, выполнить node createBlock.js [имя блока] [доп. расширения через пробел]

const fs = require('fs');                // будем работать с файловой системой
const mkdirp = require('mkdirp');        // зависимость, должна быть установлена (см. описание выше)

let blockName = process.argv[2];          // получим имя блока
let defaultExtensions = ['pug', 'styl', 'js']; // расширения по умолчанию
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));  // добавим введенные при вызове расширения (если есть)

// Если есть имя блока
if(blockName) {

  let dirPath = 'app/blocks/' + blockName + '/'; // полный путь к создаваемой папке блока
  mkdirp(dirPath, function(err){                 // создаем

    // Если какая-то ошибка — покажем
    if(err) {
      console.error('Отмена операции: ' + err);
    }

    // Нет ошибки, поехали!
    else {
      console.log('Создание папки ' + dirPath + ' (создана, если ещё не существует)');

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      extensions.forEach(function(extention){

        let filePath = dirPath + blockName + '.' + extention; // полный путь к создаваемому файлу
        let fileContent = '';                                 // будущий контент файла
        let styleFileImport = '';                             // будущая конструкция импорта файла стилей
        let fileCreateMsg = '';                               // будущее сообщение в консоли при создании файла

        // Если это LESS
        if(extention == 'less') {
          styleFileImport = '@import \'./app/blocks/' + blockName + '/' + blockName + '.less\';';
          fileContent = '// Для импорта в диспетчер подключений: ' + styleFileImport + '\n\n\n.' + blockName + ' {\n  \n}\n';
          fileCreateMsg = 'Для импорта стилей: ' + styleFileImport;
        }

        // Если это JS
        else if(extention == 'js') {
          fileContent = '// (function(){\n// код\n// }());\n';
        }

        // Если это Styl
        else if(extention == 'styl') {
          // fileContent = '// (function(){\n// код\n// }());\n';
          fileContent = '.' + blockName + '\n //';
        }

        // Создаем файл, если он еще не существует
        if(fileExist(filePath) === false) {
          fs.writeFile(filePath, fileContent, function(err) {
            if(err) {
              return console.log('Файл НЕ создан: ' + err);
            }
            console.log('Файл создан: ' + filePath);
            if(fileCreateMsg) {
              console.warn(fileCreateMsg);
            }
          });
        }
        else {
          console.log('Файл НЕ создан: ' + filePath + ' (уже существует)');
        }
      });
    }
  });
}
else {
  console.log('Отмена операции: не указан блок');
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}