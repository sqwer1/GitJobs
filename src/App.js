import React from "react";
import s from "./app.component.css";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import JobsContainer from "./component/Jobs/jobsContainer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "./component/Profile/ProfileContainer";
import ProfileContainerWithHooks from "./component/Profile/ProfileContainerWithHooks";

const App = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <div className={s.intro}>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={"/jobs"}/>}/>
                    <Route path='/jobs' render={() => <JobsContainer/>}/>
                        <Route path='/profile/:profileId?' render={() => <ProfileContainerWithHooks/>}/>
                </Switch>
            </div>
        </Provider>
    </BrowserRouter>
}

export default App;