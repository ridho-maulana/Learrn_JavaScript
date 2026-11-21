const formFoto = document.getElementById("formFoto");
const judulFoto = document.getElementById("judulFoto");
const deskripsiFoto = document.getElementById("deskripsiFoto");
const urlFoto = document.getElementById("urlFoto");

const daftarFoto = document.querySelector(".daftarFoto");
const jumlahFoto = document.getElementById("jumlahFoto");

const formUpdate = document.getElementById("formUpdate")

const searchFoto = document.getElementById("searchFoto");

formFoto.addEventListener("submit",function(event){
    event.preventDefault();

    const card = document.createElement("div");
    card.classList.add("cardFoto");

    const gambar = document.createElement("img");
    gambar.setAttribute("src",urlFoto.value);

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
    hapus.classList.add("btnHapus")
    hapus.textContent = "Hapus";

    aksi.append(update);
    aksi.append(hapus);
    info.append(judul);
    info.append(deskripsi);
    card.append(gambar);
    card.append(info);
    card.append(aksi);
    daftarFoto.append(card);

    jumlahFoto.textContent = daftarFoto.children.length;

    hapus.addEventListener("click",function(){
        card.remove();
        jumlahFoto.textContent = daftarFoto.children.length;
    })

// let inputJudul;
// let inputDeskripsi;
// let inputURL;

    update.addEventListener("click",function(){
        formUpdate.style.display = "flex";
        formUpdate.innerHTML = "";

        const inputJudul = document.createElement("input");
        inputJudul.type = "text";
        inputJudul.placeholder = "Ubah judul foto";
        
        const inputDeskripsi = document.createElement("textarea");
        inputDeskripsi.placeholder = "Ubah deskripsi foto";

        const inputURL = document.createElement("input");
        inputURL.type = "text";
        inputURL.placeholder = "Ubah URL gambar";

        const konfirmasi = document.createElement("button");
        konfirmasi.type = "submit";
        konfirmasi.textContent = "Konfirmasi";

        formUpdate.append(inputJudul);
        formUpdate.append(inputDeskripsi);
        formUpdate.append(inputURL);
        formUpdate.append(konfirmasi);

        inputJudul.value = judul.textContent; //kenapa tidak value
        inputDeskripsi.value = deskripsi.textContent;
        inputURL.value = gambar.getAttribute("src");

        formUpdate.addEventListener("submit",function(event){
            event.preventDefault();

            judul.textContent = inputJudul.value;
            deskripsi.textContent = inputDeskripsi.value;
            gambar.setAttribute("src",inputURL.value);

            formUpdate.innerHTML = "";

            formUpdate.style.display = "none";

            formUpdate.reset();
        })
    })


    // searchFoto.addEventListener("input",function(event){
    //     const inputan = event.target.value.toLowerCase();
    //     card.forEach(function(kartu){
    //         const infoFoto = kartu.querySelector(".infoFoto");
    //             const judul = infoFoto.querySelector("h3");
    //             const hasilan = judul.textContent.toLowerCase();
    //             if(hasilan.includes(inputan)){
    //                 kartu.style.display = "block";
    //             }else{
    //                 kartu.style.display = "none";
    //             }
    //     })
    // })


    searchFoto.addEventListener("input", function(event){

        const inputan = event.target.value.toLowerCase();

        Array.from(daftarFoto.children).forEach(function(kartu){

            const infoFoto = kartu.querySelector(".infoFoto");
            const judul = infoFoto.querySelector("h3");

            const hasilan = judul.textContent.toLowerCase();

            if(hasilan.includes(inputan)){
                kartu.style.display = "block";
            }else{
                kartu.style.display = "none";
            }

        });

    });


    formFoto.reset();
})