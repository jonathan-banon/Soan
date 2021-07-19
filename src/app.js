import axios from 'axios';

const bootstrap = require('bootstrap')
window.axios = axios;
window.bootstrap = bootstrap;

const urlInfo = 'https://demo.soan-solutions.io/test_front/company/CIKLEA/infos';
const urlPayments = 'https://demo.soan-solutions.io/test_front/company/CIKLEA/payments';
const containerPayed = document.querySelector('#payed');
const containerNotPayed = document.querySelector('#not-payed');
let linkPayed = document.querySelector('#payed-link');
let linkNotPayed = document.querySelector('#not-payed-link');
let finalAmount = 0;
let modal = document.getElementById("myModal");
let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById('closed')

function fetchDataJSON() {
    axios.get(urlInfo)
        .then(function (response) {
            return response.data;
        })
        .then(function (info) {
            const name = `<p class="m-5 h3 fw-bolder">${info.company.name}</p>`;
            document.querySelector('#company-name').innerHTML = name;
        })
    axios.get(urlPayments)
        .then(function (response) {
            return response.data;
        })
        .then(function (paymentsObject) {
            paymentsObject.payments.forEach(function (payment) {
                if (payment.payedDate) {
                    sendDataPayed(payment);
                } else {
                    sendDataNotPayed(payment);
                }
            })
        })
}

function sendDataPayed(object) {
    object.amount = (object.amount / 100).toFixed(2);
    let newElement = document.createElement('div');
    newElement.classList.add('d-flex', 'payment-row', 'opacity-border-top', 'align-items-center');
    newElement.innerHTML = `<p class="col-9 font-bold">${object.invoiceNumber}</p>
                <div class="col-3 d-flex justify-content-end">
                    <div class="d-flex align-items-center justify-content-end me-2 w-50">
                        <p class="font-bold">${object.amount}€</p>
                    </div>
                    <div class="d-flex">
                        <img src="assets/images/icon_observateur%20(1).svg" class="me-3 " alt="icon_observateur">
                        <img src="assets/images/icon_download%20(1).svg" class="me-3 " alt="incon_download">
                    </div>
                </div>`;
    containerPayed.appendChild(newElement);
}

function sendDataNotPayed(object) {
    object.amount = (object.amount / 100).toFixed(2);
    let discountHTML = ``;
    let amountHTML = ``;
    if ((object.discount.isDiscountable == 1)) {
        finalAmount = ((object.amount - (object.amount * (object.discount.discountRate / 100)))).toFixed(2);
        discountHTML = ` <img src="assets/images/escompte.svg" class="img-fluid me-1" alt="escompte.svg">
                            <p>${object.discount.discountRate}% d'escompte</p>`
        amountHTML = `<p class="text-decoration-line-through">${object.amount}€</p>`;
    } else {
        finalAmount = object.amount;
        object.discount.discountRate = 0;
    }
    let newElement = document.createElement('div');
    newElement.classList.add('d-flex', 'payment-row', 'opacity-border-top', 'align-items-center');
    newElement.innerHTML = `
                <div class="checkbox-contain">
                    <input  type="checkbox"  class="cb" name="objectId" data-amount="${finalAmount}" value="${object.invoiceNumber}" >
                </div>
                    <p class="col-6 font-bold ">${object.invoiceNumber}</p>
                <div class="col-5 d-flex justify-content-end">
                    <div class="d-flex flex-column align-items-end me-3 w-50">
                        ${amountHTML}
                        <p class="font-bold text-primary">${finalAmount}€</p>
                        <div class="d-flex align-items-center justify-content-end escompte-container">
                       ${discountHTML}
                        </div>
                    </div>
                    <div class="d-flex">
                        <img src="assets/images/icon_observateur%20(1).svg" class="me-3 " alt="icon_observateur">
                        <img src="assets/images/icon_download%20(1).svg" class="me-3 " alt="incon_download">
                    </div>
                </div>`;
    containerNotPayed.appendChild(newElement);
}

fetchDataJSON();

linkPayed.addEventListener('click', e => {
    e.preventDefault();
    if (linkPayed.classList == 'on') {
        console.log('linkPayed on');
    } else {
        containerPayed.classList.toggle('d-none');
        containerNotPayed.classList.toggle('d-none');
        linkPayed.classList.toggle('on');
        linkPayed.classList.toggle('off');
        linkNotPayed.classList.toggle('off');
        linkNotPayed.classList.toggle('on');
    }
})

linkNotPayed.addEventListener('click', e => {
    e.preventDefault();
    if (linkNotPayed.classList == 'on') {
        console.log('linkNotPayed on');
    } else {
        containerNotPayed.classList.toggle('d-none');
        containerPayed.classList.toggle('d-none');
        linkNotPayed.classList.toggle('on');
        linkNotPayed.classList.toggle('off');
        linkPayed.classList.toggle('off');
        linkPayed.classList.toggle('on');
    }
});

openModal.addEventListener('click', () => {
    modal.style.display = "block";
})

span.addEventListener('click', () => {
    modal.style.display = 'none';
})
