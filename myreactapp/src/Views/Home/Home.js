// import React, {useState } from "react";
import "../Home/Home.css";
import I18n from "../../utils/i18n";
function Home(){
    // const [language , setlanguage] = useState("mr");
    const usersCount = 50;
return(
 



    <div>
        <h1> {I18n("welcomeMessage")}</h1>      
        <p>{I18n("normalMessage")}</p>

        <h3> {I18n("greetingMessag")} </h3>

        <select 
            defaultValue={localStorage.getItem("lnaguage")}
             onChange={(e)=>{
             localStorage.setItem("language" , e.target.value);
            window.location.reload();
        }}>
             <option value="mr">Marathi</option>
             <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>
    
       <p>{I18n("userStatMessage" , "<StuedentCout>" , usersCount) } </p>
    </div>


)
}

export default Home;