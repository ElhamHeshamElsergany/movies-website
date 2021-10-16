
$(document).ready(function () {
    $("#hidenNav").hide();
})
$("#open ,#close").click(function () {
    $("#hidenNav").toggle(50, function () {
        $('#open').hide(0, function () {
            $('#close').show(0, function () {
                $("#showli").hide(0, function () {
                    $("#showli").slideDown(2000, function () {

                    })
                })
            })
        })
    });
})

let movies = [];
async function MoviesAPI(M) {
    if (M === undefined){
        M="now_playing"
    }
    console.log(M,"fffffsfsfws")
    let res = await fetch(`https://api.themoviedb.org/3/movie/${M}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`);
    let finalResult = await res.json();
    movies = finalResult.results;
    displayMovies();
    search();
    console.log(movies);
}
MoviesAPI()

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = movies.filter((character) => {
        return (
            character.title.toLowerCase().includes(searchString)
        );
    });
    search(filteredCharacters);
});
console.log("searchString")

// Search
let searchForMovies = []
async function search(S) {
    console.log(S, 'ssssss')
    if (S === undefined) {
        S = ""
    }
    let ser = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c196a80289a41d35b7d598c4cd6e616a&query=${S}`);
    let Result = await ser.json();
    console.log(Result, 'res')
    searchForMovies = Result.results;
    console.log(searchForMovies);
    displayMovies(searchForMovies);
}
search()
console.log(search)

let searchresults = document.getElementById("searchBar").addEventListener("keyup", S => { search(S.target.value) });
let searchresults2 = document.getElementById("allMovies").addEventListener("keyup", S => { search(S.target.value) });
console.log(searchresults2, "search")
console.log(searchresults)

// list navbar

function nowplaying() {
    MoviesAPI('now_playing')
}
function popular() {
    MoviesAPI('popular')
}
function rated() {
    MoviesAPI('top_rated')
}


// display function 

function displayMovies(S) {

    var cartoona = ``;
    console.log(movies, 'movies')
    console.log(S, "hagakwysa")
    if (S !== undefined) {
        movies = S
    }

       
        for (let i = 0; i < movies.length; i++) {

            cartoona += ` <div class="col-md-4 my-2 ">
                             <div class="posters position-relative">
                             <div class="move-poster ">
                                 <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class=" el-sora  rounded w-100">
                             </div>
                            <div class="layout d-flex flex-column justify-content-center">
                                 <div>
                                     <h3>${movies[i].title}</h3>
                                 </div>
                                 <div>
                                     <p>${movies[i].overview}</p>
                                 </div>
                                 <div>
                                     <span>${movies[i].vote_average}</span>
                                 </div>
                                 <div>
                                     <span>${movies[i].release_date}</span>
                                 </div>
                             </div>
                         </div>
                     </div>`;
        }
        document.getElementById("rowData").innerHTML = cartoona;
    };
    // list li

    let lis = document.querySelectorAll('ul li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function (e) {
            MoviesAPI(e.target.innerHTML)
        })
    }
    // contact us valdation
    // valdation
    let userName = document.getElementById("name")
    let userEmail = document.getElementById("email")
    let userPhone = document.getElementById("phone")
    let userAge = document.getElementById("age")
    let userPassword = document.getElementById("password")
    let userRePassword = document.getElementById("rePassword")
    // alert
    let userNameAlert = document.getElementById("namealert")
    let userEmailAlert = document.getElementById("emailalert")
    let userPhoneAlert = document.getElementById("phonealert")
    let userAgeAlert = document.getElementById("agealert")
    let userpasswordAlert = document.getElementById("passwordalert")
    let userRepasswordAlert = document.getElementById("repasswordalert");

    function userNameValid() {
        return 1 == /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(userName.value) ? (userNameAlert.style.display = "none", !0) : (userNameAlert.style.display = "block", !1)
    }
    function userEmailValid() {
        return 1 == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value) ? (userEmailAlert.style.display = "none", !0) : (userEmailAlert.style.display = "block", !1)
    } function userPhoneValid() {
        return 1 == /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value) ? (userPhoneAlert.style.display = "none", !0) : (userPhoneAlert.style.display = "block", !1)
    }
    function userAgeValid() {

        return 1 == /\s[0-1]{1}[0-9]{0,2}/.test(userAge.value) ? (userAgeAlert.style.display = "none", !0) : (userAgeAlert.style.display = "block", !1)
    }
    function userPasswordValid() {
        return 1 == /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value) ? (userpasswordAlert.style.display = "none", !0) : (userpasswordAlert.style.display = "block", !1)
    }

    userAgeAlert.style.display = "none",
        userName.addEventListener("keyup", userNameValid),
        userEmail.addEventListener("keyup", userEmailValid),
        userPhone.addEventListener("keyup", userPhoneValid),
        userAge.addEventListener("keyup", userAgeValid),
        userPassword.addEventListener("keyup", userPasswordValid),
        document.getElementById("contact").addEventListener("click", function () {
            userNameValid() &&
                userEmailValid() &&
                userPhoneValid() &&
                userAgeValid() &&
                userPasswordValid()
                ?

                document.getElementById("submitBtn").disabled = !1 : document.getElementById("submitBtn").disabled = !0
        });





