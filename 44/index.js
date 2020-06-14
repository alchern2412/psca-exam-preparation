// 44.	Пакет Express. Основные принципы
// работы. Запуск процесса операционной
// системы (exec), работа со стандартными
// потоками ввода/вывода.  Пример.

const exec = require('child_process').exec
const task44app = exec('task44', {
    cwd: 'C:\\Users\\Alexey Chernyavsky\\Downloads\\Univer\\6SEMESTR\\EXAMS\\pskp\\tasks\\44\\task44\\task44\\bin\\Debug'
}, (err, stdout, stderr) => {
    if (stderr) {
        console.log(`stderr: ${stderr}`)
    } else {
        console.log(`stdout: ${stdout}`)
    }
})
