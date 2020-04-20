const express = require("express")
const app = express()
const port = 3000


const dogs = [
    {
        id: 1,
        name: "Fido",
        age: 5,
        likes: "favourite ball"
    },
    {
        id: 2,
        name: "Rex",
        age: 3,
        likes: "long walks"
    },
    {
        id: 3,
        name: "Max",
        age: 8,
        likes: "food"
    }

]

app.use(express.json())



app.get("/dogs", (req, res) => {
    res.json(dogs)
})

app.get("/dogs/:id", (req, res) => {
    const foundDog = dogs.find((dog) => {
        if (dog.id.toString() === req.params.id) {
            return true
        } else {
            return false
        }
    })
    res.send(foundDog)
})

app.post("/dogs", (req, res) => {
    dogs.push(req.body)
    res.status(201)
    res.send()
})

app.put("/dogs/:id", (req, res) => {
   const index = dogs.findIndex((dog) => {
    return dog.id == req.params.id
   })
   dogs[index] = {
       id: req.params.id,
       name: req.body.name,
       age: req.body.age,
       likes: req.body.likes
   }
   res.status(200)
   res.send()

})

app.delete("/dogs/:id", (req, res) => {
    const dog = dogs.find((dog) => dog.id === parseInt(req.params.id))
    if (!dog) {
        res.status(404)
    } else {
        dogs.splice((dogs.indexOf(dog)), 1)
    }
    res.send()
})

app.listen(port, () => console.log("Running page"))