import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/database.js";

export class SignUpsignInModel extends Model{}

SignUpsignInModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
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