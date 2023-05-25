const {client}=require("./dbconnect");

const updateOneData=async ()=>{
    try {
        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const filter = { Name: "Hanzala" };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const updateData = {
            $set: {
                Name: "Hanzala Ahmed"
            },
        };
        const result = await dropper.updateOne(filter, updateData, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    }
    catch (error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

updateOneData();