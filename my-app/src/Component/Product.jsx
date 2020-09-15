import React from 'react'
import "./Product.css";

export default function Product(props) {
console.log(props)
const listMenu = props.listMakanan.map((item)=>{
    return(
        <ul>
            <li>Nama : {item.nama}</li>,
            <li>Harga : {item.harga}</li>
        </ul>
    )
});

    return (
        <div>
            {listMenu}
        </div>
    )
}
