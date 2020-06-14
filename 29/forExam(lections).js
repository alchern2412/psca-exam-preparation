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
} = require('./model/18_01m').ORM(sequelize)

const print = (p) => {
    let k = 0;
    console.log('-----------')
    p.forEach(el => {
        console.log(++k + ' ' + JSON.stringify(el.dataValues))
    })
}

sequelize.authenticate()
    .then(() => {
        console.log('Connection completed')
    })
    .then(() => {

        // Faculty.findAll().then(faculties => print(faculties))

        // Pulpit.findAll().then(pulpits => print(pulpits))

        // Teacher.findAll().then(faculties => print(faculties))

        // Subject.findAll().then(faculties => print(faculties))

        // Auditorium.findAll().then(auditoriums => print(auditoriums))

        // Auditorium_type.findAll().then(auditorium_types => print(auditorium_types))


        //
        // // inner join
        // Faculty.hasMany(Pulpit, {
        //     as: 'faculty_pulpits',
        //     foreignKey: 'faculty',
        //     sourceKey: 'faculty'
        // })
        // Faculty.findAll({
        //     include: [{
        //         model: Pulpit,
        //         as: 'faculty_pulpits',
        //         required: true
        //     }]
        // }).then(p => {
        //     p.forEach(elFac => {
        //         console.log(elFac.dataValues.faculty, elFac.dataValues.faculty_name);
        //         elFac.dataValues.faculty_pulpits.forEach(elPul => {
        //             console.log('--', elPul.dataValues.pulpit, elPul.dataValues.pulpit_name)
        //         })
        //     })
        // })


        // insert
        // Pulpit.create({
            // pulpit: 'MS2',
        //     pulpit_name: 'Mobile Systems',
        //     faculty: 'ИТ'
        // }).then(task => {
        //     console.log(task.dataValues)
        // }).catch(err => {
        //     console.log('Error:', err.message)
        // })

        //// update
        // Pulpit.update({
        //     pulpit_name: 'Software Developing of mobile systems'
        //
        // }, {
        //     where: {
        //         pulpit: 'MS2'
        //     }
        // }).then(task => {
        //     console.log('Result:', task);
        // }).catch(err => {
        //     console.log('Error:', err.message);
        // })

        //// delete
        // Pulpit.destroy({
        //     where: {
        //         pulpit: 'MS'
        //     }
        // }).then(task => {
        //     console.log('Result:', task)
        // }).catch(err => {
        //     console.log('Error:', err.message)
        // })


        // sequelize.close();
    })
    .catch(err => {
        console.log('Error with connection to DB:', err)
    })



console.log('-------------x-------------')






