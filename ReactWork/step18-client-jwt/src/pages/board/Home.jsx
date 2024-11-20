import BoardItem from "../../components/BoardItem";
import "./Home.css";

const Home =()=>{
    return (
      <div className="Home">
       <h1>전체게시물 LIST</h1>
       <BoardItem title={"Spring1"} writer={"장희정"}/>
       <BoardItem title={"Spring1"} writer={"장희정"}/>
       <BoardItem title={"Spring1"} writer={"장희정"}/>
       <BoardItem title={"Spring1"} writer={"장희정"}/>
      </div>
    )
  }
  
  export default Home;