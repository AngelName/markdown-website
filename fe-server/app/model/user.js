module.exports = app => {
  const { TEXT, INTEGER } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: TEXT, unique: true, allowNull: false },
    password: { type: INTEGER, allowNull: false },
    permissions: TEXT,
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
};
