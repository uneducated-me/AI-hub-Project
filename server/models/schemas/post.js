const { Schema } = require("mongoose");
const shortId = require('./type/short-id');

module.exports = new Schema({
    shortId,
    img: String,
}, {
    timestamps: true
}
);