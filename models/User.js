const { sequelize, DataTypes } = require('./index');

// User 모델 정의
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

// Test 모델 정의
const Test = sequelize.define('Test', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'test',
    timestamps: false,
});

module.exports = { User, Test };