module.exports = function(sequelize, DataTypes){
  const Todo = sequelize.define("Todo", {
// properties needed for todo : text and complete
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,

  });
  return Todo;
}