const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  barks: {
    all: sql('./sql/bark/all.sql'),
    create: sql('./sql/bark/create.sql'),
    delete: sql('./sql/bark/delete.sql'),
    find: sql('./sql/bark/find.sql'),
  },
};

module.exports = sqlProvider;
