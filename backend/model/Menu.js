const Menu = (Sequelize, DataTypes) => {
  return Sequelize.define(
    'menu',
    {
      menu_id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      menu_index: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      menu_price: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      menu_text: {
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: 'menu',
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Menu;
