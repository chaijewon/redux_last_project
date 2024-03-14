import {Fragment,useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {boardList} from "../../actions/boardActions";

export const BoardList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispath=useDispatch()
    useEffect(()=>{
        //action에 전송 => reducer로 전송 => store에 state를 저장
        dispath(boardList(curpage))
    },[curpage])
    // react / vue / redux / vuex => 데이터를 관리 프로그램 (state=> 상태 변화 프로그램)
    // react => redux => redux-saga => mobx => react-query , recoil , react-toolkit ...
    // --------------                         -------------          --- 초기화
    //  JSP     MVC          Spring            Spring-Boot   ------ interface
    // store에 저장된 데이터를 읽어 온다 => useSelector
    const board_list=useSelector((state)=>state.boards.board_list.board_list)
    const totalpage=useSelector((state)=>state.boards.board_list.totalpage)
    return (
        <Fragment>
            <h3 className={"text-center"}>자유 게시판</h3>
            <div className={"row"} style={{"width":"800px"}}>
                <table className={"table"}>
                    <tbody>
                     <tr>
                      <td>
                          <Link to={"/board/insert"} className={"btn btn-sm btn-primary"}>새글</Link>
                      </td>
                     </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <thead>
                    <tr className={"danger"}>
                        <th className={"text-center"} width={"10%"}>번호</th>
                        <th className={"text-center"} width={"45%"}>제목</th>
                        <th className={"text-center"} width={"15%"}>이름</th>
                        <th className={"text-center"} width={"20%"}>작성일</th>
                        <th className={"text-center"} width={"10%"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        board_list &&
                        board_list.map((vo)=>
                            <tr>
                                <td className={"text-center"} width={"10%"}>{vo.no}</td>
                                <td width={"45%"}><Link to={"/board/detail/"+vo.no}>{vo.subject}</Link></td>
                                <td className={"text-center"} width={"15%"}>{vo.name}</td>
                                <td className={"text-center"} width={"20%"}>{vo.regdate}</td>
                                <td className={"text-center"} width={"10%"}>{vo.hit}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"text-center"}>
                    <button className={"btn-sm btn-warning"}>이전</button>
                    {curpage} page / {totalpage} pages
                    <button className={"btn-sm btn-info"}>다음</button>
            </div>

        </Fragment>

    )

}