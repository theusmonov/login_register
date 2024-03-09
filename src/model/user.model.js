import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/database.js";

export class UserModel extends Model{}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    paranoid: true,
    timestamps: true,
    tableName: "users"
})

await sequelize.sync({alter: true})