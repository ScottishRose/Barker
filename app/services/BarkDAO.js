const db = require('../config/db');
const sql = require('../config/sqlProvider').barks;
const Bark = require('../models/Bark');

class BarkDAO {
  static create({ body, user_id }) {
    return db.one(sql.create, [body, user_id])
             .then((data) => new Bark(data));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static searchBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.map(sql.find, [key, value], (row) => new Bark(row));
  }
}

module.exports = BarkDAO;
