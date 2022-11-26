const {client}=require("./dbconnect");

const insertManyData=async()=>{

    try {

        const myDatabase = client.db("assignment3");
        const dropper = myDatabase.collection("dropper");

        const data = [
            {Name: "Nahidul", Id: "191-15-12448"},
            {Name: "Imrul", Id: "191-15-12440"},
            {Name: "Hanzala", Id: "191-15-12404", Class: "BSc", City: "DSC"},
            {Name: "Akash", Id: "191-15-12491", Class: "BSc", City: "DSC"},
            {Name: "Ryan", Id: "192-15-13088", Class: "BSc", City: "DSC"},
            {Name: "Ariful", Id: "191-15-12850", Class: "BSc", City: "DSC"},
            {Name: "Musrat", Id: "192-15-13029", Class: "BSc", City: "DSC"}
        ];
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };

        const result = await dropper.insertMany(data, options);

        console.log(`${result.insertedCount} documents were inserted`);
    }
    catch (error){
        console.log("Error");
    }
    finally {
        await client.close();
    }

}
insertManyData();