import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const ViewHolder =(probs)=>{
    return (
        <div>
            <div class = "flex w-full min-h-screen font-sans bg-gray-800">
                <SideBar/>
                <div className="flex flex-col w-full">
                    <Header/>
                </div>
            </div>
        </div>
    );
}
export default ViewHolder;