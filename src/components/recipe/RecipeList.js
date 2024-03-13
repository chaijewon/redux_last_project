import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import {fetchRecipeList} from "../../actions/recipeActions";
import Pagination from "react-js-pagination";
/*
    1. 파일 제작 => js / ts

       function RecipeList()
       {
       }
       export default RecipeList

       export const RecipeList=()=>{
          return (
            <div>Hello</div>
          )
       }
     2. Header => <Link to="">레시피</Link>
     3. App.js
        => <Route path="" element=""/>

     4. actions => types을 지정
     5. 해당 recipeActions => 함수제작
     6. 해당 recipeReducer => 등록 ==> store
     -------------------------------------------
     1번으로 다시 돌아온다
     => dispatch() => action호출
     => useSelector => store에 저장된 데이터 읽기
     => return에서 화면 출력

     => redux => 분산 (여러명이 동시에 개발)
        => 변경이 편리하다 (유지보수가 편리)
        => 데이터를 공유(store)해서 저장 : 모든 컴포넌트에서 데이터 읽기가 편리

        function App
        {
           const [name,setName]=useState("홍길동") => store
           return (
             <A name={name}/>
           )
        }
        function A(props)
        {
           return (
             <B name={props.name}/>
           )
        }
        function B(props)
        {
           return (
             <C name={props.name}/>
           )
        }
        function C(props)
        {
           return (
             <D name={props.name}/>
           )
        }
        function D(props)
        {
           const name=useSelect((state)=>state.name)
           return (

           )
        }
 */
export const RecipeList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchRecipeList(curpage))
    },[curpage])
    // food_list={totalpage:686,food_list:[{},{},{}]}
    const recipe_list=useSelector((state)=> state.recipes.recipe_list.recipe_list)
    const totalpage=useSelector((state)=>state.recipes.recipe_list.totalpage)
    //console.log(food_list)
    //console.log("totalpage:"+totalpage)
    const handleChange=(page)=>{
        setCurpage(page)
    }
    return (
        <Fragment>
            <div className={"row"}>
                {recipe_list &&
                    recipe_list.map((recipe) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <img src={recipe.poster} title={recipe.title}/>
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
                    style={{"width":"100%"}}
                />
            </div>

        </Fragment>

    )
}