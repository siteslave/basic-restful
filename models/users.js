var Q = require('q');

module.exports = {
  getPerson: function (db) {

    var q = Q.defer();

    db('person as p')
      .select()
      //.leftJoin('house as h', 'h.hid', 'p.hid')
      .limit(10)
      .then(function (rows) {
        q.resolve(rows);
      })
      .catch(function (err) {
        q.reject(err);
      });

    return q.promise;

  },

  getPerson2: function (db) {

    var q = Q.defer();
    var sql = 'SELECT * FROM person LIMIT 10';

    db.raw(sql, [])
      .then(function (rows) {
        q.resolve(rows[0]);
      })
      .catch(function (err) {
        q.reject(err);
      });

    return q.promise;

   }
};