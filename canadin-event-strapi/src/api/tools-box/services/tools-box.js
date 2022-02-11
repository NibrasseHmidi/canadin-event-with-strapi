'use strict';

/**
 * tools-box service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tools-box.tools-box');
