const { formatDistance } = require('date-fns');

function noteAge(dateOfNote) {
    return formatDistance(dateOfNote, new Date());
}

module.exports = {
    noteAge : noteAge
}