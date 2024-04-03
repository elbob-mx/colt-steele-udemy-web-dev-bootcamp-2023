const barrySong = {
  first: "My First",
  last: "My Last",
  everything: "My Everything",
  fullName() {
    return `${this.first}, ${this.last}, ${this.everything} 🎶`;
  },
};

barrySong.everything = "My Estefany";
console.log(barrySong.fullName());
