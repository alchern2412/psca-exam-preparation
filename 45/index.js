// 45.	Пакет Express. Основные принципы
// работы. Выполнение js-скриптов в
// отдельном процессе (fork, send,
// worker). Пример.

const child = require('child_process')
const fp = child.fork('index2.js')

const f = () => {
    console.log('index.js')
}

setInterval(f, 3000);

let x = 0
const s = () => {
    fp.send(`Message from index.js: ${++x}`)
}
setInterval(s, 6000)
