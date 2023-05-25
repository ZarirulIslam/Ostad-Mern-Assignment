const {client}=require("./dbconnect");

const updateManyData=async ()=>{
    try{

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const filter = {};
        const updateData = {$set: {City: "Daffodil Smart City"}};

        const result = await dropper.updateMany(filter, updateData);
        console.log(`Updated ${result.modifiedCount} data`);

    }
    catch (error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

updateManyData();