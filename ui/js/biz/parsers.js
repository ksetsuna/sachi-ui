const parse = require('csv-parse/lib/sync');

export const parseEntries = (content) => parse(content, {delimiter: '\t'});