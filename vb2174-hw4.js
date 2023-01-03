//1st query
db.restaurants.count();

//2nd query
db.restaurants.find();

//3rd query
db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine":1});

//4th query
db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1,"_id":0});

//5th query
db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"address.zipcode" :1,"_id":0});

//6th query
db.restaurants.find({"borough": "Bronx"});

//7th query
db.restaurants.find({"borough": "Bronx"}).limit(5);

//8th query
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);

//9th query
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 85}}}});

//10th query
db.restaurants.find({grades: {$elemMatch: {"score": {$gt: 80, $lt: 100}}}});

//11th query
db.restaurants.find({"address.coord":{$lt:-95.75416}});

//12th query
db.restaurants.find(
{$and:
    [
       {"cuisine":{$ne:"American"}},
       {"grades.score":{$gt:70}},
       {"address.coord":{$lt:-65.754168}}
]});

//13th query
db.restaurants.find({"cuisine" : 
    {$ne : "American "},
    "grades.score" :{$gt: 70},
    "address.coord" : {$lt : -65.754168}
});

//14th query
db.restaurants.find({
"cuisine" : {$ne : "American "},
"grades.grade" :"A",
"borough": {$ne : "Brooklyn"}
}).sort({"cuisine":-1});

//15th query
db.restaurants.find(
{"name":/^Wil/},
{
    "restaurant_id":1,
    "name":1, 
    "borough":1,
    "cuisine":1, 
    "_id":0
});

//16th query
db.restaurants.find(
{"name":/ces$/},
{
    "restaurant_id":1,
    "name":1, 
    "borough":1,
    "cuisine":1, 
    "_id":0
});

//17th query
db.restaurants.find(
{"name":/.*Reg.*/},
{
    "restaurant_id":1,
    "name":1, 
    "borough":1,
    "cuisine":1, 
    "_id":0
});

//18th query
db.restaurants.find({
"borough":"Bronx",
$or:[
    {"cuisine":"American "},
    {"cuisine":"Chinese"}
]});

//19th query
db.restaurants.find({
"borough":{$in:[
    "Staten Island", 
    "Queens",
    "Bronx",
    "Brooklyn"]
}},
{
    "restaurant_id":1, 
    "name":1, 
    "borough":1, 
    "cuisine":1, 
    "_id":0
});

//20th query
db.restaurants.find({ 
"borough":{
    $nin:[
    "Staten Island", 
    "Queens",
    "Bronx",
    "Brooklyn"]
}},
{
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1,
    "_id":0
});

//21st query
db.restaurants.find(
{"grades.score":{$lte:10}},
{
    "restaurant_id":1, 
    "name":1, 
    "borough":1, 
    "cuisine":1,
    "grades.score":1, 
    "_id":0
});

//22nd query
db.restaurants.find(
{$or:[
    {"name":/^Wil/}, 
    {$and:[
        {"cuisine":{$ne:"American "}},
        {"cuisine":{$ne:"Chinese"}}
    ]}
]},
{
    "restaurant_id":1, 
    "name":1, 
    "borough":1, 
    "cuisine":1, 
    "_id":0
});

//23rd query
db.restaurants.find( 
{
    "grades.date": ISODate("2014-08-11T00:00:00Z"), 
    "grades.grade":"A" , 
    "grades.score" : 11
}, 
{
    "restaurant_id" : 1,
    "name":1,
    "grades":1,
    "_id":0
});

//24th query
db.restaurants.find( 
{ 
    "grades.1.date": ISODate("2014-08-11T00:00:00Z"), 
    "grades.1.grade":"A" , 
    "grades.1.score" : 9
}, 
{
    "restaurant_id" : 1,
    "name":1,
    "grades":1,
    "_id":0
});

//25th query
db.restaurants.find( 
{"address.coord.1": 
    {$gt : 42, $lte : 52}
},
{
    "restaurant_id" : 1,
    "name":1,
    "address":1,
    "_id":0
});



