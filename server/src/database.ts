import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

// pool.then(function(p){
    
//     return  p.getConnection()
      
//   }).then(function(){
//     p.releaseConnection(connection);
//     console.log('DB is connected');
//   })

pool.getConnection()
.then(connection =>{
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

export default pool;

