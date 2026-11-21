/*
Import
 -Export digunakan untuk mengekpos kode di
  module,jika kita ingin menggunakan kode yang
  sudah di ekpos di module,kita bisa menggunakan
  kata kunci import
 -Cara menggunakan kata kunci import adalah
  sebagai  berikut:
  import{namafunction,namavariabel,Namaclass} from "lokasi-module.js"
 -Module hanya bisa digunakan di module lain,jadi
  pastikan ketika membuat script,kita harus menggunakan
  type module
 -Saat menggunakan import,kita tidak perlu lagi 
  menambahkan script module src satu per satu,
  karena sudah di handle oleh browser secara 
  otomatis ketika menggunak/an module 
*/

export function sayHello(name){
  console.info(`Hello My name is ${name}`);
}

export function sayGoodBye(name){
  console.info(`GoodBye ${name}`);
}

export const name = "Iki"