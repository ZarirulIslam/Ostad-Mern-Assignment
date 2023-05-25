const {client}=require("./dbconnect");

const deleteManyData=async ()=>{
    try {

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const query = { Class: "BSc" };

        const result = await dropper.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents");
    }
    catch (error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

deleteManyData();