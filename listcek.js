import { alat } from './fitur1.js';
import { volt_element } from './fitur1.js';

const ceklistButton = document.getElementById('ceklist');
const kotakFitur = document.querySelector('.kotak-fitur');
let total_daya = 0;

function Totaldaya() {
  return total_daya;
}

// 1. Tombol Hitung Biaya
const biayabutton = document.createElement('button');
biayabutton.textContent = 'Hitung Biaya';
biayabutton.type = 'button';
biayabutton.className = 'calculate-cost-button';
if (kotakFitur) {
  kotakFitur.appendChild(biayabutton);
}

const resetbutton = document.createElement('button');
resetbutton.textContent = 'Reset List';
resetbutton.type = 'button';
resetbutton.className = 'reset-list-button';
if (kotakFitur) {
  kotakFitur.appendChild(resetbutton);
}

ceklistButton.addEventListener('click', function() {
  const jumlahKWH = parseInt(volt_element.innerHTML) || 0;

  if (jumlahKWH > 0) {
    total_daya += jumlahKWH;

    const baru = document.createElement('p');
    baru.className = 'item-list-barang'; 
    baru.textContent = `barangnya ${alat || 'belum dipilih'} daya yang digunakan ${jumlahKWH || 'diisi ya'} Wh`;
    
    if (kotakFitur) {
      kotakFitur.insertBefore(baru, biayabutton);
    }

  } else if (alat === "") {
    console.log("gada");
  }
});

biayabutton.addEventListener('click', function() {
  const tarifPerKwh = 1440;
  const total_biaya = (parseFloat(Totaldaya()) / 1000) * tarifPerKwh;

  const hasilLama = document.getElementById('hasil-biaya');
  if (hasilLama) hasilLama.remove();

  const paragrafbaru = document.createElement('p');
  paragrafbaru.id = 'hasil-biaya';
  paragrafbaru.textContent = `Total Biaya: Rp ${total_biaya.toLocaleString('id-ID')}`;
  
  if (kotakFitur) {
    kotakFitur.appendChild(paragrafbaru);
  }
});

resetbutton.addEventListener('click', function() {
  total_daya = 0;

  const semuaBarang = document.querySelectorAll('.item-list-barang');
  semuaBarang.forEach(item => item.remove());

  const hasilBiaya = document.getElementById('hasil-biaya');
  if (hasilBiaya) {
    hasilBiaya.remove();
  }
});