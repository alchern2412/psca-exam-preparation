const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('api/users/')
})

module.exports = router



