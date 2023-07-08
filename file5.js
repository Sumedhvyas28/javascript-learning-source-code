// object destructuring
// mainly use to detructure the objects into variables
const bands={
    bandName :"in the moment",
    song:"whore"
    ,type:"rock"
    ,anotherSong:"whore2"
}

const { bandName,song,...newType}=bands;
console.log(bands.song)