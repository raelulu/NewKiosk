const Menu = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "menu",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        uniqueKey: true,
      },
      price: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "menu",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Menu;
