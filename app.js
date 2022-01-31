// let user1 = document.getElementById("user")
// let email = document.getElementById("email")
// let pass = document.getElementById("pass")
// let numb = document.getElementById("num")

// const signUp = _ => {
//     const data = {
//         Name: user1.value,
//         email: email.value,
//         password: pass.value,
//         num: numb.value
//     }

//     const data1 = JSON.parse(localStorage.getItem("users")) || []

//     const indx1 = data1.findIndex((value, ind) => {
//         return value.email === data.email
//     })
//     // console.log(indx1)   
//     if (indx1 === -1) {
//         data1.push(data)
//         // console.log(user)
//         localStorage.setItem("users", JSON.stringify(data1))
//         window.location.assign("./login.html")
//         // alert("succesfully")
//     }
//     else {
//         alert("This Email Already Exists")
//     }


// }
// const signIn = _ => {
//     let email2 = document.getElementById("email2")

//     let password2 = document.getElementById("pass2")

//     const usr = JSON.parse(localStorage.getItem("users"))

//     // const usr = JSON.parse(localStorage.getItem("users"))
//     // console.log(usr)
//     const check = usr.find((value) => {
//         return value.email === email2.value && value.password === password2.value
//     })



//     if (check) {
//         window.location.assign("./dashpahe.html")
//         alert("login")
//     }
//     else {
//         alert("invalid")
//     }
// }

// // const show = () =>{
// //     let head1 = document.getElementById("head1")
// //     let head2 = document.getElementById("head2")
// //     let head3 = document.getElementById("head3")

// //     const data= JSON.parse(localStorage.getItem("users"))
// //     console.log(data)
// //     head1.innerHTML = `Name : ${data}` 
// //     head2.innerHTML = `Gender : ${data}`
// //     head3.innerHTML = `Address : ${data}`}

// const showDashBoard = () => {
//     let showUserName = document.getElementById("showUserName")
//     let showEmail = document.getElementById("showEmail")
//     const localData = JSON.parse(localStorage.getItem("user"))
//     // console.log(localData);
//     showUserName.innerHTML = localData.Name;
//     showEmail.innerHTML = localData.email

// }




const userName = document.getElementById("Name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const num = document.getElementById("num")

const signup = () => {

    const Obj = {
        userName: Name.value,
        email: email.value,
        password: password.value,
        num: num.value,
       
    }

    const user = JSON.parse(localStorage.getItem("userinfo")) || []
    // console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === Obj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(Obj)
        localStorage.setItem("userinfo", JSON.stringify(user))
        alert("yahoo you successfully signup")
        window.location.assign("./login.html")

    } else {
        alert("Try Another Email Address")
    }
  
}


const login = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("userinfo"))
    // console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    // console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("login")
        window.location.assign("./dashpahe.html")
    } else {    
        alert("Incorrect Email/Pass")
    }
    email.value = ""
    password.value = ""

}
const profile=_=>{
    const head1 = document.getElementById("head1")
    const head2 = document.getElementById("head2")
    const head3 = document.getElementById("head3")

    const {userName , email , num,  } = JSON.parse(localStorage.getItem("currentUser"))
    head1.innerHTML = `Name : ${userName}` 
    head2.innerHTML = `Email : ${email}`
    head3.innerHTML = `Number : ${num}`

    
}
const logout =_=>{
     localStorage.removeItem("currentuser")

}