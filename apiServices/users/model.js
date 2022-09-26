module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            initialAutoIncrement: 1,
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        phone: {
            type: Sequelize.INTEGER(10),
            allowNull: false,
            unique: true
        },
        state: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
    },{
        timestamps: false,
        freezeTableName: true,
        
    });

    return User;
}