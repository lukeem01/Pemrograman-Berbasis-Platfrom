const movie = {
    judul: "Interstellar",
    tahunRilis: 2014,
    sutradara: "Christopher Nolan",
    genre: ["Sci-Fi", "Adventure","Drama"],
    tampilkanDetail: function(){
        return ` \njudul: ${this.judul}  \ntahun rilis: ${this.tahunRilis} \nsutradara: ${this.sutradara} \ngenre: ${this.genre}`;
    }
};

console.log(`Sutradara: ${movie.sutradara}`);
console.log(`genre kedua: ${movie.genre[1]}`);
console.log (`Detail: ${movie.tampilkanDetail()}`);