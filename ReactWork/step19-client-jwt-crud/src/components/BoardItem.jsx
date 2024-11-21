import { Link } from "react-router-dom";
import "./BoardItem.css";
const BoardItem =({board})=>{
  console.log(board);
  return (
    <div className="BoardItem">
      <div className="title_writer">
        제목 :{board.title}  / 작성자 : ({board.member.name})
        </div>
      <div className="detailLink">
        <Link to={"/board/"+board.id} >상세보기 </Link>
      </div>
    </div>
  )
}

export default BoardItem;