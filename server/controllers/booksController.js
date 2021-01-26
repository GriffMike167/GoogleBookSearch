const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({ date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json.err)
        
    },

    findById: function(req, res) {
        db.Book
        .findBtId(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json.err)
    },
    create: function(req, res) {
        db.Book
        this.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json.err)
    },
    update: function(req, res) {
        db.Book
        findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json.err)
    },
    delete: function(req, res) {
        db.Book
        .findById({_id: req.params.id})
        .sort({ date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json.err)
        
    },
}