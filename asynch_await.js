// // // async  function myfunction() {
// // //     // console.log("hjbjb");
// // //     let sentence = "promise";
// // //     return sentence
    
// // // }
// // // myfunction().then(console.log);

// // async  function myfunction(){
// //     return promise.resolve("promise")
// // }
// // myfunction().then(console.log)
// async  function myfunction(){
//     const promise = new promise((resolve,reject)=>{
//         setTimeout(()=> resolve("i am async & await"),2000);
//         });
//         let result = await promise;
//         console.log(result);
    
// }
// myfunction();
async function getGithubUsers(){
    let response = await fetch("https://api.github.com/user");
    console.log(response);
    let data = await response.json();
    console.log(data);
    let dispaly = "";
    data.map((values)=>{
        dispaly += `<div class="cards">
            <img src = "${value.avatar_url}" alt="${values.login}">
                <h1>${values.login}</h1>
        </div> `
    });
    document.getElementById("root").innerHTML=dispaly;
}
getGithubUsers();