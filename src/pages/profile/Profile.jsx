import "./profile.css";
import Rightbar  from "../../comonents/rightbar/Rightbar";
import Sidebar from "../../comonents/sidebar/Sidebar";
import Topbar from "../../comonents/topbar/Topbar";
import Feed from "../../comonents/feed/Feed";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/person/A1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/A1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Rohit Bhardwaj</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}