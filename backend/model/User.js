const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      user_pw: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "user_table",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
