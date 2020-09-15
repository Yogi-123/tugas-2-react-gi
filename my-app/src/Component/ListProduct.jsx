import React, {useState} from 'react'
import Product from "./Product"

export default function ListProduct() {
    const [listMakanan, setListMakanan] = useState([
        {nama : "Nasi Goreng",
         harga : 15000,},
        {nama : "Mie Goreng",
         harga : 15000,},
        {nama : "Soto Ayam",
         harga : 15000,},
    ]
);

    return (
        <div>
            <Product listMakanan={listMakanan}/>
        </div>
    )
}
