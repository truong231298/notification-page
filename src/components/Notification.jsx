import React from "react";
import Answer from "./answer";
import { useState } from "react";

const Notifications = ({ image, name, paragrap, imParagrap, time, isRead }) => {
    //set value for show and hide answer
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="p-2 max-w-4xl">
            <div className="flex flex-row items-center gap-2 bg-grayish-blue-1 rounded-lg" onClick={() => setShowAnswer(!showAnswer)}>
                <img src={image} alt="" className="w-16 h-16 p-2" />
                <div className="flex flex-col">    
                    <div className="font-bold hover:text-blue-500 cursor-pointer block gap-1 sm:flex"> {name}<p className="text-Grayish-blue">{paragrap}</p>
                        <p className="text-Grayish-blue font-bold hover:text-blue-500 cursor-pointer">{imParagrap}</p>
                        {(!isRead) ? <p className="text-red-500 text-2xl">*</p> : "" }
                        
                    </div>
              
                    <span className="text-Grayish-blue"> {time}</span>
                </div>
            </div>
            {/**show and hide answer */}
            {showAnswer && (isRead == true) ? <Answer /> : ""}

        </div>
    );
}

export default Notifications;