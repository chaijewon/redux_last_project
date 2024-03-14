import {Fragment,useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchChefList} from "../../actions/recipeActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const ChefList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchChefList(curpage)) // action => reducer => store에 state저장
    }, [curpage]);
    // recipes => chef_list:{totalpage: chef_list}
    const chefList=useSelector((state)=>state.recipes.chef_list.chef_list)
    const totalpage=useSelector((state)=>state.recipes.chef_list.totalpage)
    const handleChange=(page)=>{
        setCurpage(page)
    }
    return (
        <Fragment>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td>
                            {chefList &&
                                chefList.map((c, key) =>
                                    <table className={"table"} key={key}>
                                        <tbody>
                                        <tr>
                                            <td width={"30%"} className={"text-center"} rowSpan={"2"}>
                                                <Link to={"/chef/detail/"+c.chef}>
                                                <img src={c.poster} style={{"width": "150px", "height": "100px"}}
                                                     className={"img-circle"}/>
                                                </Link>
                                            </td>
                                            <td colSpan={"4"}>
                                                <h3 style={{"color": "orange"}}><Link to={"/chef/detail/"+c.chef}>{c.chef}</Link></h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"text-center"}>
                                                <img src={"/icon/m1.png"}/>&nbsp;{c.mem_cont1}
                                            </td>
                                            <td className={"text-center"}>
                                                <img src={"/icon/m3.png"}/>&nbsp;{c.mem_cont3}
                                            </td>
                                            <td className={"text-center"}>
                                                <img src={"/icon/m4.png"}/>&nbsp;{c.mem_cont7}
                                            </td>
                                            <td className={"text-center"}>
                                                <img src={"/icon/m2.png"}/>&nbsp;{c.mem_cont2}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                )
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
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
