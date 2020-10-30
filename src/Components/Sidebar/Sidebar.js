import React from 'react'
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css";
import {useStateValue} from "../../StateProvider";

function Sidebar() {

    const [{user}, disapatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
            src={user.photoURL} 
            title={user.displayName} />
            <SidebarRow 
            Icon={LocalHospitalIcon}
            title="Tea_Developers"
            />

            <SidebarRow 
            title="Pages" 
            Icon={EmojiFlagsIcon}
            />

            <SidebarRow 
            Icon={PeopleIcon}
            title="Friends"
            />

            <SidebarRow
            Icon={ChatIcon}
            title="Messenger"
            />

            <SidebarRow
            Icon={StorefrontIcon}
            title="MarketPlacee"
            />

            <SidebarRow
            Icon={VideoLibraryIcon}
            title="videos"
            />

            <SidebarRow
            Icon={ExpandMoreIcon}
            />
        </div>
    )
}

export default Sidebar
