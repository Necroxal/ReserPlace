const {Sequelize, DataTypes} = require("sequelize");
const db = require("../../db")

const User = db.sequelize.define("user", {
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

const getUserByEmail = (email) => {
    return User.findAll({
        where: {
            email: email
        },
        raw: true
    });
};

const updateUser = (oldUser, newUser) =>{
    const updateQuery = {}

    newUser.name ? updateQuery.name = newUser.name : null;
    newUser.lastName ? updateQuery.lastName = newUser.lastName : null;
    newUser.phone ? updateQuery.phone = newUser.phone : null;    
    newUser.state ? updateQuery.state = newUser.state : null;

    console.log(updateQuery, updateQuery.phone);

    return User.update(updateQuery,
        {
            where: {
                email: oldUser.email 
            }
        }
    );
}

module.exports = {createUser, getUserByEmail, updateUser};