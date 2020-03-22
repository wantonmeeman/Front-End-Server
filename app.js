const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const ip = require('ip')
const os = require('os')
;
app.use(cors())
var IP = ip.address()
var myLogger = function (req, res, next) {//middle ware
  next()
}

app.use(myLogger)
app.use(express.static('./HTML'))

app.listen(80,IP ,function () {
  console.log(`Web App Hosted at http://`+os.hostname()+`:80/`);
});

app.get('/Login', function (req, res) {//do password hashing, and thus change validation
  fs.createReadStream('./HTML/index.HTML').pipe(res)
})
app.get('/EditProfile', function (req, res) {
  fs.createReadStream('./HTML/editprofile.HTML').pipe(res)
})
// app.get('/test', function (req, res) {
//   fs.createReadStream('./HTML/Upload.HTML').pipe(res)
// })
app.get('/Profile',function(req,res){// add quick view listings
  fs.createReadStream('./HTML/profile.HTML').pipe(res)
})
app.get('/Listing', function (req, res) {
  fs.createReadStream('./HTML/homepage.HTML').pipe(res)
})
app.get('/ErrorPage', function (req, res) {
  fs.createReadStream('./HTML/errorpage.HTML').pipe(res)
})
app.get('/ListingView/', function (req, res) {
  fs.createReadStream('./HTML/listingView.HTML').pipe(res)
})
app.get('/LikedListings/', function (req, res) {
  fs.createReadStream('./HTML/likedlistings.HTML').pipe(res)
})
app.get('/SelfListing/', function (req, res) {
  fs.createReadStream('./HTML/selfListings.HTML').pipe(res)
})
app.get('/EditListing',function (req, res) {
  fs.createReadStream('./HTML/EditListing.HTML').pipe(res)
})
app.get('/NewListing',function (req, res) {
  fs.createReadStream('./HTML/NewListing.HTML').pipe(res)
})
app.get('/SignUp/', function (req, res) {
  fs.createReadStream('./HTML/signup.HTML').pipe(res)
})
app.get('/Offers/', function (req, res) {
  fs.createReadStream('./HTML/offerview.HTML').pipe(res)
})
app.get('/Listing1/', function (req, res) {
  fs.createReadStream('./HTML/homepage2.html').pipe(res)
})


// app.listen(port, function () {
//   console.log(`Listening on http://localhost:${port}`)
// })
