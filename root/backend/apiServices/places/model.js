//sequelize model connecting with mysql
module.exports = (sequelize, Sequelize) => {
    const places = sequelize.define("places", { //Places is the name for table in mysql
        //Attributes
        places_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT(20),
            allowNull: false,
        },
        status_place: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        adress: {
            type: Sequelize.STRING(60),
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
    },{
        timestamps: false, //hide unnecessary fields
        freezeTableName: true, //omit pluralize
        
    });

    return places;
}