

var fillers = {
    title: "script to pass through nunjucks", 
    people: [
        {name: "Gandalf"}, 
        {name: "Frodo"}, 
        {name: "Hermione"}
    ]
};

nunjucks.render("index.html", fillers, function(err, output){
    console.log(output);
});
