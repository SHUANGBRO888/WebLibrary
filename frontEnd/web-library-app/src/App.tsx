import React from 'react';
import './App.css';

import {Footer} from "./Layout/NavbarAndFooter/Footer";
import {Navbar} from "./Layout/NavbarAndFooter/Navbar";
import {HomePages} from "./Layout/HomePages/HomePages";
import {SearchBooksPage} from "./Layout/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {BookCheckOutPage} from "./Layout/BookCheckOutPage/BookCheckOutPage";
import {oktaConfig} from "./Lib/oktaConfig";
import {OktaAuth, toRelativeUrl} from "@okta/okta-auth-js";
import {LoginCallback, SecureRoute, Security} from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import {ReviewListPage} from "./Layout/BookCheckOutPage/ReviewListPage/ReviewListPage";
import {ShelfPage} from "./Layout/ShelfPage/ShelfPage";
import {MessagePage} from "./Layout/MessagesPage/MessagePage";
import {ManageLibraryPage} from "./Layout/ManageLibraryPage/ManageLibraryPage";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

    // Auth
    const customAuthHandler = () => {
        history.push('/login');
    }

    const history = useHistory();
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
        history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };


    return (
        <div className='d-flex flex-column min-vh-100'>
            <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
                <Navbar/>
                <div className='flex-grow-1'>
                    <Switch>
                        <Route path='/' exact>
                            <Redirect to='/home'/>
                        </Route>
                        <Route path='/home'>
                            <HomePages/>
                        </Route>
                        <Route path='/search'>
                            <SearchBooksPage/>
                        </Route>
                        <Route path='/reviewlist/:bookId'>
                            <ReviewListPage/>
                        </Route>
                        <Route path='/checkout/:bookId'>
                            <BookCheckOutPage/>
                        </Route>
                        <Route path='/login' render={
                            () => <LoginWidget config={oktaConfig}/>
                        }
                        />
                        <Route path='/login/callback' component={LoginCallback}/>
                        <SecureRoute path='/shelf'> <ShelfPage/></SecureRoute>
                        <SecureRoute path='/messages'> <MessagePage/></SecureRoute>
                        <SecureRoute path='/admin'> <ManageLibraryPage/></SecureRoute>
                    </Switch>
                </div>
                <Footer/>
            </Security>
        </div>
    );
}

