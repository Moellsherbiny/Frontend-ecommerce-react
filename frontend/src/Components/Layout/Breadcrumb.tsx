import { Breadcrumb } from "antd";
import { Link } from "react-router";


function AppBreadcrumb() {
    const getCurrentPath = window.location.pathname.split("/")
    let currentPath: any = [{title:<Link to="/">Home</Link>}]

    if (getCurrentPath.length > 1)
    {
        getCurrentPath.map( path => {currentPath.push({title:path})})

    }
  return (
        <Breadcrumb style={{margin:"40px 0"}} items={currentPath}/>
    
  )
}

export default AppBreadcrumb
