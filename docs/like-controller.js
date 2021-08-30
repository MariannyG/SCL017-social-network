const db = firebase.firestore();

export function likeController(likedMovies, nameMovie, dynClass, starMovie, userUID) {

    if (likedMovies.includes(nameMovie)) {
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

        db.collection("likes/" + userUID + "/movies").doc(nameMovie).delete()

            .then(

            )
            .catch(function (error) {
                console.error("Error ", error);
            });


    } else {
        dynClass = "far fa-star";
        starMovie++;
        likedMovies.push(nameMovie);


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

        db.collection("likes/" + userUID + "/movies").doc(nameMovie).set({})

            .then(

            )
            .catch(function (error) {
                console.error("Error ", error);
            });
    }
    history.replaceState({}, "", "/home");
    window.location.hash = "#movie";

}