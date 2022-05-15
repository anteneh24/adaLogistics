
import React, { useState } from "react";
import { ReactDOM } from "react";

const SideBar = (porbs) =>{
    const [clickedItem , setClickedItem] = useState("home")

    return (
        <div className="flex flex-col gap-y-4 items-center py-8 w-16 bg-gray-900">
            <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
                <img className="w-6 h-6 fill-current" src={require("../icons/store.svg").default}/>
            </button>
            <div className="flex flex-col gap-y-2 items-end self-end text-center">
                <div className={clickedItem === "home"?"bg-gray-800 rounded-l-xl relative after:absolute after:bg-white after: after:h-8 after:-top-8 after:rounded-br-xl hover:bg-gray-800":"hover:bg-gray-800"}>
                    <button className={clickedItem === "home"?"p-1 my-4 mr-4 ml-3 rounded-xl text-white shadow-sm shadow-primary bg-primary w-10 h-10":
                    "p-1 my-4 mr-4 ml-3 rounded-xl text-primary "} onClick={()=>setClickedItem("home")}>
                        <i className="fa-solid fa-house w-6 h-6 fill-current"></i>
                    </button>
                </div>
                <div className={clickedItem === "company"?"bg-gray-800 rounded-l-xl relative before:absolute before:h-8 before:-top-8 before:rounded-br-xl hover:bg-gray-800":"hover:bg-gray-800"}>
                    <button className={clickedItem === "company"?"p-1 my-4 mr-4 ml-3 rounded-xl text-white shadow-primary bg-primary w-10 h-10":
                    "p-1 my-4 mr-4 ml-3 rounded-xl text-primary "} onClick={()=>setClickedItem("company")}>
                        <i className="fa-solid fa-house w-6 h-6 fill-current"></i>
                    </button>
                </div>
                <div className={clickedItem === "distributors"?"bg-gray-800 rounded-l-xl relative before:absolute before:h-8 before:-top-8 before:rounded-br-xl hover:bg-gray-800":"hover:bg-gray-800"}>
                    <button className={clickedItem === "distributors"?"p-1 my-4 mr-4 ml-3 rounded-xl text-white shadow-primary bg-primary w-10 h-10":
                    "p-1 my-4 mr-4 ml-3 rounded-xl text-primary "} onClick={()=>setClickedItem("distributors")}>
                        <i className="fa-solid fa-house w-6 h-6 fill-current"></i>
                    </button>
                </div>
                <div className={clickedItem === "agents"?"bg-gray-800 rounded-l-xl relative before:absolute before:h-8 before:-top-8 before:rounded-br-xl hover:bg-gray-800":"hover:bg-gray-800"}>
                    <button className={clickedItem === "agents"?"p-1 my-4 mr-4 ml-3 rounded-xl text-white shadow-primary bg-primary w-10 h-10":
                    "p-1 my-4 mr-4 ml-3 rounded-xl text-primary "} onClick={()=>setClickedItem("agents")}>
                        <i className="fa-solid fa-house w-6 h-6 fill-current"></i>
                    </button>
                </div>
                <div className={clickedItem === "customers"?"bg-gray-800 rounded-l-xl relative before:absolute before:h-8 before:-top-8 before:rounded-br-xl hover:bg-gray-800":"hover:bg-gray-800"}>
                    <button className={clickedItem === "customers"?"p-1 my-4 mr-4 ml-3 rounded-xl text-white shadow-primary bg-primary w-10 h-10":
                    "p-1 my-4 mr-4 ml-3 rounded-xl text-primary "} onClick={()=>setClickedItem("customers")}>
                        <i className="fa-solid fa-house w-6 h-6 fill-current"></i>
                    </button>
                </div>
                

                <div className={clickedItem === "users"?"bg-gray-800 rounded-l-xl relative before:absolute before:h-8 before:-top-8 before:rounded-br-xl hover:bg-gray-800":"hover:bg-gray-800"}>
                    <button className={clickedItem === "users"?"p-1 my-4 mr-4 ml-3 rounded-xl text-white shadow-primary bg-primary w-10 h-10":
                    "p-1 my-4 mr-4 ml-3 rounded-xl text-primary "} onClick={()=>setClickedItem("users")}>
                        <i className="fa-solid fa-house w-6 h-6 fill-current"></i>
                    </button>
                </div>
            </div>
            
        </div>
    ); 
}

export default SideBar;  