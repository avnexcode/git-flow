import {  NextResponse } from "next/server"
const products = [
    {
        name: 'Product 1'
    }
]
export const GET = () => {
    NextResponse.json({ products })
}

// export const POST = (req: NextRequest) => {
//     const newProduct = req.body
//     NextResponse.json({ newProduct })
// }