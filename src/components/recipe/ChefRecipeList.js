import {Fragment,useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchRecipeChef} from "../../actions/recipeActions";
import Pagination from "react-js-pagination";

export const ChefRecipeList=()=>{
    const [curpage,setCurpage]=useState(1)
    const {chef}=useParams()
    const dispatch=useDispatch()

    useEffect(() => {
       dispatch(fetchRecipeChef(curpage,chef))
    }, [curpage]);

    const chefRecipeData=useSelector((state)=>state.recipes.recipe_chef.crList)
    const totalpage=useSelector((state)=>state.recipes.recipe_chef.totalpage)
    const handleChange=(page)=>{
        setCurpage(page)
    }
    return (
        <Fragment>
            <div className={"row"}>
                {chefRecipeData &&
                    chefRecipeData.map((recipe) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <Link to={"/recipe/detail/" + recipe.no}>
                                        <img src={recipe.poster} title={recipe.title}/>
                                    </Link>

                                </div>

                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">

                                            <div className="post-author">
                                                <a href="#">{recipe.chef}</a>
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
                    style={{"width": "100%"}}
                />
            </div>
        </Fragment>
    )

}