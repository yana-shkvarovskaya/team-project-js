import teamModalTpl from '../templates/teamModal.hbs';
import teamData from './data/team';
import getRefs from './refs';

const { openTeamModal, teamModal, btnCloseModal } = getRefs();

openTeamModal.addEventListener('click', e => {
  e.preventDefault();

  const teamModalMarkup = teamModalTpl(teamData);
  teamModal.innerHTML = teamModalMarkup;

  const btnCloseModal = document.querySelector('.close');
  teamModal.classList.remove('is-hidden');
  teamModal.classList.add('is-open');

  btnCloseModal.addEventListener('click', () => {
    teamModal.classList.remove('is-open');
    teamModal.classList.add('is-hidden');
  });
});





const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span =document.getElementsByClassName('close')
console.log(btn);

btn.onclick = function () {
    modal.style.display="block";
}

span.onclick = function () {
    modal.style.display='none';
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display='none';
    }
    window.open(`mailto:popovaa769@gmail.com?subject=Message for Anna&body=Message: bhbhbhbh`)
}

