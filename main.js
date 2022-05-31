function fbFun() {
    window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQBAG%252FLCEhzE8Kw%252FOUq8HO4sW4lqYrhyYu31%252BAGQLr%252Fi0kcKQiYzckCcRB4AZPTszZsT0Ping1l%252F9AkmFQTkRMqlK1JuREEnVHrq6CLeTeB8RjMp3NWUJEb3rWHN5a%252Fn%252BDrgPhzmdy3D4EyoFNGOhoP6b3RIchAicl4tSK7A0cJyXqaJF%252F26x1lk2KeyI8o2Sgmv%252BZJH9evrEWdiNjbhBqBEoZ19pmGGuN4L5qs%253D%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd0a21946-b4dc-4a5f-b6a9-742f2a1c210c%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQBAG%252FLCEhzE8Kw%252FOUq8HO4sW4lqYrhyYu31%252BAGQLr%252Fi0kcKQiYzckCcRB4AZPTszZsT0Ping1l%252F9AkmFQTkRMqlK1JuREEnVHrq6CLeTeB8RjMp3NWUJEb3rWHN5a%252Fn%252BDrgPhzmdy3D4EyoFNGOhoP6b3RIchAicl4tSK7A0cJyXqaJF%252F26x1lk2KeyI8o2Sgmv%252BZJH9evrEWdiNjbhBqBEoZ19pmGGuN4L5qs%253D%23_%3D_&display=page&locale=en_GB&pl_dbl=0")
}
function appleFun() {
    window.open("https://appleid.apple.com/auth/authorize?client_id=com.spotify.accounts&response_type=code&response_mode=form_post&scope=name%20email&state=AQC7hWIzMGtFpIk4fuCJsLTa5BuxMqj8qwnPBXkgWM72LVAa4JUEjfUlYFdjTdUZNrdx4KaJTp24OAfgy%2BAnUHXxbCxvatTWAAlelJoGtUuGiM1drvRCCxhwCvB6dDOaQqW8vwAINbbA59Ya8YfOIeknNu3P4afFFob574PGLsAB9VD63oMActNaVTPf%2FD%2F6SiltQRacBw8DetmzYatlo%2BA%2Bqct0tdFg7R1ygaM%3D&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect")
}
function googleFun() {
    window.open("https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQAB5kjbzCopp%2FEZicMVbRt8grX1qdBOrBMc8Q28brmLKaE7QTHrTguzgl9y8HzNfcBGsnSsCfYxUPc8HtfnLp8TwgfhDPkadWcnUcGuM%2FGv0wuggUjqjvKCnothrjNX6vkMmhSAPkVY6RmuvVqVT8Rmm8sLwI4acLuA38FX0AWxJHE6wm%2BF%2BcQ4Wg5i4gRikNsRUjyS3ueN6yAUmSLDE8oL9odKd4qrmm51FxI%3D&scope=profile%20email%20openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect&flowName=GeneralOAuthFlow")
}
function phoneFun() {
    window.open("https://accounts.spotify.com/en/login/phone?continue=https%3A%2F%2Fwww.spotify.com%2Faccount%2Foverview%2F")
}
function signUp() {
    window.location.href = "signup.html"
}

// Form Validation 


function validateForm() {
    var returnval = true;
    var email = document.getElementById("email").value
    var p = document.getElementById("pass").value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementsByClassName("emailError")[0].innerHTML = ""
    } else {
        document.getElementsByClassName("emailError")[0].innerHTML = "*invalid Username or Email"
    }


    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(p)) {
        document.getElementsByClassName("passError")[0].innerHTML = ""
        console.log("hello");

    } else {
        document.getElementsByClassName("passError")[0].innerHTML = " *Your password must be at least 8 characters. Must contain at least one letter and at least one digit."

    }



}



function validateForm2() {
    var returnval = true;
    var email = document.getElementById("email").value
    var captcha = document.getElementById("captcha")


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementsByClassName("emailError")[0].innerHTML = ""
    } else {
        document.getElementsByClassName("emailError")[0].innerHTML = "*invalid Username or Email"
    }


    captcha.checked == true ? document.getElementsByClassName("captchaError")[0].innerHTML = "" :
        document.getElementsByClassName("captchaError")[0].innerHTML = "*click on captcha"


}




function validateForm3() {
    event.preventDefault();
    var returnval = true;
    var email = document.getElementById("email").value
    var p = document.getElementById("pass").value
    var conEmail = document.getElementById("conEmail").value
    var name = document.getElementById("name").value
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value
    var g1 = document.getElementById("male")
    var g2 = document.getElementById("female")
    var g3 = document.getElementById("nonBinary")
    var captcha = document.getElementById("captcha")


    captcha.checked == true ? document.getElementsByClassName("captchaError")[0].innerHTML = "" :
        document.getElementsByClassName("captchaError")[0].innerHTML = "*click on captcha"


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementsByClassName("emailError")[0].innerHTML = ""
    } else {
        document.getElementsByClassName("emailError")[0].innerHTML = "*invalid Username or Email"
    }

    if (email === conEmail) {
        document.getElementsByClassName("conEmailError")[0].innerHTML = ""
    } else {
        document.getElementsByClassName("conEmailError")[0].innerHTML = "*Your Email is Not Matching"
    }


    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(p)) {
        document.getElementsByClassName("passError")[0].innerHTML = ""

    } else {
        document.getElementsByClassName("passError")[0].innerHTML = " *Your password must be at least 8 characters. Must contain at least one letter and at least one digit."

    }

    if (name.length === 0) {
        document.getElementsByClassName("nameError")[0].innerHTML = "*Name is Required"
    } else {
        document.getElementsByClassName("nameError")[0].innerHTML = ""

    }


    if (day.length === 0) {
        document.getElementsByClassName("dateError")[0].innerHTML = "*Date is Required"

    }
    else if (month.length === 0) {
        document.getElementsByClassName("dateError")[0].innerHTML = "*Date is Required"

    }
    else if (year.length === 0) {
        document.getElementsByClassName("dateError")[0].innerHTML = "*Date is Required"

    } else {
        document.getElementsByClassName("dateError")[0].innerHTML = ""

    }



    if (g1.checked == true) {
        document.getElementsByClassName("genderError")[0].innerHTML = ""
    }
    else if (g2.checked == true) {
        document.getElementsByClassName("genderError")[0].innerHTML = ""
    }
    else if (g3.checked == true) {
        document.getElementsByClassName("genderError")[0].innerHTML = ""
    }
    else (
        document.getElementsByClassName("genderError")[0].innerHTML = "*please select anyone"
    )


}




const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#pass");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
