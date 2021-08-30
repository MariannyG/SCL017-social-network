const db = firebase.firestore();

export function likeController(likedMovies, nameMovie, dynClass, starMovie, userUID) {

    if (likedMovies.includes(nameMovie)) { // si incluye el nombre de la película, entonces ya estaba clickeado
        dynClass = "fas fa-star";
        starMovie--;
        likedMovies = likedMovies.filter(name => name != nameMovie);

        db.collection("movies")
            .doc(nameMovie)
            .set({
                likes: starMovie,
            })
            .then(

            )
            .catch(function (error) {
                console.error("Error ", error);
            });

        db.collection("likes/" + userUID + "/movies").doc(nameMovie).delete() // borra el nombre de la pelicula "like"

            .then(

            )
            .catch(function (error) {
                console.error("Error ", error);
            });


    } else {
        dynClass = "far fa-star";
        starMovie++;
        likedMovies.push(nameMovie); // carga el nombre de la pelicula


        db.collection("movies")
            .doc(nameMovie)
            .set({
                likes: starMovie,
            })
            .then(

            )
            .catch(function (error) {
                console.error("Error ", error);
            });

        db.collection("likes/" + userUID + "/movies").doc(nameMovie).set({}) // asigna el valor del push

            .then(

            )
            .catch(function (error) {
                console.error("Error ", error);
            });
    }
    history.replaceState({}, "", "/home"); // fuerza a que al back del navegador vaya a home
    window.location.hash = "#movie"; // recargar página para que la estrella se actualice (esto
                                    // se debe a la forma modular en que se carga la data en el
                                    // primer load).

}