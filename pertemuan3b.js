//function satu() {
//    console.log("halo saya satu");
//}
//function dua() {
//    console.log("halo saya dua");
//}
//function tiga() {
//    console.log("halo saya dua");
//}



const satuedit = (callback) => {
    console.log("halo saya satu edit");
};
const duaedit = () => {
    console.log("halo saya dau edit");
};
const tigaedit = () => {
    console.log("halo saya tiga edit");
}; 

//satu();
satuedit(duaedit);
//dua();
duaedit();
//tiga();
tigaedit();