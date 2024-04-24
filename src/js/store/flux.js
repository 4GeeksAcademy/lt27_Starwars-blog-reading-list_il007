const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      vehicles: [],
      characters: [],
      charactersLiked:[],
      planetsLiked:[],
      uid: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        const store = getStore()
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        
        fetch('https://swapi.tech/api/people', requestOptions)
				.then((response)=> response.json())
				.then((data)=> setStore({ characters: data.results }))
        .catch((error) => console.error(error))
        console.log("Llamando a Characters");
        console.log(store.characters)

				fetch('https://swapi.tech/api/planets', requestOptions)
				.then((response)=> response.json())
				.then((data)=> setStore({ planets: data.results }))
        .catch((error) => console.error(error))
        console.log("Llamando a Planets");
        console.log(store.planets)


        fetch('https://swapi.tech/api/vehicles', requestOptions)
				.then((response)=> response.json())
				.then((data)=> setStore({ vehicles: data.results }))
        .catch((error) => console.error(error))
        console.log("Llamando a Vehicles");
        console.log(store.vehicles)


      },
      ////////////////////////////  ADD FAVORITES  ////////////////////////////

      favoriteLiked: (characterName) => {
				const store = getStore();  

				if(store.charactersLiked.includes(characterName)){
					setStore({charactersLiked: store.charactersLiked.filter((elemento) => elemento != characterName)})

				}else
				setStore({charactersLiked: [...store.charactersLiked,characterName]})
			},

      ////////////////////////////  DELETE FAVORITES  ////////////////////////////


			deleteFavorite: (characterName) => {
				const store = getStore();  
	
					setStore({charactersLiked: store.charactersLiked.filter((elemento) => elemento != characterName)})

			},
      ////////////////////////////  CHARACTER-S  ////////////////////////////
      /*getCharacters: () => {
        const store = getStore()
        console.log("Llamando a Characters");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://swapi.tech/api/people", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const parsedResult = JSON.parse(result);
            setStore({ people: parsedResult.results });
            console.log(store.people);
          })
          .catch((error) => console.error(error));
      },*/
      ////////////////////////////  SET_CHARACTER  ////////////////////////////
     /* setCharacter: (cardData) => {
        const store = getStore()
        setStore({ character: cardData });
        console.log(store.character);
      },*/
      /*////////////////////////////  GET_ID  ////////////////////////////
      getCharacter : (props) => {
        console.log("Llamando a caracter");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(`https://swapi.tech/api/people/${props.uid}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const parsedResult = JSON.parse(result);
            setStore({ character: parsedResult.results });
            console.log(store.character);;
          })
          .catch((error) => console.error(error));
      },*/
      ////////////////////////////  CHARACTER  ////////////////////////////
      /*getCharacter: () => {
        console.log("Llamando a Character");
        const store = getStore();
		const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(`${people.url}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            setStore({ character: store.character });
          })
          .catch((error) => console.error(error));
      },*/
      ////////////////////////////  PLANETS  ////////////////////////////
      /*getPlanets: () => {
        const store = getStore()
        console.log("Llamando a Planets");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://swapi.tech/api/planets", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const parsedResult = JSON.parse(result);
            setStore({ planets: parsedResult.results });
            console.log(store.planets);
          })
          .catch((error) => console.error(error));
      },
*/
      ////////////////////////////  VEHICLES  ////////////////////////////
      /*getVehicles: () => {
        console.log("Llamando a Vehicles");
        const store = getStore()
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://swapi.tech/api/vehicles", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const parsedResult = JSON.parse(result);
            setStore({ vehicles: parsedResult.results });
            console.log(store.vehicles);
          })
          .catch((error) => console.error(error));
      },*/

      ////////////////////////////  TEST  ////////////////////////////

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
