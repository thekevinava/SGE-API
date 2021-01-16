import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.then((r:any) => r.getConnection().then((connection:any) => {
    connection.release();
    console.log('Conexión establecida con la Base de Datos');
}));

export default pool;