type album= {
        artist_name:string;
        title:string;
        number_of_tracks:number;


}

let make_album = (artist_name:string,album_itle:string,number_of_tracks:number=0)=>{
        let album={
                artist_name:artist_name,
                title:album_itle,
                number_of_tracks:number_of_tracks
        };
  
        return  album;

};
console.log(make_album("Rahat Fateh Ali Khan","Pyaar"));
console.log(make_album("KaKa","Dil Tera",10));