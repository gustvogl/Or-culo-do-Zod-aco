function revelarArmadura() {
    const dataInput = document.getElementById('data-nascimento').value;

    if (!dataInput) {
        alert("Por favor, eleve seu cosmo e insira uma data válida!");
        return;
    }

    const partesData = dataInput.split('-');
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    // Variáveis para guardar os dados da ficha
    let cavaleiro = "", signo = "", poder = "", casa = "", imagemSrc = "";
    let cosmo = 0, vel = 0, tec = 0, forca = 0;

    // Lógica Astrológica usando blocos condicionais com && e ||
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Áries"; cavaleiro = "Mu de Áries"; casa = "1ª Casa"; poder = "Extinção Estelar"; 
        cosmo = 90; vel = 80; tec = 100; forca = 60;
        imagemSrc = "/img/20230523-avenir-aries.webp";
    } 
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Touro"; cavaleiro = "Aldebaran de Touro"; casa = "2ª Casa"; poder = "Grande Chifre"; 
        cosmo = 85; vel = 70; tec = 80; forca = 100;
        imagemSrc = "img/09_hk8p.960.webp";
    } 
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gêmeos"; cavaleiro = "Saga de Gêmeos"; casa = "3ª Casa"; poder = "Explosão Galáctica"; 
        cosmo = 100; vel = 90; tec = 100; forca = 85;
        imagemSrc = "img/02_dmzy.960.webp";
    } 
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Câncer"; cavaleiro = "Máscara da Morte"; casa = "4ª Casa"; poder = "Ondas do Inferno"; 
        cosmo = 80; vel = 80; tec = 85; forca = 75;
        imagemSrc = "img/12_5uj3.960.webp";
    } 
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão"; cavaleiro = "Aiolia de Leão"; casa = "5ª Casa"; poder = "Relâmpago de Plasma"; 
        cosmo = 90; vel = 95; tec = 85; forca = 90;
        imagemSrc = "/img/20210824-ilias_de_leo-768x835.avif";
    } 
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem"; cavaleiro = "Shaka de Virgem"; casa = "6ª Casa"; poder = "Tesouro do Céu"; 
        cosmo = 100; vel = 85; tec = 100; forca = 70;
        imagemSrc = "img/01_ypfn.960.webp";
    } 
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra"; cavaleiro = "Dohko de Libra"; casa = "7ª Casa"; poder = "Cólera dos Cem Dragões"; 
        cosmo = 100; vel = 90; tec = 100; forca = 95;
        imagemSrc = "img/03_6w5b.960.webp";
    } 
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião"; cavaleiro = "Milo de Escorpião"; casa = "8ª Casa"; poder = "Agulha Escarlate"; 
        cosmo = 85; vel = 95; tec = 90; forca = 80;
        imagemSrc = "img/escorpiao.webp";
    } 
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário"; cavaleiro = "Aiolos de Sagitário"; casa = "9ª Casa"; poder = "Flecha da Justiça"; 
        cosmo = 95; vel = 95; tec = 95; forca = 90;
        imagemSrc = "img/05_vgvr.960.webp";
    } 
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricórnio"; cavaleiro = "Shura de Capricórnio"; casa = "10ª Casa"; poder = "Excalibur"; 
        cosmo = 85; vel = 90; tec = 100; forca = 90;
        imagemSrc = "img/08_kd5u.960.webp";
    } 
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Aquário"; cavaleiro = "Camus de Aquário"; casa = "11ª Casa"; poder = "Execução Aurora"; 
        cosmo = 85; vel = 85; tec = 95; forca = 80;
        imagemSrc = "img/06_r4d9.960.webp";
    } 
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Peixes"; cavaleiro = "Afrodite de Peixes"; casa = "12ª Casa"; poder = "Rosas Sangrentas"; 
        cosmo = 80; vel = 85; tec = 90; forca = 75;
        imagemSrc = "img/11_7j94.960.webp";
    }

    // Output: Preencher os dados na Ficha
    document.getElementById('nome-cavaleiro').innerText = cavaleiro;
    document.getElementById('nome-signo').innerText = `Signo de ${signo}`;
    document.getElementById('ficha-casa').innerText = casa;
    document.getElementById('desc-poder').innerText = poder;
    document.getElementById('img-cavaleiro').src = imagemSrc;

    // Remove as classes 'hidden' para revelar as áreas
    document.getElementById('resultado-basico').classList.remove('hidden');
    document.getElementById('ficha-area').classList.remove('hidden');

    // Um pequeno timeout para garantir que a transição do CSS (barrinhas enchendo) funcione
    setTimeout(() => {
        document.getElementById('bar-cosmo').style.width = `${cosmo}%`;
        document.getElementById('bar-vel').style.width = `${vel}%`;
        document.getElementById('bar-tec').style.width = `${tec}%`;
        document.getElementById('bar-for').style.width = `${forca}%`;
    }, 100);
}