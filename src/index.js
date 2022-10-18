import { Console } from 'console';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

// initiaizing our page using a variable then getting out div from our html
const Starter = document.getElementById("app");

// initializing state: 
const Puppies = () => {
    // I am declaring two constant variables destructured inside of an array
        // I am then setting that equal to my use state which will be an empty array 
    const [roster, setRoster] = useState ([]) ;

    function exampleFunc() {
        console.log("function")
    }

// fetching our data:
useEffect(() => {
    async function fetch1(() => {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/");
                console.log("response", response)
                const pData = await response.json();
                console.log("this is the translated response", pData.data.players)
            } catch (error) {
                console.log(error)

                setRoster[pData.data.players];
            }
                }
            ),
            fetch1
            return <div></div>;
        }
    )

};

ReactDOM.render(<starter/>, <exampleFunc/> )