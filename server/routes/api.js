const express = require('express')
const router = express.Router()




const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

router.post('/wonder', function (req, res) {
    wonders.push({ ...req.body, visited: false })
    console.log("Someone's trying to make a post request")
    res.send("sssssss")
})

router.put('/wonder/:name', function (req, res) {
    console.log("About to update someone")
    let wonder = req.params.name
    wonders.find(w => w.name === wonder).visited = true
    res.end()
    
})
router.delete('/wonder/:name', function (req, res) {
    let wonder = req.params.name
    let wondersIndex = wonders.findIndex(w => w.name === wonder)
    wonders.splice(wondersIndex, 1)
    res.end()
})


router.get('/wonders', function (req, res) {
    res.send(wonders)
})


module.exports = router
