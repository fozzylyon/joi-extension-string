'use strict';

const Joi = require('joi');

module.exports = {

    name: 'string',

    base: Joi.string(),

    language: {
        format: 'Must be a string or scalar'
    },

    coerce(value, state, options) {
        if (!value || value instanceof String || typeof value === 'string') {
            return value;
        }

        if (options.convert && typeof value === 'number') {
          return '' + value;
        }

        return value;
    },
};