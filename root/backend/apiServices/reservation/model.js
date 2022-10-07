//const db = require('../../db');
module.exports = (sequelize, Sequelize) => {
    const reservation = sequelize.define("reservation", {
        //Attributes
        reservation_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
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