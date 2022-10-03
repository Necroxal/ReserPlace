const {DataTypes} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        state:{
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        tableName: "users",
        timestamps: false,
    });

    return users;
}