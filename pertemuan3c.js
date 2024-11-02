const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const satuedit = async () => {
    console.log("hallo saya satu");
    await delay(2000); 
}

const duaedit = async () => {
    console.log("hallo saya dua");
    await delay(1000); 
}

const tigaedit = () => {
    console.log("hallo saya tiga");
}

const empatedit = () => {
    console.log("hallo saya empat");
}


const main = async () => {
    await satuedit(); 
    await duaedit();  
    tigaedit();       
    empatedit();      
}


main();
