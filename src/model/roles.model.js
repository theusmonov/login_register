import {DataTypes, Model} from "sequelize";

export class RolesModel extends Model{}

RolesModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING
    }
})