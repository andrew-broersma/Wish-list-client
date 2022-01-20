import React from 'react';
import './landing.css';
import MappingFun from './MappingFun';

class Landing extends React.Component {
    constructor() {
        super()
        this.state = {
            genericFetch: {},
            url: ""
        }
    }

    makeUrl() {
        const baseURL = "https://api.rawg.io/api/";
        const key = process.env.REACT_APP_API_KEY;
        let date = new Date().toISOString().slice(0, 10);
        let lastTwoWeek = () => {
        var today = new Date();
        var lastTwoWeek = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 14
        );
    return lastTwoWeek.toISOString().slice(0, 10);
    };

    let urlNew = baseURL + "games?key=" + key + "&dates=" + lastTwoWeek() + "," + date + "&platforms=4" + "&ordering=-metacritic"

        return urlNew
    }

    // browsingGames(data) {
    //         // let data = this.state.genericFetch
    //         console.log(data);
    //         return(
    //         data.results.map((index, gameData) => <h3>{gameData.slug}</h3>));
            // let cardData = firstDive.forEach((index) => {
            //     console.log(index);
    
                // let h5 = document.createElement("h5");
                // let h6 = document.createElement("h6");
                // let h6_2 = document.createElement("h6");
                // let img = document.createElement("img");
                // let p = document.createElement("p");
                // let link = document.createElement("a");
                // let div = document.createElement("div");
                // let div2 = document.createElement("div");
                // let br = document.createElement("br");
                // let wrapper = document.createElement("div");
    
                // let gName = index.name;
                // console.log(gName);
                // let mScore = function () {
                //     if (index.metacritic === null) {
                //         return "No Metacritic Score Yet"
                //     } else {
                //         return index.metacritic
                //     }
                // };
                // console.log(mScore());
                // let genre = function () {
                //     if (index.genres.length > 0) {
                //         return index.genres[0].name; // remember to check spelling
                //     } else {
                //         return "No genre listed";
                //     }
                // };
                // console.log(genre());
                // let background = index.background_image;
                // console.log(background);
                // let stores = index.stores[0].store.name; // learn how to read
                // console.log(stores);
                // let linkName = index.slug;
    
                // img.src = background;
                // img.className = "card-img-top";
                // img.alt = gName;
    
                // p.innerText = " ";
    
                // h5.innerText = gName;
                // h5.className = "card-title";
                // h6.innerHTML = "Genre: " + "<strong>" + genre() + "</strong>";
                // h6.className = "card-subtitle mb-2 text-muted";
                // h6_2.innerHTML =
                //     "Metacritic Rating: " + "<strong>" + mScore + "</strong>";
    
                // link.href = "https://rawg.io/games/" + linkName;
                // link.target = "_blank";
                // link.className = "btn btn-primary";
                // link.innerText = "Go to RAWG";
    
                // div.className = "card";
                // div.id = "cardsId";
                // div2.className = "card-body";
                // div.style = "width: 18rem;";
    
                // wrapper.appendChild(div);
                // div.appendChild(img);
                // div.appendChild(div2);
                // div2.appendChild(h5);
                // div2.appendChild(p);
                // div2.appendChild(br);
                // div2.appendChild(h6);
                // div2.appendChild(h6_2);
                // div2.appendChild(br);
                // div2.appendChild(link);
    //         });
    //         )
    // }

    // cardData() {
    //     // put a map function here for the this.state of fetch data

    //     return (
    //         {this.state.genericFetch.name}</div>
    //     )
    // }

    getInfo() {
        let gameData;
        console.log(this.makeUrl())
        fetch(this.makeUrl(), {
            method: "GET",
            // headers: { "access-control-allow-origin": "*" },
        })
            .then((res) => res.json())
            .then((data) => {this.setState({genericFetch: data})})
            // .then((data) => this.browsingGames(data))
            // .then((data) => {this.setState({genericFetch: data})})
            .catch((err) => {
                console.log(err);
                let dumbDiv = document.getElementById("cardWrapper");
                let noData = document.createElement("p");
                noData.innerText = "Failed to Fetch";
                dumbDiv.appendChild(noData);
            });
        // return this.browsingGames(gameData)
    }

    componentDidMount() {
        this.getInfo()
    }

    render() {
        console.log(this.state.genericFetch)

        return(
            <div id="cardWrapper">
                {/* {this.getInfo()} */}
                {/* {this.state.genericFetch.results ? this.state.genericFetch.results.map((key, gameData) => <h3 id={key}>{gameData.slug}</h3>) : <h3>Something is wrong</h3>} */}
                <MappingFun genericFetch={this.state.genericFetch}/>
            </div>
        )
    }
}

export default Landing;