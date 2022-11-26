const {client}=require("./dbconnect");

const findOneData=async()=>{
    try{

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const query = { Name: "Zarirul" };

        const result = await dropper.findOne(query);
        // since this method returns the matched document, not a cursor, print it directly
        console.log(result);
    }
    catch (error) {
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

findOneData();