import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App: React.FC = () => <>
    <Router>
        <Switch>
            <Route path='/.well-known/acme-challenge/QKvmMg1sYEAtf3Z6XHN4ogKnfplHDl67oKgtEzj7IJ0'>
                QKvmMg1sYEAtf3Z6XHN4ogKnfplHDl67oKgtEzj7IJ0.BxLnj-VcmdVXujyF0rBFpoJrfDtqnp3FwLjU5YOdag0
            </Route>
            <Route path='/'>
                <div className="App">
                    <header className="App-header">
                        <p>Welcome to NACCC 2020 Boston</p>
                        <p>Please email contact@naccc2020.com with any inquiries</p>
                        <p>We can't wait to see you Labor Day weekend 2020!</p>
                    </header>
                </div>
            </Route>
        </Switch>
    </Router>
</>
