import {Fragment} from "react";
import './home.css'
import TopBar from "../../Components/TopBar";
import SideBar from "../../Components/SideBar";
import RightBar from "../../Components/RightBar";
import Feed from "../../Components/Feed";

export default function Home () {
    return(
        <Fragment>
            <TopBar/>
            <div className="homeContainer">
                <SideBar/>
                <Feed/>
                <RightBar/>
            </div>
        </Fragment>
    )

}