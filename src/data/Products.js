const Products = [
        {
            id: "001",
            name:"Aros Circulares",
            price: "600", 
            category: "arcilla",
            stock: "5",
            image:"https://i.postimg.cc/4469gjzz/aros-arcilla-circulo-chico-negro.jpg", 
            variacion: [
                {
                    id: "001BL",
                    color: "blanco",
                    image: "https://i.postimg.cc/y8bJjKHz/aros-arcilla-circulo-chico-blanco.jpg"
                },
                {
                    id: "001AM",
                    color: "amarillo",
                    image: "https://i.postimg.cc/Gtx8xscM/aros-arcilla-circulo-chico-amarillo.jpg"
                },
                {
                    id: "001MD",
                    color: "mandarina",
                    image: "https://i.postimg.cc/c4d84TmP/aros-arcilla-circulo-chico-mandarina.jpg"
                },
                {
                    id: "001NE",
                    color: "negro",
                    image: "https://i.postimg.cc/4469gjzz/aros-arcilla-circulo-chico-negro.jpg"
                },
                {
                    id: "001VD",
                    color: "verde",
                    image: "https://i.postimg.cc/qR8zpCCk/aros-arcilla-circulo-chico-verde.jpg"
                },
                {
                    id: "001SL",
                    color: "salmón",
                    image: "https://i.postimg.cc/Ss0n0GRT/aros-arcilla-circulo-chico-salmon.jpg"
                },
                {
                    id: "001RO",
                    color: "rojo",
                    image: "https://i.postimg.cc/3w0kbq80/aros-arcilla-circulo-chico-rojo.jpg"
                }
            ]
        },
        {
            id: "002", 
            name:"Aros Botones", 
            price: "520", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/BQNP8D7b/aros-arcilla-botones-negro-naranja.jpg", 
            variacion: [
                {
                    id: "002NE",
                    color: "negro",
                    image: "https://i.postimg.cc/cLHgfHPm/aros-arcilla-botones-negro.jpg"
                },
                {
                    id: "002BL",
                    color: "blanco",
                    image: "https://i.postimg.cc/Qt5WVyvZ/aros-arcilla-botones-blanco.jpg"
                },
                {
                    id: "002N-N",
                    color: "negro-naranja",
                    image: "https://i.postimg.cc/BQNP8D7b/aros-arcilla-botones-negro-naranja.jpg"
                },
                {
                    id: "002B-N",
                    color: "blanco-naranja",
                    image: "https://i.postimg.cc/MHSfBY8M/aros-arcilla-botones-blanco-naranja.jpg"
                }
            ]
        },
        {
            id: "003", 
            name:"Aros Animal Print", 
            price: "550", 
            category: "arcilla", 
            stock: "5", 
            image:"https://i.postimg.cc/qMGy8Wqk/aros-animal-print-rojo.jpg", 
            variacion: [
                {
                    color: "blanco",
                    id: "003BL",
                    image: "https://i.postimg.cc/50F8L0YG/aros-animal-print-blanco.jpg"
                },
                {
                    color: "rojo",
                    id: "003RO",
                    image: "https://i.postimg.cc/qMGy8Wqk/aros-animal-print-rojo.jpg"
                },
                {
                    color: "verde",
                    id: "003VD",
                    image: "https://i.postimg.cc/dVHCfdGp/aros-animal-print-verde.jpg"
                },
                {
                    color: "mostaza",
                    id: "003MZ",
                    image: "https://i.postimg.cc/gjF8DW30/aros-animal-print-mostaza.jpg"
                },
                {
                    color: "naranja",
                    id: "003NR",
                    image: "https://i.postimg.cc/Rh7fpDTL/aros-animal-print-naranja.jpg"
                }
            ]
        },
        {
            id: "004", 
            name:"Aros Barquitos", 
            price: "540", 
            category: "arcilla", 
            stock: "5", 
            image:"https://i.postimg.cc/3Jh203KS/aros-arcilla-barco-peque-o-mandarina.jpg", 
            variacion: [
                {
                    color: "mandarina",
                    id: "004NR",
                    image: "https://i.postimg.cc/3Jh203KS/aros-arcilla-barco-peque-o-mandarina.jpg"
                },
                {
                    color: "negro",
                    id: "004NE",
                    image: "https://i.postimg.cc/1356MMVD/aros-arcilla-barco-peque-o-negro.jpg"
                }
            ]
        },
        {
            id: "005", 
            name:"Aros Círculo Chico Manchas", 
            price: "540", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/3xs8WxhW/aros-circulo-chico-manchas.jpg", 
            variacion: [
                {
                    id: "005NR",
                    color: "blanco, negro, naranja",
                    image: "https://i.postimg.cc/3xs8WxhW/aros-circulo-chico-manchas.jpg"
                },
                {
                    id: "005NR",
                    color: "naranja",
                    image: "https://i.postimg.cc/3w2KGQr1/aros-circulo-chico-naranja-manchas.jpg"
                }
            ]
        },
        {
            id: "006", 
            name:"Aros Rendondos Manchas", 
            price: "540", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/qqD0rkQJ/aros-redondos-arcilla-manchas.jpg", 
            variacion: [
                {
                    id: "006BN",
                    color: "blanco, negro, naranja",
                    image: "https://i.postimg.cc/qqD0rkQJ/aros-redondos-arcilla-manchas.jpg"
                }
            ]
        },
        {
            id: "007", 
            name:"Aros Circulo Doble Manchas", 
            price: "540", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/PxhdzVPj/aros-circulo-doble-manchas.jpg", 
            variacion: [
                {
                    id: "007BN",
                    color: "blanco, negro, naranja",
                    image: "https://i.postimg.cc/PxhdzVPj/aros-circulo-doble-manchas.jpg"
                }
            ]
        },
        {
            id: "008", 
            name:"Aros Negros Tres Piezas", 
            price: "540", 
            category: "arcilla", 
            stock: "5", 
            image:"https://i.postimg.cc/cHm0D7n8/aros-negros-tres-piezas.jpg", 
            variacion: [
                {
                    id: "008NE",
                    color: "negro",
                    image: "https://i.postimg.cc/cHm0D7n8/aros-negros-tres-piezas.jpg"
                }
            ]
        },
        {
            id: "009", 
            name:"Aros Pétalos", 
            price: "550", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/v80GfzyJ/aros-petalos-blancos.jpg", 
            variacion: [
                {
                    id: "009BL",
                    color: "blanco",
                    image: "https://i.postimg.cc/v80GfzyJ/aros-petalos-blancos.jpg"
                }
            ]
        },
        {
            id: "010", 
            name:"Aros Redondos", 
            price: "600", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/nhjVHQ66/aros-arcilla-redondos-salmon.jpg", 
            variacion: [
                {
                    id: "010BL",
                    color: "blanco",
                    image: "https://i.postimg.cc/TYPY4sQ2/aros-arcilla-redondos-blanco.jpg"
                },
                {
                    id: "010SL",
                    color: "salmon",
                    image: "https://i.postimg.cc/nhjVHQ66/aros-arcilla-redondos-salmon.jpg"
                },
                {
                    id: "010AM",
                    color: "amarillo",
                    image: "https://i.postimg.cc/V6ckZLZ2/aros-arcilla-redondos-amarillo.jpg"
                },
                {
                    id: "010MD",
                    color: "mandarina",
                    image: "https://i.postimg.cc/Xqj731b8/aros-arcilla-redondos-mandarina.jpg"
                },
                {
                    id: "010NE",
                    color: "negro",
                    image: "https://i.postimg.cc/PJSfqbfk/aros-arcilla-redondos-negro.jpg"
                },
                {
                    id: "010RO",
                    color: "rojo",
                    image: "https://i.postimg.cc/kMsgwCQh/aros-arcilla-redondos-rojo.jpg"
                }
            ]
        },
        {
            id: "011", 
            name:"Aros Tres Piezas", 
            price: "600", 
            category: "arcilla",
            stock: "5", 
            image:"https://i.postimg.cc/HsPsDtPw/aros-arcilla-tres-piezas-blanco.jpg", 
            variacion: [
                {
                    id: "011BL",
                    color: "blanco",
                    image: "https://i.postimg.cc/HsPsDtPw/aros-arcilla-tres-piezas-blanco.jpg"
                }
            ]
        },
        {
            id: "012", 
            name:"Aros Acqua", 
            price: "550", 
            category: "aros",
            stock: "5", 
            image:"https://i.postimg.cc/nr0gm0Q0/aros-acqua.jpg", 
            variacion: [
                {
                    id: "012BL",
                    color: "celeste",
                    image: "https://i.postimg.cc/nr0gm0Q0/aros-acqua.jpg"
                }
            ]
        },
        {
            id: "013", 
            name:"Aros Ostras", 
            price: "550", 
            category: "aros", 
            stock: "5", 
            image:"https://i.postimg.cc/pr23ygym/aros-ostras.jpg", 
            variacion: [
                {
                    id: "013BL",
                    color: "plateado",
                    image: "https://i.postimg.cc/pr23ygym/aros-ostras.jpg"
                }
            ]
        },
        {
            id: "014", 
            name:"Aros Largos Frida", 
            price: "550", 
            category: "aros", 
            stock: "5", 
            image:"https://i.postimg.cc/JhkfFN9z/aros-largos-frida.jpg", 
            variacion: [
                {
                    id: "014BL",
                    color: "verde",
                    image: "https://i.postimg.cc/JhkfFN9z/aros-largos-frida.jpg"
                }
            ]
        },
        {
            id: "015", 
            name:"Aros Laureles", 
            price: "550", 
            category: "aros", 
            stock: "5", 
            image:"https://i.postimg.cc/Twvzvy6q/aros-laureles-plateados.jpg", 
            variacion: [
                {
                    id: "015BL",
                    color: "plateado",
                    image: "https://i.postimg.cc/Twvzvy6q/aros-laureles-plateados.jpg"
                },
                {
                    id: "015BL",
                    color: "negro",
                    image: "https://i.postimg.cc/BnkWNY7z/aros-laureles-negros.jpg"
                }
            ]
        },
        {
            id: "016", 
            name:"Collar Audrey", 
            price: "2400", 
            category: "collares",
            stock: "2", 
            image:"https://i.postimg.cc/j2LGYB5P/collar-audrey.jpg", 
            variacion: [
                {
                    id: "016PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/j2LGYB5P/collar-audrey.jpg"
                }
            ]
        },
        {
            id: "017", 
            name:"Collar Estrellas", 
            price: "1500", 
            category: "collares",
            stock: "2", 
            image:"https://i.postimg.cc/k4jkZ7n7/collar-estrellas.jpg", 
            variacion: [
                {
                    id: "017PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/k4jkZ7n7/collar-estrellas.jpg"
                }
            ]
        },
        {
            id: "018", 
            name:"Collar Love", 
            price: "1400", 
            category: "collares",
            stock: "2", 
            image:"https://i.postimg.cc/8Cb8Rh9J/collar-love.jpg", 
            variacion: [
                {
                    id: "018PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/8Cb8Rh9J/collar-love.jpg"
                }
            ]
        },
        {
            id: "019",
            name:"Collar Mariposas", 
            price: "1600", 
            category: "collares",
            stock: "2", 
            image:"https://i.postimg.cc/28qfsLbM/collar-mariposas.jpg", 
            variacion: [
                {
                    id: "019DO",
                    color: "dorado",
                    image: "https://i.postimg.cc/28qfsLbM/collar-mariposas.jpg"
                }
            ]
        },
        {
            id: "020", 
            name:"Collar Mariposa", 
            price: "1600", 
            category: "collares",
            stock: "2", 
            image:"https://i.postimg.cc/zBDs0yYd/collar-mariposa.jpg", 
            variacion: [
                {
                    id: "020DO",
                    color: "dorado",
                    image: "https://i.postimg.cc/zBDs0yYd/collar-mariposa.jpg"
                }
            ]
        },
        {
            id: "021", 
            name:"Collar Muffin", 
            price: "1600", 
            category: "collares", 
            stock: "2", 
            image:"https://i.postimg.cc/q7rV6mbH/collar-muffin.jpg", 
            variacion: [
                {
                    id: "0121PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/q7rV6mbH/collar-muffin.jpg"
                }
            ]
        },
        {
            id: "022", 
            name:"Collar Corona", 
            price: "1600", 
            category: "collares", 
            stock: "2", 
            image:"https://i.postimg.cc/2ShN6pxx/collar-corona.jpg", 
            variacion: [
                {
                    id: "022PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/2ShN6pxx/collar-corona.jpg"
                }
            ]
        },
        {
            id: "023", 
            name:"Collar Candado", 
            price: "1600", 
            category: "collares", 
            stock: "2", 
            image:"https://i.postimg.cc/NfWwBGRM/collar-candado.jpg", 
            variacion: [
                {
                    id: "023PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/NfWwBGRM/collar-candado.jpg"
                }
            ]
        },
        {
            id: "024", 
            name:"Collar Piedra", 
            price: "1600", 
            category: "collares", 
            stock: "2", 
            image:"https://i.postimg.cc/2jKs7jcw/collar-piedra.jpg", 
            variacion: [
                {
                    id: "024PL",
                    color: "plateado",
                    image: "https://i.postimg.cc/2jKs7jcw/collar-piedra.jpg"
                }
            ]
        },
        {
            id: "025", 
            name:"Pulsera Secret", 
            price: "1600", 
            category: "pulseras", 
            stock: "2", 
            image:"https://i.postimg.cc/SKm91hTT/pulsera-secret.jpg", 
            variacion: [
                {
                    id: "025SL",
                    color: "salmon",
                    image: "https://i.postimg.cc/SKm91hTT/pulsera-secret.jpg"
                }
            ]
        }
]

export { Products };