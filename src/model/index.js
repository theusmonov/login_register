import {Model, Sequelize, DataTypes, ENUM} from "sequelize";
import { UserRole } from "../shared/utils/user_role.js";
import connectDb from "../db/index.js";



export class UserModel extends Model{}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: UserRole.USER,
        enum: [UserRole.ADMIN, UserRole.USER]
    }
}, {
    sequelize: connectDb,
    timestamps: true,
    tableName: "users",
    deletedAt: true
})

await connectDb.sync({alter: true})
