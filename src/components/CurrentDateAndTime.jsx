import React from "react";

const CurrentDateAndTime = (newDateAndTime) => {
    function addNewDate() {
        let today = new Date()
        let newDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + ' at ' + today.getHours() + ':' + today.getMinutes();
        newDateAndTime = newDate;
        return newDate;
}
    addNewDate();
    
    return ( 
        <p>{addNewDate()}</p>
     );
}
 
export default CurrentDateAndTime;