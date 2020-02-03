import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from '../api/server/src/routes/ProductRoutes'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/api/products', productRoutes)   

app.get('*', (req, res) => res.status(200).send({
   message: `Backend Projeto Burger Queen`
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app