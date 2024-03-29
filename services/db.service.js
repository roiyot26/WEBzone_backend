const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

// Database Config
const dbName = 'wap_db';
let dbConn = null;

async function getCollection(collectionName) {
    try {
        const db = await connect();
        const collection = await db.collection(collectionName);
        return collection;
    } catch (err) {
        logger.error('Failed to get Mongo collection', err);
        throw err;
    }
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect('mongodb+srv://roiyot26:MAC1oDKw1VjCji5l@cluster0.hwpnvmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        logger.error('Cannot Connect to DB', err);
        throw err;
    }
}


module.exports = {
    getCollection
}
