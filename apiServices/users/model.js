const {Sequelize, DataTypes} = require("sequelize");
const {v4: uuidv4} = require("uuid");

const User = database.define("user", {
    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
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