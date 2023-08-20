const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
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
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
