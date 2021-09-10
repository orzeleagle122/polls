import React, {useEffect} from 'react';
import Navbar from "../organisms/Navbar/Navbar";
import {useSelector, useDispatch} from "../../redux/store";
import {getUserPolls} from "../../redux/slices/poll";
import AwesomeSlider from 'react-awesome-slider';
import {Route, Switch} from "react-router-dom";
import {routers} from "../../router";
import img1 from "assets/images/1.jpg"
import img2 from "assets/images/2.jpg"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {useStyles} from 'components/template/styles';

const slides = [
    {title: 'First item', description: 'Lorem ipsum', img: img1},
    {title: 'Second item', description: 'Lorem ipsum', img: img2}
];


const MainTemplate = () => {
    const polls = useSelector(state => state.polls.userPolls);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getUserPolls());
    }, [dispatch])

    return (
        <>
            <Navbar/>

            <Slider>
                {slides.map((slide, index) => <div key={index}>
                    <img src={slide.img} alt={slide.title} className={classes.sliderImg}/>
                </div>)}
            </Slider>
            <Switch>
                <Route path={routers.home}>

                </Route>
            </Switch>
        </>
    );
};

export default MainTemplate;
