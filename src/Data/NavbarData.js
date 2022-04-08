import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import * as IoIcons from "react-icons/io"
export const NavbarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdIcons.MdOutlineDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/Projects',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/Calendar',
        icon: <IoIcons.IoIosCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Tasks',
        path: '/Tasks',
        icon: <FaIcons.FaTasks/>,
        cName: 'nav-text'
    },
    {
        title: 'Archive',
        path: '/Archive',
        icon: <MdIcons.MdOutlineArchive />,
        cName: 'nav-text'
    },

]