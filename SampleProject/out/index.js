"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var lodash = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the user name in the arguments ");
}
else {
    var userName_1 = process.argv[2];
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
    svc.getUserInfo(userName_1, function (user) {
        svc.getRepos(userName_1, function (repos) {
            user.repos = lodash.take(repos, 5);
            console.log(user);
        });
    });
}
