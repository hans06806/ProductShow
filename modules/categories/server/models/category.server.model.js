'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Category name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  quatityPerUnit: {
    type: Number,
    default: 0,
    min: 0
  },
  Description: {
    type: String,
    default: 0
  },
  Image: {
    type: Number,
    default: 0,
    min: 0
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Category', CategorySchema);
