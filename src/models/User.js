const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
}, {
  timestamps: true,
  versionKey: false
});

UserSchema.methods.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.checkPassword = async function (receivedPassword) {
  return await bcrypt.compare(receivedPassword, this.password);
}

module.exports = model('User', UserSchema);