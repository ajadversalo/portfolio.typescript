import React from 'react';

import { Divider } from "antd";

type AboutProps = {
    content: string[]
}

function About(props: any) {
    const { content } = props;

    return(
        <div className={"text-white m-4 h-screen"}>                        
            <h2 className={"text-2xl"}>About Me</h2> 
            <Divider className="bg-white"/>
            <div className="h-100 flex items-center justify-center w-full text-lg">
                <div className={"p-4 h-[15rem]"}>
                    {content.map((c: any, index: number) => {
                        return(<p className="pb-4" key={`paragraph-${index}`}>{c}</p>)
                    })}                
                </div> 
            </div>
        </div>
    );
}

export default About;
