import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';


const OPTIONS : any = {
    headers:{
        'User-Agent' : 'request'
    }
};


export class GithubApiService{
   getUserInfo(userName : string, callback:(user: User)=>any){
        request.get('https://api.github.com/users/'+userName,OPTIONS,(error:any,response:any,body:any)=>{
        //console.log(error);        
        //console.log(response);
        //console.log(JSON.parse(body));
        let user = new User(JSON.parse(body));
        //console.log(user);
        callback(user);
        });
   }

   getRepos(userName : string, callback:(reposArray: Repo[])=>any){

    request.get('https://api.github.com/users/'+userName+"/repos",OPTIONS,(error:any,response:any,body:any)=>{
       // console.log("========>>>>",JSON.parse(body));
        let data : any[] = JSON.parse(body);
        let repos =  JSON.parse(body).map((repo : any) => new Repo(repo));
         callback(repos);
        });

   }
}