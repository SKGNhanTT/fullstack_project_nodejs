'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Markdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Markdown.belongsTo(models.User, {
                foreignKey: 'doctorId',
                // targetKey: 'id',
                // as: 'doctorData',
            });
        }
    }
    Markdown.init(
        {
            contentHTMLEn: DataTypes.TEXT('long'),
            contentHTMLVi: DataTypes.TEXT('long'),
            contentMarkdownEn: DataTypes.TEXT('long'),
            contentMarkdownVi: DataTypes.TEXT('long'),
            descriptionEn: DataTypes.TEXT('long'),
            descriptionVi: DataTypes.TEXT('long'),
            doctorId: DataTypes.INTEGER,
            specialtyNameEn: DataTypes.TEXT('long'),
            specialtyNameVi: DataTypes.TEXT('long'),
            clinicId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Markdown',
        }
    );
    return Markdown;
};
