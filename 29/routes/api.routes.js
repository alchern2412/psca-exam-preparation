const { Router } = require('express')
const config = require('config')

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('lab14node', 'sa', 'Password1', {
    host: 'DESKTOP-CF08RUL',
    dialect: 'mssql'
});
const {
    Faculty,
    Pulpit,
    Teacher,
    Subject,
    Auditorium_type,
    Auditorium
} = require('../model/18_01m').ORM(sequelize)

async function conn() {
    await sequelize.authenticate()
        .then(() => {
            console.log('Connection completed')
        })
}

conn();
const router = Router()

// faculties
router.get('/faculties', async (req, res) => {
    try {
        await Faculty
            .findAll().then(faculties => {
                res.json(faculties)
            })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
});
router.post('/faculties', async (req, res) => {
    try {
        // insert

        await Faculty.create(req.body).then(task => {
            console.log(task.dataValues)
            res.status(201).json({
                message: 'Entity created'
            })
        }).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.put('/faculties/:faculty', async (req, res) => {
    try {
        // update
        await Faculty.update(req.body, {
            where: {
                faculty: req.params['faculty']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Entity updated'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.delete('/faculties/:faculty', async (req, res) => {
    try {
        // delete
        await Faculty.destroy({
            where: {
                faculty: req.params['faculty']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Ok'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})
// ---------------------------- pulpit ---------------------
router.get('/pulpits', async (req, res) => {
    try {
        await Pulpit.findAll().then(pulpits => {
            res.json(pulpits)
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
});
router.post('/pulpits', async (req, res) => {
    try {
        // insert

        await Pulpit.create(req.body).then(task => {
            console.log(task.dataValues)
            res.status(201).json({
                message: 'Entity created'
            })
        }).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.put('/pulpits/:pulpit', async (req, res) => {
    try {
        // update
        await Pulpit.update(req.body, {
            where: {
                pulpit: req.params['pulpit']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Entity updated'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.delete('/pulpits/:pulpit', async (req, res) => {
    try {
        // delete
        await Pulpit.destroy({
            where: {
                pulpit: req.params['pulpit']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Ok'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

// ---------------------------- subject ---------------------
router.get('/subjects', async (req, res) => {
    try {
        await Subject.findAll().then(subjects => {
            res.json(subjects)
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
});
router.post('/subjects', async (req, res) => {
    try {
        // insert

        await Subject.create(req.body).then(task => {
            console.log(task.dataValues)
            res.status(201).json({
                message: 'Entity created'
            })
        }).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.put('/subjects/:subject', async (req, res) => {
    try {
        // update
        await Subject.update(req.body, {
            where: {
                subject: req.params['subject']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Entity updated'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.delete('/subjects/:subject', async (req, res) => {
    try {
        // delete
        await Subject.destroy({
            where: {
                subject: req.params['subject']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Ok'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

// ---------------------------- Auditorium ---------------------
router.get('/auditoriums', async (req, res) => {
    try {
        await Auditorium.findAll().then(auditoriums => {
            res.json(auditoriums)
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
});
router.post('/auditoriums', async (req, res) => {
    try {
        // insert

        await Auditorium.create(req.body).then(task => {
            console.log(task.dataValues)
            res.status(201).json({
                message: 'Entity created'
            })
        }).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.put('/auditoriums/:auditorium', async (req, res) => {
    try {
        // update
        await Auditorium.update(req.body, {
            where: {
                auditorium: req.params['auditorium']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Entity updated'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.delete('/auditoriums/:auditorium', async (req, res) => {
    try {
        // delete
        await Auditorium.destroy({
            where: {
                auditorium: req.params['auditorium']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Ok'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

// ---------------------------- Auditorium ---------------------
router.get('/auditoriumtypes', async (req, res) => {
    try {
        await Auditorium_type.findAll().then(auditoriumtypes => {
            res.json(auditoriumtypes)
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
});
router.post('/auditoriumtypes', async (req, res) => {
    try {
        // insert

        await Auditorium_type.create(req.body).then(task => {
            console.log(task.dataValues)
            res.status(201).json({
                message: 'Entity created'
            })
        }).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.put('/auditoriumtypes/:auditorium_type', async (req, res) => {
    try {
        // update
        await Auditorium_type.update(req.body, {
            where: {
                auditorium_type: req.params['auditorium_type']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Entity updated'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.delete('/auditoriumtypes/:auditorium_type', async (req, res) => {
    try {
        // delete
        await Auditorium_type.destroy({
            where: {
                auditorium_type: req.params['auditorium_type']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Ok'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})
// ---------------------------- Teachers ---------------------
router.get('/teachers', async (req, res) => {
    try {
        await Teacher.findAll().then(teachers => {
            res.json(teachers)
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
});
router.post('/teachers', async (req, res) => {
    try {
        // insert

        await Teacher.create(req.body).then(task => {
            console.log(task.dataValues)
            res.status(201).json({
                message: 'Entity created'
            })
        }).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.put('/teachers/:teacher', async (req, res) => {
    try {
        // update
        await Teacher.update(req.body, {
            where: {
                teacher: req.params['teacher']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Entity updated'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})

router.delete('/teachers/:teacher', async (req, res) => {
    try {
        // delete
        await Teacher.destroy({
            where: {
                teacher: req.params['teacher']
            }
        }).then(task => {
            console.log(task.dataValues)
            res.status(200).json({
                message: 'Ok'
            })
        }
        ).catch(err => {
            console.log('Error:', err.message)
            res.status(400).json({
                message: err.message
            })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, try again'
        })
    }
})





module.exports = router







