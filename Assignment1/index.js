import {postalList} from "./postal.js";

postalList.map((item,i)=>{
    var Details=`My place name is ${item.place} and My place name is ${item.postcode}`
    console.log(Details)
})