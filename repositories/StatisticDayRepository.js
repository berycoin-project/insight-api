const StatisticDay = require('../models/StatisticDay');
const async = require('async');

function StatisticDayRepository () {}

StatisticDayRepository.prototype.getDay = function(date, next) {
    return StatisticDay.findOne({date: date}, function(err, statisticDay) {
        return next(err, statisticDay);
    });
};

StatisticDayRepository.prototype.createOrUpdateDay = function(date, data, next) {
    return StatisticDay.findOneAndUpdate({date: date}, data, {upsert: true, new: true}, function(err, row) {
        return next(err, row);
    });
};

module.exports = StatisticDayRepository;