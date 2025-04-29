import Rightbar from "../../comonents/rightbar/Rightbar";
import Sidebar from "../../comonents/sidebar/Sidebar";
import Topbar from "../../comonents/topbar/Topbar";
import Feed from "../../comonents/feed/Feed";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}