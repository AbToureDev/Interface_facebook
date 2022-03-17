import './SideBar.css'
import RssFeedSharpIcon from '@mui/icons-material/RssFeedSharp';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import SlowMotionVideoSharpIcon from '@mui/icons-material/SlowMotionVideoSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import BookmarksSharpIcon from '@mui/icons-material/BookmarksSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import InsertInvitationSharpIcon from '@mui/icons-material/InsertInvitationSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';

export default function  SideBar() {
    return(
        <div className="SideBar">
            <div className="SideWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <SlowMotionVideoSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <PeopleSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">BookMarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Question</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <InsertInvitationSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolSharpIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Couses</span>
                    </li>
                </ul>
                <button className="sidebarBoutton"> Show More</button>
                <hr className='SideBarHr'/>
                <ul className="sidebarFrindeList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                        <span className="sidebarFriendNam">Toure Aboubacar</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                        <span className="sidebarFriendNam">Toure Aboubacar</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                        <span className="sidebarFriendNam">Toure Aboubacar</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                        <span className="sidebarFriendNam">Toure Aboubacar</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                        <span className="sidebarFriendNam">Toure Aboubacar</span>
                    </li><li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                    <span className="sidebarFriendNam">Toure Aboubacar</span>
                </li><li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                    <span className="sidebarFriendNam">Toure Aboubacar</span>
                </li><li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                    <span className="sidebarFriendNam">Toure Aboubacar</span>
                </li><li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                    <span className="sidebarFriendNam">Toure Aboubacar</span>
                </li><li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={require('../assets/person/2.jpg')} alt=""/>
                    <span className="sidebarFriendNam">Toure Aboubacar</span>
                </li>
                </ul>
            </div>
        </div>
    )
}