const vueAccueil = document.querySelector(".vue-accueil");
const vueBoussole = document.querySelector(".vue-boussole");
const vueParametres = document.querySelector(".vue-parametres");

const boutonAccueil = document.getElementById('bouton-accueil');
const boutonBoussole = document.getElementById('bouton-boussole');
const boutonParametres = document.getElementById('bouton-parametres');

boutonAccueil.onclick = () => {
    vueAccueil.style.display = 'flex';
    boutonAccueil.querySelector('img').src = '/assets/accueil-noir.png';

    vueBoussole.style.display = 'none';
    boutonBoussole.querySelector('img').src = '/assets/boussole-noir-contour.png';

    vueParametres.style.display = 'none';
    boutonParametres.querySelector('img').src = '/assets/parametres-noir-contour.png';
};

boutonBoussole.onclick = () => {
    vueAccueil.style.display = 'none';
    boutonAccueil.querySelector('img').src = '/assets/accueil-noir-contour.png';

    vueBoussole.style.display = 'flex';
    boutonBoussole.querySelector('img').src = '/assets/boussole-noir.png';

    vueParametres.style.display = 'none';
    boutonParametres.querySelector('img').src = '/assets/parametres-noir-contour.png';
};

boutonParametres.onclick = () => {
    vueAccueil.style.display = 'none';
    boutonAccueil.querySelector('img').src = '/assets/accueil-noir-contour.png';

    vueBoussole.style.display = 'none';
    boutonBoussole.querySelector('img').src = '/assets/boussole-noir-contour.png';

    vueParametres.style.display = 'flex';
    boutonParametres.querySelector('img').src = '/assets/parametres-noir.png';
};

boutonAccueil.click();