module.exports = (sequelize, DataTypes) => {
  const Lender = sequelize.define('lender',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      lenderName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
  );

  return Lender;
};
