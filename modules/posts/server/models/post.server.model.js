'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
  category: {
      type: Schema.Type.ObjectId,
      ref: 'Category'
  },
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    required: 'Please fill Post name',
    trim: true
  },
  quatityPerUnit: {
    type: String,
  },
  unitPrice: {
    type: Number,
    default: 0
  },
  unitsInStock: {
    type: Number,
    default: 0,
    min: 0
  },
  unitsOnOrder: {
    type: Number,
    default: 0,
    min: 0
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Post', PostSchema);
