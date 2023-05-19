const sequelize = require('../utils/connection');
const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

// Establecer relaciones
Movie.belongsToMany(Actor, { through: 'MovieActor' });
Actor.belongsToMany(Movie, { through: 'MovieActor' });

Movie.belongsToMany(Director, { through: 'MovieDirector' });
Director.belongsToMany(Movie, { through: 'MovieDirector' });

Movie.belongsToMany(Genre, { through: 'MovieGenre' });
Genre.belongsToMany(Movie, { through: 'MovieGenre' });

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.log('Error al sincronizar los modelos:', error);
});