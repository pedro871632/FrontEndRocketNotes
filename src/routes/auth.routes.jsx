import {Route,Routes} from "react-router-dom";

import { SingIn } from "../pages/SingIn";
import {SingnUp} from "../pages/SingnUp";

export function AuthRoutes(){
    return (
        <Routes>

            <Route path="/" element={<SingIn/>}/>

            <Route path="/register" element={<SingnUp/>}/>

        </Routes>

    );
}