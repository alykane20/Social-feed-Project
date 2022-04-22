import React from "react";

const Datetime = ()=> {

    let showdate=new Date();
    let displaydate=(showdate.getMonth()+1)+'/'+showdate.getDate()+'/'+showdate.getFullYear();
    console.log(displaydate)
    let date=showdate.toDateString();
    return(
        <div> 
            <center>
            {date}      
            </center>
        </div>

    );
}

export default Datetime;