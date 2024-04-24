const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      charactersLiked: [],
      planets: [],
      planetsLiked: [],
      vehicles: [],
      vehiclesLiked: [],
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
        const store = getStore();

        fetch("https://swapi.info/api/people")
          .then((response) => response.json())
          .then((data) => {
            setStore({ characters: data });
            console.log(store.characters);
          })
          // Log the JSON response to your console
          .catch((error) => console.error(error)); // Log the API error (if any) to your console

        fetch("https://swapi.info/api/planets")
          .then((response) => response.json())
          .then((data) => {
            setStore({ planets: data });
            console.log(store.planets);
          })
          .catch((error) => console.error(error)); // Log the API error (if any) to your console

        fetch("https://swapi.info/api/vehicles")
          .then((response) => response.json())
          .then((data) => {
            setStore({ vehicles: data });
            console.log(store.vehicles);
          })
          .catch((error) => console.error(error)); // Log the API error (if any) to your console
      },
      ////////////////////////////  ADD FAVORITES  ////////////////////////////

      favoriteLiked: (characterName) => {
        const store = getStore();

        if (store.charactersLiked.includes(characterName)) {
          setStore({
            charactersLiked: store.charactersLiked.filter(
              (elemento) => elemento != characterName
            ),
          });
        } else
          setStore({
            charactersLiked: [...store.charactersLiked, characterName],
          });
      },

      ////////////////////////////  DELETE FAVORITES  ////////////////////////////

      deleteFavorite: (characterName) => {
        const store = getStore();

        setStore({
          charactersLiked: store.charactersLiked.filter(
            (elemento) => elemento != characterName
          ),
        });
      },

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
