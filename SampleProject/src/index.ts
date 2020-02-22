import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as lodash from "lodash";

let svc = new GithubApiService();
if(process.argv.length<3){
    console.log("Please pass the user name in the arguments ");
}
else{
    let userName = process.argv[2];

/* //Simple two asyncronous call 
//=================================

svc.getUserInfo(userName,(user: User)=>{
    console.log(user);
});

svc.getRepos(userName,(repos : Repo[])=>{
       console.log(repos);
});
*/
// Now lets make these two acyncronous call into a synchronous call . The 
//way to do it using callback within a call back 

svc.getUserInfo(userName,(user: User)=>{

    svc.getRepos(userName,(repos : Repo[])=>{
        user.repos = lodash.take(repos,5);
        console.log(user);
 });
    
});
}