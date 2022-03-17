import "./toPBar.css"
import Search from '@mui/icons-material/SearchSharp'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';

export default function TopBar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">MonResseau</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input className="searchInput" placeholder="Rechercher de Amid, pots ou video" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcon">
                    <div className="topbarIconIten">
                        <PersonSharpIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconIten">
                        <ChatSharpIcon/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconIten">
                        <NotificationsSharpIcon/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src={require('../assets/person/un.jpg')} alt="" className="topbarImg"/>

            </div>
        </div>
    )
}