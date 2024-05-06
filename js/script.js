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

//ciclo che itera per ogni oggetto nell'array
for (let i = 0; i < team.length; i++) {
    const mate = team[i];
    console.log(mate);
    const nameMate = mate.nome;
    const roleMate = mate.ruolo;
    console.log('nome:', nameMate,'ruolo:', roleMate);
}