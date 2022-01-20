import React from 'react';
import './landing.css';

class MappingFun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    browsingGames(data) {
        // let data = this.state.genericFetch
        console.log(data);
        return(
        data.results.map((index, gameData) => <h3 id="key">{gameData.slug}</h3>));
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
}

    toggleRun() {
        if (Object.keys(this.props.genericFetch).length === 0) {
            return <></>
        } else {
            return this.browsingGames(this.props.genericFetch)
        }
    }

    render() {
        return(
            <>
            {this.toggleRun()}
            </>
        )
    }
}

export default MappingFun