'use client'

import React from 'react';
import BasicHeader from "@component/common/header/BasicHeader";
import {basicAnim} from "@motion/BasicAnim";
import {motion} from "framer-motion";
import LeftSidebar from "@component/common/leftSidebar";
import RightSidebar from "@component/common/rightSidebar";
import BasicFooter from "@component/common/footer/BasicFooter";

type PropsType = {
    children: React.ReactNode
}
const BasicLayout = (props:PropsType) => {
    return (
        <>
            <div className={'overflow-hidden'}>
                <BasicHeader></BasicHeader>
                <LeftSidebar></LeftSidebar>
                {/*<RightSidebar></RightSidebar>*/}
                <motion.div className="flex text-black dark:text-white" initial={basicAnim.initial} animate={basicAnim.animate}>
                    {props.children}
                </motion.div>
                {/*<BasicFooter></BasicFooter>*/}
            </div>
        </>
    );
};

export default BasicLayout;