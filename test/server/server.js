const express = require('express')
const cors = require('cors')
const List = require("collections/list");
const server = express()

const basket = new List([]);

server.use(cors())
server.use(express.json())

server.get("/list", (req, res) => {
    res.header("content-type", "application/json")
    res.send(
        JSON.stringify(
            [
                {
                    id: "0",
                    title: "Good 1",
                    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw0be9713c/images/full/9101709_Ca/2022/9101709_Canyon_Signature_Pro_Wool_Socks_grey_full_v2.png"
                },
                {
                    id: "1",
                    title: "Good 2",
                    img: "https://cdn.shopify.com/s/files/1/2114/3697/products/Midnight-sky-creme-almond-resized.jpg?v=1662588146"
                },
                {
                    id: "2",
                    title: "Good 3",
                    img: "https://londonsockcompany.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/app/uploads/2023/04/web-square-2-LSC_Simply_Sartorial_Lavender_Daffodil_Coral_Skye_Pastel_CREDIT_LilyBungay.jpg"
                },
                {
                    id: "3",
                    title: "Good 4",
                    img: "https://www.injinji.com/media/catalog/product/2/8/281110_clo_front_4.png?optimize=high&fit=bounds&height=700&width=700&canvas=700:700"
                },
            ]
        )
    )
})

server.post("/add", async (req, res) => {
    let id = await req.body.id;
    if (id.charAt(0) === '-') {
        id = id.substring(1)
        basket.delete(id)
    } else {
        basket.add(id)
    }

    res.send(JSON.stringify({count: basket.filter(elem => elem === id).length }))
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next()
})

server.listen(3000, "localhost", () => {
    console.log(`Server started on port 3000`)
})