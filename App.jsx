import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import KompSatu from './components/KompSatu'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card' 
import ShowTable from './components/ShowTable'
import Nav from './components/Nav'
import IsiCard from './components/IsiCard'

// const daftarAnggota = [
//   {nama: "na'imah", alamat: "gadog"},
//   {nama: "nana", alamat: "karangrejo"},
//   {nama: "kagura", alamat: "rogojampi"},
//   {nama: "lolita", alamat: "gambiran"},
// ]

// function App() {
//     return (
//   <div>
//     <Nav />
//     <div style={{margin:"50"}}>
//       <KompSatu/>
//       <Header/>
//       <Main/>
//       {daftarAnggota.map((agt,indeks)=>
//         <Card
//           nama = {agt.nama}
//           alamat = {agt.alamat} />      
//         )}  
//       <ShowTable daftarNama = {daftarAnggota}/>
//       <Footer/>
//     </div>
//   </div>
//   )
// }

const isiCard = [
  {
    Image: "../Components/images/kucing 1.jpeg",
    caption: "Ini Adalah pict 1",
  },
  {
    Image: "../Components/images/kucing 2.jpeg",
    caption: "Ini Adalah pict 2",
  },
  {
    Image: "../Components/images/kucing 3.jpeg",
    caption: "Ini Adalah pict 3",
  },
  {
    Image: "../Components/images/kucing 4.jpeg",
    caption: "Ini Adalah pict 4",
  },
  {
    Image: "../Components/images/kucing 5.jpeg",
    caption: "Ini Adalah pict 5",
  },
  {
    Image: " ../Components/images/kucing 6.jpeg",
    caption: "Ini Adalah pict 6",
  },
  {
    Image: "../Components/images/kucing 6.jpeg",
    caption: "Ini Adalah pict 7",
  },
  {
    Image: "../Components/images/kucing 8.jpeg",
    caption: "Ini Adalah pict 8",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.Image} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}


export default App