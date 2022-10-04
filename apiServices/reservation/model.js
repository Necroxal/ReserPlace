//sequelize model connecting with mysql
const Place = require('../places/model');
const User = require('../users/model');
//const db = require('../../db');
module.exports = (sequelize, Sequelize) => {
    const reservation = sequelize.define("reservation", {
        //Attributes
        reservation_id: {
            type: Sequelize.INTEGER,
            //autoIncrement: true,
            allowNull: false,
        },
        start_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        end_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }, {
        timestamps: false, //hide unnecessary fields
        freezeTableName: true, //omit pluralize
    });

    return reservation;
}