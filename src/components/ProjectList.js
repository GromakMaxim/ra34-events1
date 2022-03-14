import React, {Component} from "react";
import Picture from "./Picture";

export default class ProjectList extends Component {

    constructor(props, context) {
        super(props, context);
        this.pics = [{
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards",
            id: 1,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites",
            id: 2,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites",
            id: 3,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites",
            id: 4,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards",
            id: 5
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites",
            id: 6,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites",
            id: 7,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards",
            id: 8,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites",
            id: 9,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers",
            id: 10,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites",
            id: 11,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards",
            id: 12,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites",
            id: 13
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites",
            id: 14,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards",
            id: 15,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites",
            id: 16,
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers",
            id: 17,
        }];
    }

    renderPicture(path, id) {
        return <Picture path={path} key={id}/>;
    }

    render() {
        let resultArr = [];
        if (this.props.actualFilter !== 'All') {
            let arr = this.pics.filter((pic) => {
                return pic.category === this.props.actualFilter
            });


            arr.forEach(i => {
                let pic = this.renderPicture(i.img, i.id);
                resultArr.push(pic);
            })
        } else {
            this.pics.forEach(i=>{
                let pic = this.renderPicture(i.img, i.id);
                resultArr.push(pic);
            });
        }

        return (
            <div className='list'>
                {resultArr}
            </div>

        );
    }
}
