import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodList} from "../../actions/foodActions";
import Pagination from "react-js-pagination";
export const FoodList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchFoodList(curpage))
    },[curpage])
    // food_list={totalpage:686,food_list:[{},{},{}]}
    const food_list=useSelector((state)=> state.foods.food_list.food_list)
    const totalpage=useSelector((state)=>state.foods.food_list.totalpage)
    //console.log(food_list)
    //console.log("totalpage:"+totalpage)
    const handleChange=(page)=>{
        setCurpage(page)
    }
    return (
        <Fragment>
            <div className={"row"}>
                {food_list &&
                    food_list.map((food) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <img src={"http://www.menupan.com" + food.poster} alt=""/>
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
                        onChange={handleChange}
                        style={{"width":"100%"}}
                    />
                </div>

        </Fragment>

    )
}