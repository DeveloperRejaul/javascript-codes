// ECMAscript 6
class Setting {
  // Type constent (readonly field)
  static get maxConnection() {
    return 3;
  }
}

let max = String.maxConnection;

console.log(max);

// previous verstion
function Config() {}

// type field
Config.Host = '10.0.0.1';
Config.port = 0;

// type method
Config.getConnection = function () {
  return Config.Host + ':' + Config.port;
};

Config.port = 52;
var connection = Config.getConnection();

Config.Host = '10.0.0.3';
connection = Config.getConnection();

connection;
