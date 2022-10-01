const {Sequelize, DataTypes} = require("sequelize");
const db = require("../../db")


// Create the model to insert data into the database.
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

// This function receives the data from the user and uses the sequelize crete method to insert data into the database.
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

// This function receives the user email and uses the sequelize findAll method to select data from the database.
const getUserByEmail = (email) => {
    return User.findAll({
        where: {
            email: email
        },
        raw: true
    });
};

// This function receives the user and the data to update.
const updateUser = (oldUser, newUser) =>{
    const updateQuery = {} // Store the fields to update in an object.

    // If any of this fields is found in the data to update, add them into the update query.
    newUser.name        ? updateQuery.name      = newUser.name      : null;
    newUser.lastName    ? updateQuery.lastName  = newUser.lastName  : null;
    newUser.phone       ? updateQuery.phone     = newUser.phone     : null;    
    newUser.state       ? updateQuery.state     = newUser.state     : null;

    console.log(updateQuery, updateQuery.phone);

    // The sequelize crete method to update data from the database.
    return User.update(updateQuery,
        {
            where: {
                email: oldUser.email 
            }
        }
    );
}

// Export the model functions.
module.exports = {createUser, getUserByEmail, updateUser};