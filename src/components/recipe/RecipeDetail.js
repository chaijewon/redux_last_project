import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchRecipeDetailData} from "../../actions/recipeActions";
import foodDetail from "../food/FoodDetail";

export const RecipeDetail=()=>{
    const {no}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchRecipeDetailData(no))
    }, []);
    const recipeDetail=useSelector((state)=>state.recipes.recipe_detail.detail)
    //console.log(recipeDetail)
    const foodmake=useSelector((state)=>state.recipes.recipe_detail.make)
    const images=useSelector((state)=>state.recipes.recipe_detail.images)
        return (
            recipeDetail &&
       <div className={"row"}>
           <table className={"table"}>
               <tbody>
               <tr>
                   <td className={"text-center"} colSpan={"3"}>
                       <img src={recipeDetail.poster} style={{"width": "700px", "height": "250px"}}/>
                   </td>
               </tr>
               <tr>
                   <td className={"text-center"} colSpan={"3"}><h3>{recipeDetail.title}</h3></td>
               </tr>
               <tr>
                   <td className={"text-center"} colSpan={"3"}>{recipeDetail.content}</td>
               </tr>
               <tr>
                   <td className={"text-center"}><img src={"/icon/a1.png"}/></td>
                   <td className={"text-center"}><img src={"/icon/a2.png"}/></td>
                   <td className={"text-center"}><img src={"/icon/a3.png"}/></td>
               </tr>
               <tr>
                   <td className={"text-center"}>{recipeDetail.info1}</td>
                   <td className={"text-center"}>{recipeDetail.info2}</td>
                   <td className={"text-center"}>{recipeDetail.info3}</td>
               </tr>
               </tbody>
           </table>
           <table className={"table"}>
               <tbody>
                <tr>
                    <td><h3>재료</h3></td>
                </tr>
               <tr>
                   <td>
                       {recipeDetail.stuff}
                   </td>
               </tr>
               </tbody>
           </table>
           <table className={"table"}>

               <tbody>
               <tr>
                   <td colSpan={"2"}><h3>조리순서</h3></td>
               </tr>
               { foodmake &&
                   foodmake.map((fm,index)=>
                     <tr>
                         <td className={"text-left"}>{fm}</td>
                         <td className={"text-right"}>
                             <img src={images[index]} style={{"width":"100px","height":"80px"}}/>
                         </td>
                     </tr>
                   )

               }
               <tr>
                   <td width={"30%"} rowSpan={"2"}>
                       <img src={recipeDetail.chef_poster} style={{"width":"150px","height":"100px"}}/>
                   </td>
                   <td width={"70%"}>{recipeDetail.chef}</td>
               </tr>
               <tr>
                   <td>{recipeDetail.chef_profile}</td>
               </tr>
               </tbody>
           </table>
           <table className={"table"}>
               <tr>
                   <td className={"text-right"}>
                       <button className={"btn-sm btn-primary"}
                       onClick={()=>nav(-1)}
                       >목록</button>
                   </td>
               </tr>
           </table>
       </div>
    )
}