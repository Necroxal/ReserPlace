const {Sequelize, DataTypes} = require("sequelize");
const databaseConnection = require("../../config/ConnectionDb")

const User = databaseConnection.define("user", {
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
})

const createUser = (email, password, name, lastName, phone, state) => {
    return User.create({
        email: email,
        password: password,
        name: name,
        lastName: lastName,
        phone: phone,
        state: state
    });
}

module.exports = createUser;