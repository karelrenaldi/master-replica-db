const Lender = require('../../models').lender;

exports.create = (lender, options) => Lender.create(lender, options);

exports.update = (values, where, options) => Lender.update(values, { where, ...options });

exports.get = (where, options) => Lender.findOne({ where, ...options });