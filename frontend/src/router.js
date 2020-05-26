import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react'
import Logon from './pages/logon'
import Register from './pages/Register'
import Profile from './pages/profile'
import NewIncident from './pages/NewIncident'
//cria o arquivo de rotas no react
export default function Routes() {
    //Rota raiz vai receber o componente de logon
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 

                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />

                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}
