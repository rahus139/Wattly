    import {Totaldaya} from './listcek.js';
    import { biayabutton } from './listcek.js';

    biayabutton.addEventListener('click', function() {
    const total_biaya = parseFloat(Totaldaya()) * 1440; 
    document.getElementById('biayanya').innerHTML = `total biaya: rp ${total_biaya} `;
        const paragrafbaru = document.createElement('p');
        paragrafbaru.textContent = `harganya ${total_biaya} `;
        document.body.appendChild(paragrafbaru);
    })

    const items = document.querySelectorAll('li'); // atau selector spesifik listmu
    const lastItem = items[items.length - 1];
    lastItem.insertAdjacentElement('afterend', paragrafbaru);
