
var exec = require('child_process').execSync, child;

let _data = null;

const UserStore = {
  set: () => {
    _data = exec('java TestAI').toString();
  },
  get: () => _data,
}

Object.freeze(UserStore);
module.exports = UserStore;
