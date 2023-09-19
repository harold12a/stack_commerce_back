import mercadopago from 'mercadopago';

export default async (req, res, next) => {
    try {

        // console.log(req.body)

        mercadopago.configure({
            access_token: 'TEST-6655331838445901-091411-a442f29b39be4c86aeb0ee8e7863b92c-1469599404',
        });

        let preference = {
            // items: [
            //     {
            //         "title": "Nombre del Producto",
            //         "unit_price": 100,
            //         "quantity": 1
            //     },
            //     {
            //         "title": "Nombre del Producto 2",
            //         "unit_price": 100,
            //         "quantity": 1
            //     }
            // ],
            items: req.body,
            back_urls : {
                success: process.env.CLIENT_URL + "/payment/success",
                failure: process.env.CLIENT_URL + "/payment/failure",
                pending: process.env.CLIENT_URL + "/payment/pending"
            },
        };

        const result = await mercadopago.preferences.create(preference);

        // Devuelve la URL de inicio de la preferencia de pago
        return res.status(201).send(result.body.init_point);
    } catch (error) {
        return next(error);
    }
};




// import mercadopago from 'mercadopago';

// export default async (req, res, next) => {
//     try {
//         // Configura las credenciales de MercadoPago
//         mercadopago.configure({
//             access_token: process.env.MP_ACCESS_TOKEN,
//         });
//         // Crea una preferencia de pago
//         console.log(req.body)
//         const preference = {
//             items:req.body
            
        
//                 // [{
//                 //     title: 'Producto 1',
//                 //     quantity: 3,
//                 //     currency_id: 'COP',
//                 //     unit_price: 2500,
//                 // },
//                 // {
//                 //     title: 'Producto 2',
//                 //     quantity: 3,
//                 //     currency_id: 'COP',
//                 //     unit_price: 26000,
//                 // },
//                 // ]
//         };
//         const result = await mercadopago.preferences.create(preference);
//         console.log(result.response.init_point);
//         // Redirige al usuario a la página de pago
//         return res.status(201).send(result.response.init_point);
//     } catch (error) {
//         return next(error);
//     }
// };