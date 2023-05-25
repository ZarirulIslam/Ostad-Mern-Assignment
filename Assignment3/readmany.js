const {client}=require("./dbconnect");

const findManyData=async ()=>{
    try{

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const query = {};

        const cursor = dropper.find(query);

        if ((await cursor.count()) === 0) {
            console.log("No data found!");
        }
        else {
            const result = await cursor.toArray();

            await result.forEach(user=>console.log(user));
        }
    }
    catch (error){
        console.log("Error");
    }
    finally {
        await client.close();
    }
}

findManyData();