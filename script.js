// Menangani navigasi antara menu
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        // Sembunyikan semua konten
        document.querySelectorAll('section.collapse').forEach(section => {
            section.classList.remove('show');
        });

        // Tampilkan konten yang sesuai dengan menu yang diklik
        const target = item.getAttribute('href');
        const targetContent = document.querySelector(target + 'Content');
        if (targetContent) {
            targetContent.classList.add('show');
        }
    });
});

document.getElementById('formTambahKaryawan').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form input
    const kode = document.getElementById('kodeKaryawan').value;
    const nama = document.getElementById('namaKaryawan').value;
    const email = document.getElementById('emailKaryawan').value;
    const alamat = document.getElementById('alamatKaryawan').value;
    const jabatan = document.getElementById('jabatanKaryawan').value;

    // Buat elemen row untuk tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.querySelectorAll('#karyawanContent tbody tr').length + 1}</td>
        <td>${kode}</td>
        <td>${nama}</td>
        <td>${email}</td>
        <td>${alamat}</td>
        <td>${jabatan}</td>
        <td>
            <button class="btn btn-warning btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Hapus</button>
        </td>
    `;

    // Tambahkan row baru ke dalam tabel
    document.querySelector('#karyawanContent tbody').appendChild(newRow);

    // Reset form setelah submit
    document.getElementById('formTambahKaryawan').reset();

    // Tutup modal setelah submit
    const modalElement = document.getElementById('tambahKaryawanModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

});

document.getElementById('formTambahJabatan').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form input
    const kode = document.getElementById('kodeJabatan').value;
    const nama = document.getElementById('namaJabatan').value; 
    const gaji = document.getElementById('gajiJabatan').value;

    // Buat elemen row untuk tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.querySelectorAll('#jabatanContent tbody tr').length + 1}</td>
        <td>${kode}</td>
        <td>${nama}</td>
        <td>${gaji}</td>
    `;

    // Tambahkan row baru ke dalam tabel
    document.querySelector('#jabatanContent tbody').appendChild(newRow);

    // Reset form setelah submit
    document.getElementById('formTambahJabatan').reset();

    // Tutup modal setelah submit
    const modalElement = document.getElementById('tambahJabatanModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Refresh tampilan (opsional, jika ingin mengupdate data dari sumber lain, gunakan fetch atau AJAX)
    // location.reload(); // Hati-hati menggunakan ini jika tidak ingin memuat ulang seluruh halaman
});


document.getElementById('formTambahDivisi').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form input
    const kode = document.getElementById('kodeDivisi').value;
    const nama = document.getElementById('namaDivisi').value;

    // Buat elemen row untuk tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.querySelectorAll('#divisiContent tbody tr').length + 1}</td>
        <td>${kode}</td>
        <td>${nama}</td>
    `;

    // Tambahkan row baru ke dalam tabel
    document.querySelector('#divisiContent tbody').appendChild(newRow);

    // Reset form setelah submit
    document.getElementById('formTambahDivisi').reset();

    // Tutup modal setelah submit
    const modalElement = document.getElementById('tambahDivisiModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Refresh tampilan (opsional, jika ingin mengupdate data dari sumber lain, gunakan fetch atau AJAX)
    // location.reload(); // Hati-hati menggunakan ini jika tidak ingin memuat ulang seluruh halaman
});

document.getElementById('formTambahAbsensi').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form input
    const nama = document.getElementById('namaAbsensi').value;
    const tanggal = document.getElementById('tanggalAbsensi').value;
    const status = document.getElementById('statusAbsensi').value;
    const keterangan = document.getElementById('keteranganAbsensi').value;

    // Buat elemen row untuk tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.querySelectorAll('#absensiContent tbody tr').length + 1}</td>
        <td>${nama}</td>
        <td>${tanggal}</td>
        <td>${status}</td>
        <td>${keterangan}</td>
    `;

    // Tambahkan row baru ke dalam tabel
    document.querySelector('#absensiContent tbody').appendChild(newRow);

    // Reset form setelah submit
    document.getElementById('formTambahAbsensi').reset();

    // Tutup modal setelah submit
    const modalElement = document.getElementById('tambahAbsensiModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Refresh tampilan (opsional, jika ingin mengupdate data dari sumber lain, gunakan fetch atau AJAX)
    // location.reload(); // Hati-hati menggunakan ini jika tidak ingin memuat ulang seluruh halaman
});

document.getElementById('formTambahIzin').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form input
    const nama = document.getElementById('namaIzin').value;
    const tanggal = document.getElementById('tanggalIzin').value;
    const durasi = document.getElementById('durasiIzin').value;
    const keterangan = document.getElementById('keteranganIzin').value;

    // Buat elemen row untuk tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.querySelectorAll('#izinContent tbody tr').length + 1}</td>
        <td>${nama}</td>
        <td>${tanggal}</td>
        <td>${durasi}</td>
        <td>${keterangan}</td>
    `;

    // Tambahkan row baru ke dalam tabel
    document.querySelector('#izinContent tbody').appendChild(newRow);

    // Reset form setelah submit
    document.getElementById('formTambahIzin').reset();

    // Tutup modal setelah submit
    const modalElement = document.getElementById('tambahIzinModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Refresh tampilan (opsional, jika ingin mengupdate data dari sumber lain, gunakan fetch atau AJAX)
    // location.reload(); // Hati-hati menggunakan ini jika tidak ingin memuat ulang seluruh halaman
});

document.getElementById('formTambahLembur').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form input
    const nama = document.getElementById('namaLembur').value;
    const tanggal = document.getElementById('tanggalLembur').value;
    const jamMulai = document.getElementById('jammulaiLembur').value;
    const jamSelesai = document.getElementById('jamselesaiLembur').value;
    const keterangan = document.getElementById('keteranganLembur').value;

    // Buat elemen row untuk tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${document.querySelectorAll('#lemburContent tbody tr').length + 1}</td>
        <td>${nama}</td>
        <td>${tanggal}</td>
        <td>${jamMulai}</td>
        <td>${jamSelesai}</td>
        <td>${keterangan}</td>
    `;

    // Tambahkan row baru ke dalam tabel
    document.querySelector('#lemburContent tbody').appendChild(newRow);

    // Reset form setelah submit
    document.getElementById('formTambahLembur').reset();

    // Tutup modal setelah submit
    const modalElement = document.getElementById('tambahLemburModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Refresh tampilan (opsional, jika ingin mengupdate data dari sumber lain, gunakan fetch atau AJAX)
    // location.reload(); // Hati-hati menggunakan ini jika tidak ingin memuat ulang seluruh halaman
});
