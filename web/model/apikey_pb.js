// source: pkg/model/apikey.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));



goog.exportSymbol('proto.model.APIKey', null, global);
goog.exportSymbol('proto.model.APIKey.Role', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.APIKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.APIKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.APIKey.displayName = 'proto.model.APIKey';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.APIKey.prototype.toObject = function(opt_includeInstance) {
  return proto.model.APIKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.APIKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.APIKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keyHash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0),
    creator: jspb.Message.getFieldWithDefault(msg, 6, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    createdAt: jspb.Message.getFieldWithDefault(msg, 14, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.APIKey}
 */
proto.model.APIKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.APIKey;
  return proto.model.APIKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.APIKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.APIKey}
 */
proto.model.APIKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyHash(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 5:
      var value = /** @type {!proto.model.APIKey.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.APIKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.APIKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.APIKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.APIKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeyHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.model.APIKey.Role = {
  READ_ONLY: 0,
  READ_WRITE: 1
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.model.APIKey.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.model.APIKey.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key_hash = 3;
 * @return {string}
 */
proto.model.APIKey.prototype.getKeyHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setKeyHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string project_id = 4;
 * @return {string}
 */
proto.model.APIKey.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Role role = 5;
 * @return {!proto.model.APIKey.Role}
 */
proto.model.APIKey.prototype.getRole = function() {
  return /** @type {!proto.model.APIKey.Role} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.model.APIKey.Role} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string creator = 6;
 * @return {string}
 */
proto.model.APIKey.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool disabled = 13;
 * @return {boolean}
 */
proto.model.APIKey.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional int64 created_at = 14;
 * @return {number}
 */
proto.model.APIKey.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 updated_at = 15;
 * @return {number}
 */
proto.model.APIKey.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.APIKey} returns this
 */
proto.model.APIKey.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


goog.object.extend(exports, proto.model);