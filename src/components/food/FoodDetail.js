import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodDetail} from "../../actions/foodActions";
import {useNavigate,useParams} from "react-router-dom";

/*
          dispatch(action함수호출)   dispatch(action)
                    |                     |
                  서버연결후 데이터 읽기  읽은 데이터를 처리
                                       state에 저장 => state (웹에 필요한 모든 데이터)
     React =======> actions =======> reducer =======> store
                                                        |
                                                    모든 React Component에서 state에 데이터를 사용
    =======        ==========================        =======
     View                 Model                      Controller  ==> Front에서 MVC
                            | 나눠서 작업
     1. 단반향 통신 => 공유하는 데이터를 만들어서 처리 (양방향)
     2. 데이터 관리가 쉽다
     3. 여러명의 개발자가 동시에 개발이 가능
     *** React / Redux => 장단점 => 동작
 */
function FoodDetail()
{
    const {fno}=useParams()
    // getParameter
    const nav=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchFoodDetail(fno))
    },[])
    const foodDetail=useSelector((state)=>state.foods.food_detail)
    //jsx => XML
    /*
            React.createElement('div','row',
                 React.createElement('table','table'
                 React.createElement('tbody'...
            render
     */
    return (
        <>
         <div className={"row"}>
           <table className={"table"}>
               <tbody>
               <tr>
                   <td width={"30px"} className={"text-center"} rowSpan={"8"}>
                       <img src={"http://www.menupan.com" + foodDetail.poster}
                            style={{"width": "280px", "height": "250px"}}/>
                   </td>
                   <td colSpan={"2"}>
                       <h3>{foodDetail.name}&nbsp;<span style={{"color": "orange"}}>{foodDetail.score}</span></h3>
                   </td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>주소</td>
                   <td width={"50%"}>{foodDetail.address}</td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>전화</td>
                   <td width={"50%"}>{foodDetail.phone}</td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>음식종류</td>
                   <td width={"50%"}>{foodDetail.type}</td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>가격대</td>
                   <td width={"50%"}>{foodDetail.price}</td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>영업시간</td>
                   <td width={"50%"}>{foodDetail.time}</td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>좌석</td>
                   <td width={"50%"}>{foodDetail.seat}</td>
               </tr>
               <tr>
                   <td className={"text-center"} width={"20%"}>테마</td>
                   <td width={"50%"}>{foodDetail.theme}</td>
               </tr>
               <tr>
                   <td colSpan={"3"} className={"text-right"}>
                       <button className={"btn-sm btn-danger"}
                        onClick={()=>nav(-1)}
                       >목록</button>
                   </td>
               </tr>
               </tbody>
           </table>
         </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>

            </div>
        </>
    )
}
export default FoodDetail