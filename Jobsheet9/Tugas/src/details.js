const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();

    const template = `
        <h4>Nama : ${post.nama}</h4>
        <p>NIM : ${post.nim}</p>
        <p>Alamat: ${post.alamat}</p>
        <p>Tahun Angkatan : ${post.angkatan}</p>
        <p>Pembagian Kerja: ${post.kerja}</p>
    `
    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })
    window.location.replace('index.html');
})

window.addEventListener('DOMContentLoaded', () => renderDetails());