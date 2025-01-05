const {MongoClient}=require('mongodb')

const url="mongodb+srv://<username>:<password>@namastenodejs.kk0cg.mongodb.net/"

const client=new MongoClient(url)

const dbName='helloWorld'

async function  main() {
    await client.connect()
    console.log('Connected successfully')
    const db=client.db(dbName)
    const collection=db.collection("User")

    const data={
        "firstName":"Deep",
        "lastName":"Deep",
        "city":"New Jersey",
        "phoneNumber":"7894562"
    }

    const insert=await collection.insertOne(data)
    console.log('Inserted =>',insert)
    //read
    const find=await collection.find({}).toArray()
    console.log('Documents =>',find)

    const count=await collection.countDocuments()
    console.log('Count =>',count)
    return "done"
}

main().then(console.log).catch(console.error).finally(()=>client.close())