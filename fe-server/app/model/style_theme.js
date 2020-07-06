module.exports = app => {
  const { TEXT, INTEGER } = app.Sequelize;
  const StyleTheme = app.model.define('style_theme', {
    user_id: INTEGER,
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    desc: TEXT,
    theme: INTEGER,
  }, {
    tableName: 'style_theme',
    timestamps: false,
  });

  return StyleTheme;
};
