const BarkDAO = require('../services/BarkDAO');

class BarkController {
  static getAllOfCurrentUser(req, res) {
    BarkDAO.searchBy({ user_id: req.session.currentUser.id }).then((barks) => {
      res.status(200).json(barks);
    });
  }
  static create(req, res) {
    const barkData = {
      body: req.body.body,
      user_id: req.session.currentUser.id,
    };
    BarkDAO.create(barkData)
           .then((bark) => res.status(200).json(bark));
  }
  static delete(req, res) {
    BarkDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = BarkController;
