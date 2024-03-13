import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodFind} from "../../actions/foodActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
// export const FoodFind=function(){}
export const FoodFind=()=>{
    const [address,setAddress]=useState("마포")
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchFoodFind(curpage,address))
    },[address,curpage]) // 재호출
    const findList=useSelector((state)=> state.foods.find_list.find_list)
    const totalpage=useSelector((state)=>state.foods.find_list.totalpage)
    const findChange=(e)=>{
        setAddress(e.target.value)
    }
    const pageChange=(page)=>{
        setCurpage(page)
    }
    return (
        <>
            <div className={"row"}>
                <input type={"text"} size={"20"} className={"input-sm"}
                  onChange={findChange} value={address}
                />
                <button className={"btn-sm btn-danger"}>검색</button>
            </div>
            <div style={{"height": "20px"}}></div>
            <div className={"row"}>
                {findList &&
                    findList.map((food) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <img src={"http://www.menupan.com"+food.poster}/>
                                </div>

                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">

                                            <div className="post-author">
                                                <a href="#">{food.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"text-center"}>
                <Pagination
                    activePage={curpage}
                    itemsCountPerPage={12}
                    totalItemsCount={totalpage}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={pageChange}
                    style={{"width": "100%"}}
                />
            </div>
        </>
    )
}