import React from 'react'
import {Layout} from 'antd'
import {Switch,Route} from 'react-router-dom'
import Home from "../pages/Home";
import Theme from "../pages/Theme";
import Question from "../pages/Question";
import Sponsor from "../pages/Sponsor";
import OnlinePreview from "../pages/OnlinePreview/OnlinePreview";
const routerConfig = [{
    path:"/theme",
    component:<Theme/>,
},{
    path:"/question",
    component:<Question/>,
},{
    path:"/sponsor",
    component:<Sponsor/>,
},{
    path:"/online",
    component:<OnlinePreview/>,
},{
    path:"/",
    component:<Home/>
}]
const {Content} = Layout;
export default function (props) {
    return (
        <Content {...props}>
            <div >
                <Switch>
                    {routerConfig.map(({path,component})=><Route key={path} path={path}>{component}</Route>)}
                </Switch>
            </div>
        </Content>
    )
}
