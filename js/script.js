//creazione oggetti da mettere in variabili
const teamMate1 = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    immagine: 'wayne-barnett-founder-ceo.jpg'
}
const teamMate2 = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    immagine: 'angela-caroll-chief-editor.jpg'
}
const teamMate3 = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    immagine: 'walter-gordon-office-manager.jpg'
}
const teamMate4 = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    immagine: 'angela-lopez-social-media-manager.jpg'
}
const teamMate5 = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    immagine: 'scott-estrada-developer.jpg'
}
const teamMate6 = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    immagine: 'barbara-ramos-graphic-designer.jpg'
}
//creazione array di oggetti
const team = [teamMate1, teamMate2, teamMate3, teamMate4, teamMate5, teamMate6];

console.log('questo è il tuo team: ', team);



//ciclo che itera per ogni oggetto nell'array
for (let i = 0; i < team.length; i++) {
    //seleziono il mainHTML per stampare su scheda
    let main = document.querySelector('main');

    const mate = team[i];
    console.log(mate);
    //per ogni ciclo creo un di contenitore della scheda
    let box = document.createElement('div');
    box.classList.add('profile')
    main.append(box);
    //per ogni ciclo creo un div come contenitore per i dati del personale
    let boxData = document.createElement('div');
    boxData.classList.add('col-5')
    box.append(boxData)

    //creo un ciclo for-in che itera per ogni chiave presente in ogni oggetto dell'array
    for (const key in mate) {
        console.log(key, mate[key])
        //se la chiave è immagine allora stampo nel box il div contenente l'immagine altrimenti stampo nel boxData dove vengono stampati i dati
        if (key == 'immagine') {
            const imgProfile = mate.immagine;
            box.innerHTML += `<div class='col-7 text-end'>
                                    <img class='object-fit-cover border rounded' src=./img/${imgProfile}>
                                </div>`
        } else {
            boxData.innerHTML += `<h1> ${key}: ${mate[key]} </h1>`;
        }
    }
}
