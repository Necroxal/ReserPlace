module.exports = (sequelize, Sequelize) => {
    const places = sequelize.define("places", {
        places_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            initialAutoIncrement: 1,
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
        timestamps: false,
        freezeTableName: true,
        
    });

    return places;
}