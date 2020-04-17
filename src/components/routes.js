import React from 'reactn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    Home,
    Schedule,
    Ascension,
    Icemen,
    Lvc,
    Pineapple,
    RisingTide,
    PhotoGallery,
    VlaYouTube,
    ContactUs,
    ManagementTeam
} from './index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/schedule'><Schedule /></Route>
                <Route exact path='/teams/ascension'><Ascension /></Route>
                <Route exact path='/teams/icemen'><Icemen /></Route>
                <Route exact path='/teams/lvc'><Lvc /></Route>
                <Route exact path='/teams/pineapple'><Pineapple /></Route>
                <Route exact path='/teams/risingtide'><RisingTide /></Route>
                <Route exact path='/media/photogallery'><PhotoGallery /></Route>
                <Route exact path='/media/vlayoutube'><VlaYouTube /></Route>
                <Route exact path='/contactus'><ContactUs /></Route>
                <Route exact path='/managementteam'><ManagementTeam /></Route>
            </Switch>
        </Router>
    )
}
export default Routes;