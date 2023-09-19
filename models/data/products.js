// import "dotenv/config.js"
// import "../../config/database.js"
// import Product from "../Product.js" // SE IMPORTA MODELO Product

// let products = [
//     // ROBERT 
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Samsung Galaxy S21",
//         "description": "Powerful flagship smartphone with a stunning display and advanced camera.",
//         "image": "https://images.samsung.com/is/image/samsung/p6pim/co/sm-g990elvkltc/gallery/co-galaxy-s21-fe-g990-sm-g990elvkltc-530633387?$650_519_PNG$",
//         "price": 799.99,
//         "stock": 50
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "iPhone 13",
//         "description": "The latest iPhone model featuring improved performance and camera capabilities.",
//         "image": "https://pladani.com/wp-content/uploads/2022/04/iphone-13-negro.jpg",
//         "price": 899.00,
//         "stock": 40
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Google Pixel 6",
//         "description": "A Google smartphone known for its excellent camera quality and clean Android experience.",
//         "image": "https://m.media-amazon.com/images/I/71QQZr2pNSL.jpg",
//         "price": 699.95,
//         "stock": 30
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "OnePlus 9",
//         "description": "High-performance smartphone with a focus on speed and smooth user experience.",
//         "image": "https://m.media-amazon.com/images/I/61fy+u9uqPL.jpg",
//         "price": 749.50,
//         "stock": 60
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Xiaomi Mi 11",
//         "description": "Feature-rich smartphone with powerful specifications and a competitive price.",
//         "image": "https://exitocol.vtexassets.com/arquivos/ids/7466419/celular-xiaomi-mi-11-lite-128gb-8gb-ram-azul.jpg?v=637551620842300000",
//         "price": 599.00,
//         "stock": 20
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Sony Xperia 1 III",
//         "description": "Sony's flagship smartphone with a 4K display and advanced camera features.",
//         "image": "https://m.media-amazon.com/images/I/616RgQJvbkL.jpg",
//         "price": 1099.99,
//         "stock": 15
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "LG Velvet",
//         "description": "Sleek and stylish smartphone with a focus on multimedia and design.",
//         "image": "https://rebi.com.co/wp-content/uploads/2020/12/70036467.jpg",
//         "price": 699.95,
//         "stock": 25
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Huawei P40 Pro",
//         "description": "Huawei's flagship smartphone with a powerful camera system and innovative features.",
//         "image": "https://exitocol.vtexassets.com/arquivos/ids/3018584/1769991_a.jpg?v=637322147811570000",
//         "price": 849.00,
//         "stock": 35
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Motorola Edge+",
//         "description": "A Motorola smartphone with a focus on edge-to-edge display and long battery life.",
//         "image": "https://i.blogs.es/71b740/motorola-edge-destacada/1366_2000.jpg",
//         "price": 799.50,
//         "stock": 45
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Nokia 9 PureView",
//         "description": "Nokia's smartphone with a unique camera setup for impressive photography.",
//         "image": "https://camara.pro/wp-content/uploads/2019/03/nokia_9_pureview-specs_popup-desktop.png",
//         "price": 599.95,
//         "stock": 10
//     },
//     // Harold  - Gadget Innovadores
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Smart Mirror 2.0",
//         "description": "Interactive smart mirror with touchscreen display, weather updates, and voice control.",
//         "image": "https://www.homecrux.com/wp-content/gallery/smart-mirror/smart-mirror-1.jpg",
//         "price": 199.99,
//         "stock": 20
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Nano Drone X1",
//         "description": "Pocket-sized nano drone with HD camera, perfect for capturing aerial shots anywhere.",
//         "image": "https://m.media-amazon.com/images/I/71mFVlL6NPL._AC_UF894,1000_QL80_.jpg",
//         "price": 49.99,
//         "stock": 100
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "HoloLens 360",
//         "description": "Augmented reality headset that overlays holographic images onto the real world.",
//         "image": "https://www.tworeality.com/wp-content/uploads/2016/03/tworeality-realidad-virtual-hololens.jpg",
//         "price": 499.99,
//         "stock": 10
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "NeuroFit VR",
//         "description": "Virtual reality system for neurorehabilitation, helping patients regain motor skills.",
//         "image": "https://www.mdpi.com/sensors/sensors-20-06045/article_deploy/html/images/sensors-20-06045-g005.png",
//         "price": 799.99,
//         "stock": 5
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Quantum Earbuds",
//         "description": "Wireless earbuds with real-time language translation and advanced noise cancellation.",
//         "image": "https://m.media-amazon.com/images/I/61nR2CVtvvS.jpg",
//         "price": 149.99,
//         "stock": 50
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "SolarGrip Charger",
//         "description": "Portable solar charger for smartphones, with a built-in adjustable grip for hands-free use.",
//         "image": "https://manuals.plus/wp-content/uploads/2021/08/s-l640-Copy-1.jpg?ezimgfmt=rs:412x659/rscb1/ng:webp/ngcb1",
//         "price": 79.99,
//         "stock": 30
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "Infinite Desk",
//         "description": "Height-adjustable desk with integrated touchscreen display and wireless charging.",
//         "image": "https://i.pinimg.com/1200x/3a/d1/c4/3ad1c42bbb9d479aa58a254547b73417.jpg",
//         "price": 599.99,
//         "stock": 15
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "NeuroSync Headset",
//         "description": "Headset that uses brainwave synchronization for enhancing focus and productivity.",
//         "image": "https://www.neurosync.health/wp-content/uploads/2022/09/EYE-SYNC-New-Transparent-1-e1662507025832.png",
//         "price": 299.99,
//         "stock": 8
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "RoboChef Pro",
//         "description": "AI-powered robotic chef that can cook gourmet meals in minutes.",
//         "image": "https://www.researchgate.net/publication/348089369/figure/fig6/AS:976083159625730@1609727768312/Two-different-examples-of-robotchefs-a-MK1-The-robochef-from-Moley-Robotics-that.ppm",
//         "price": 1299.99,
//         "stock": 3
//     },
//     {
//         "category_id": '64eeb49f272fd16acc6e20ed',
//         "name": "TimeWarp Watch",
//         "description": "Smartwatch with the ability to manipulate the perception of time for the wearer.",
//         "image": "https://m.media-amazon.com/images/I/71oZRwJRK-L._AC_UY1000_.jpg",
//         "price": 399.99,
//         "stock": 7
//     },
//     //  SANTIAGO - Home Appliances
//     //     {
//     //     "category_id": 5,
//     //     "name": "Coffe make",
//     //     "description": "Filter Coffee Maker Machine Instant Anti-Drip 12 Cups 800W 1.5L Jug Geepas",
//     //     "image": "https://i.ebayimg.com/images/g/7qAAAOSwaYpjx9~R/s-l1600.jpg",
//     //     "price": 24.99,
//     //     "stock": 50
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Blender",
//     //     "description": "Blender Food Processor Glass Jug Smoothie Milkshake Maker Coffee Grinder 500W",
//     //     "image": "https://i.ebayimg.com/images/g/IT0AAOSwPJ1j5lbJ/s-l300.jpg",
//     //     "price": 34.99,
//     //     "stock": 40
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Mixer",
//     //     "description": "COOKLEE Stand Mixer, 800W 8.5-Qt. Kitchen Mixer with Dishwasher-Safe Dough Hooks",
//     //     "image": "https://i.ebayimg.com/images/g/OPYAAOSwwxdkzSqO/s-l1600.jpg",
//     //     "price": 94.95,
//     //     "stock": 30
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "toaster",
//     //     "description": "Black 4 Slice Toaster Family Size 1400W with Variable Browning Control",
//     //     "image": "https://i.ebayimg.com/images/g/vb4AAOSweqFjwUo5/s-l300.jpg",
//     //     "price": 23.99,
//     //     "stock": 60
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Microwave",
//     //     "description": "Russell Hobbs RHM2076B 20 Litre 800W Digital Microwave 5 Power Levels - Black",
//     //     "image": "https://i.ebayimg.com/images/g/wu8AAOSwmPRk1nLE/s-l300.jpg",
//     //     "price": 72.99,
//     //     "stock": 20
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Pressure cooker",
//     //     "description": "Aluminum Gas Pressure cooker Infuction Cooker Capacity Polished size",
//     //     "image": "https://i.ebayimg.com/images/g/Zu0AAOSwILBkkg3M/s-l1600.jpg",
//     //     "price": 28.00,
//     //     "stock": 15
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Stove",
//     //     "description": "Electric Stove Burner Double Cooktop Dual Hot Ring Portable Tabletop Kitchen",
//     //     "image": "https://i.ebayimg.com/images/g/4-8AAOSw3tRitxbp/s-l1600.jpg",
//     //     "price": 336.95,
//     //     "stock": 25
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Tea Maker",
//     //     "description": "HD-1802S 220V 2000W 1.8L Stainless Steel Electric Kettle with Water Window",
//     //     "image": "https://i.ebayimg.com/images/g/7VAAAOSw49NkgNXj/s-l1600.jpg",
//     //     "price": 340.00,
//     //     "stock": 35
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Vacuum cleaner",
//     //     "description": "EQP10 Vacuum Cleaner Color Red Voltage 127V or 220V Power 1600W",
//     //     "image": "https://www.alkosto.com/medias/7896347149532-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNzMwM3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobE1DOW9ZMlF2T0RrMU9Ua3lORFV3TWpVMU9DNXFjR2N8ZDA4YWI4ZjY1ZjdkYWU5NDM4OTkxNzI0NDRhZDU1NTUxNDc2M2RkYTZkN2FiMTcxNTgxM2YyMDg5ZjhjMjczNw",
//     //     "price": 135.80,
//     //     "stock": 45
//     // },
//     // {
//     //     "category_id": 5,
//     //     "name": "Clothes dryer",
//     //     "description": "It is the first washing machine in Colombia with Artificial Intelligence.",
//     //     "image": "https://www.alkosto.com/medias/8806098404926-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNDcyMzN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGtPQzlvTkRndk9UYzBORFUxTWpRMk1ETXhPQzVxY0djfDdjZWViNWZmYmEwMzYxYTg4YTczMjlmNjA0ZjVmNGY4Mzk2ZTJlN2IwYTQ3M2ViN2ZkYjI3OGE2MTk5MzMyYmE",
//     //     "price": 199.95,
//     //     "stock": 10
//     // }
// ]

// Product.insertMany(products)
// console.log("Products created")