const {client}=require("./dbconnect");

const deleteOneData=async ()=>{
    try{

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const query = { Name: "Musrat" };
        const result = await dropper.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }

    }
    catch (error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

deleteOneData();