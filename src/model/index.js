import {Model,DataTypes} from "sequelize";
import { UserRole } from "../shared/utils/user_role.js";
import connectDb from "../db/index.js";
import {v4 as uuidv4} from "uuid";



export class UserModel extends Model{}

UserModel.init({
    uuid: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
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
    paranoid :true,
    tableName: "users",
    deletedAt: true
})

await connectDb.sync({force: true})
