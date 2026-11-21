const formFoto = document.getElementById("formFoto");
const judulFoto = document.getElementById("judulFoto");
const deskripsiFoto = document.getElementById("deskripsiFoto");
const urlFoto = document.getElementById("urlFoto");

const daftarFoto = document.querySelector(".daftarFoto");
const jumlahFoto = document.getElementById("jumlahFoto");

const formUpdate = document.getElementById("formUpdate");

const searchFoto = document.getElementById("searchFoto");

//tambah foto dan tampilkan foto di daftar foto
formFoto.addEventListener("submit",function(event){
    event.preventDefault();

    if (
        judulFoto.value.trim() === "" ||
        deskripsiFoto.value.trim() === "" ||
        urlFoto.value.trim() === ""
    ) {
        return;
    }

    const card = document.createElement("div");
    card.classList.add("cardFoto");

    const gambar = document.createElement("img");
    gambar.setAttribute("src",urlFoto.value);


    gambar.addEventListener("error", function() {
        gambar.alt = "Gambar gagal dimuat";
    });

    const info = document.createElement("div");
    info.classList.add("infoFoto");

    const judul = document.createElement("h3");
    judul.textContent = judulFoto.value;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = deskripsiFoto.value;


    const aksi = document.createElement("div");
    aksi.classList.add("aksiFoto");
   
    const update = document.createElement("button");
    update.type = "button";
    update.classList.add("btnUpdate");
    update.textContent = "Update";

    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.classList.add("btnHapus");
    hapus.textContent = "Hapus"; 

    aksi.append(update);
    aksi.append(hapus);

    info.append(judul);
    info.append(deskripsi);
    info.append(aksi);
    

    card.append(gambar);
    card.append(info);

    daftarFoto.append(card);

    jumlahFoto.textContent = daftarFoto.children.length;


    //Hapus foto
    hapus.addEventListener("click",function(){
        card.remove();

        jumlahFoto.textContent = daftarFoto.children.length;
    })

let inputJudul;
let inputDeskripsi;
let inputURL;
    // Update Foto
    update.addEventListener("click",function(){
        formUpdate.style.display = "flex";

        formUpdate.innerHTML = "";

        inputJudul = document.createElement("input");
        inputJudul.type = "text";
        inputJudul.placeholder = "Ubah judul Foto";

        inputDeskripsi = document.createElement("textarea");
        inputDeskripsi.placeholder = "Ubah Deskripsi Foto";

        inputURL = document.createElement("input");
        inputURL.type = "text";
        inputURL.placeholder = "Ubah URL Gambar";

        const konfirmasi = document.createElement("button");
        konfirmasi.type = "submit";
        konfirmasi.textContent = "Konfirmasi";

        formUpdate.append(inputJudul);
        formUpdate.append(inputDeskripsi);
        formUpdate.append(inputURL);
        formUpdate.append(konfirmasi);

        inputJudul.value = judul.textContent;
        inputDeskripsi.value = deskripsi.textContent;
        inputURL.value = gambar.getAttribute("src");

    })

        formUpdate.addEventListener("submit",function(event){
            event.preventDefault();

            judul.textContent = inputJudul.value;
            deskripsi.textContent = inputDeskripsi.value;
            gambar.setAttribute("src",inputURL.value);
            
            formUpdate.style.display = "none";
            formUpdate.innerHTML = "";
            formUpdate.reset();
        })


    formFoto.reset();
})