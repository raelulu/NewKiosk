const Payment = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "payment",
    {
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      merchant_uid: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      amount: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      buyer_name: {
        type: DataTypes.STRING(3),
        allowNull: false,
      },
    },
    {
      tableName: "payment",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Payment;
