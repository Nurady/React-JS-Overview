import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Home.css';

import BlogPost from '../pages/BlogPost/BlogPost';
import LifeCycleComponent from '../pages/LifeCycleComponent/LifeCycleComponent';
import Product from '../pages/Product/Product';
import YoutubeComponentPage from '../pages/YoutubeComponentPage/YoutubeComponentPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';


class Home extends Component {
    render () {
        return (
            <Router>
                <>
                    {/* Komponen Global, sama dengan anchor atau href pada HTML*/}
                    {/* to adalah PROPS link tujuan */}

                    <div className="navigation">
                        <Link to="/">Blog Post</Link>                       
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Life Cycle</Link>
                        <Link to="/youtube">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>

                    {/* Fungsi Route memanggil dan menampilkan komponen */}
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" exact component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComponent} />
                    <Route path="/youtube" component={YoutubeComponentPage} />
                    <Route path="/hooks" component={Hooks} />
                </>
            </Router>  
        )
    };
};

export default GlobalProvider (Home);