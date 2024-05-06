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
const team = [ teamMate1, teamMate2, teamMate3, teamMate4, teamMate5, teamMate6];

console.log('questo è il tuo team: ', team);

let h1Name = document.querySelector('#nameTeam');

//ciclo che itera per ogni oggetto nell'array
for (let i = 0; i < team.length; i++) {
    const mate = team[i];
    console.log(mate);

    for (const key in mate) {
        console.log(key, mate[key])
        h1Name.innerHTML += `<h1> ${key}: ${mate[key]} </h1>`;
    }

    
}


/*
let h1Role = document.querySelector('#roleTeam');
let imgTeam = document.querySelector('#imgProfile')
const nameMate = mate.nome;
    h1Name.innerHTML += `<h1> nome: ${nameMate} </h1>`;
    const roleMate = mate.ruolo;
    h1Role.innerHTML += `<h1> ruolo: ${roleMate} </h1>`;
    console.log('nome:', nameMate,'ruolo:', roleMate);
    const imgProfile = mate.immagine;
    console.log('foto:', imgProfile);
    imgTeam.innerHTML += `<img src=./img/${imgProfile}>`
    */