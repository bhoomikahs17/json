//https://api.github.com/users
async function getGithubusers(){
    let response = await fetch("https://api.github.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data[0].avatar_url);
    debugger;
    let display = "";
    data.map((values)=>{
        
        display += `
        <div class="cards">
          <img src=${values.avatar_url} alt=${values.login} width="300px">
      <h1>${values.login}</h1>
      </div>
        `
    });
     document.getElementById("root").innerHTML= display;
    // await new promise((resolve,reject)=>{
    //     setTimeout(resolve,2000)
    // });
    // console.log("All data is been displayed")
}
getGithubusers();