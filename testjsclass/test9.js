const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
getOne();

async function getOne()
{console.log("b1")
var t=await findOne();
console.log(t)
console.log("b2")

}

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db(dbName);

        let collection = db.collection('Bottle_Batch');

        let query = { id: 28}

        let res = await collection.findOne(query);

        //console.log(res);
        return res
       

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}