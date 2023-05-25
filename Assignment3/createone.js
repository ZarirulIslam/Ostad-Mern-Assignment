const {client}=require("./dbconnect");

const insertOneData=async()=>{
    try{

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const data = {
            Name: "Zarirul",
            Id: "191-15-12497",
        }
        const result = await dropper.insertOne(data);
        console.log(`A dropper data was inserted with the _id: ${result.insertedId}`);
    }
    catch (error) {
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

insertOneData();