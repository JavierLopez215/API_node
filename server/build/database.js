"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
// pool.then(function(p){
//     return  p.getConnection()
//   }).then(function(){
//     p.releaseConnection(connection);
//     console.log('DB is connected');
//   })
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
// const conn = pool.then((r:any)=> r.getConnection()
// .then((connection :any) =>{
//     console.log('DB is connected');
//     return r.releaseConnection(connection);
// }));
// pool.getConnection((err, connection) => {
//     if (err) {
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             console.error('Database connection was closed.')
//         }
//         if (err.code === 'ER_CON_COUNT_ERROR') {
//             console.error('Database has too many connections.')
//         }
//         if (err.code === 'ECONNREFUSED') {
//             console.error('Database connection was refused.')
//         }
//     }
//     if (connection) connection.release()
//  return
// })
exports.default = pool;
