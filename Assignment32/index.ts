let current_users:string[] = ["Alex","Eric","Admin","Ahmed"];

let new_users:string[] = ["kamran","Ali","admin","Ahmed"];

for (const key in new_users) {
    let isExit=0;
    let newuser= new_users[key].toLowerCase();
    for (let index = 0; index < current_users.length; index++) {
        let currentname=current_users[index].toLowerCase();
            if(newuser===currentname)
            {
                console.log(new_users[key]+" person will need to enter a new username.");
                isExit=1;
            }
        
    }
    if(isExit!==1)
         console.log(new_users[key]+" username is available.");
}
