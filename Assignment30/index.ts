let usernames:string[] = ["Alex","Eric","Admin","Ahmed"];
for (const username of usernames) {
    if(username.toLowerCase()==="admin")
        console.log("Hello "+username+", would you like to see a status report?");
        else
        {
            console.log("Hello "+username);
        }
}
