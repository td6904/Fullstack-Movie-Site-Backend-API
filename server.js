import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) => 
res.status(404). json({error: "not found"}))

export default app