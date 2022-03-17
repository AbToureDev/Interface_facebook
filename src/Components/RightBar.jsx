import './RightBar.css'
export default function RightBar() {
    return(
        <div className="RightBar">
            <div className="rightbarWrapper">
                <div className="birthdayConatainer">
                    <img className="birthdayIng" src={require('../assets/gift.png')} alt=""/>
                    <span className="birthdayText">
                        <b>Toure Aicha</b> and <b>3 other friends</b> have et birthday today
                    </span>
                </div>
                <img src={require('../assets/ad.png')} alt="" className="rightbarAD"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Toure Aboubacar</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Toure Aboubacar</span>
                    </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={require('../assets/person/4.jpg')} alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Toure Aboubacar</span>
                </li>

                </ul>
            </div>
        </div>
    )

}