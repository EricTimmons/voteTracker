$(function() {
    var Cat = function(name, path) {
        this.name = name;
        this.path = path;
        this.vote = 0;
    };
    Cat.prototype.vote = function() {
        ++this.vote
    };
    var tracker = [];

    var cat1 = new Cat('Rocket', 'catPics/cat1.jpg'),
        cat2 = new Cat('Cliff', 'catPics/cat2.jpg'),
        cat3 = new Cat('Furb', 'catPics/cat3.jpg'),
        cat4 = new Cat('Pawz', 'catPics/cat4.jpg'),
        cat5 = new Cat('Tails', 'catPics/cat5.jpg'),
        cat6 = new Cat('Jeff', 'catPics/cat6.jpg'),
        cat7 = new Cat('Wonder Cat', 'catPics/cat7.jpg'),
        cat8 = new Cat('Cracker Jack', 'catPics/cat8.jpg'),
        cat9 = new Cat('Eraser', 'catPics/cat9.jpg'),
        cat10 = new Cat('Table', 'catPics/cat10.jpg'),
        cat11 = new Cat('Chair', 'catPics/cat11.jpg'),
        cat12 = new Cat('Catango', 'catPics/cat12.jpg'),
        cat13 = new Cat('Cat Man', 'catPics/cat13.jpg'),
        cat14 = new Cat('Vince Mcman', 'catPics/cat14.jpg');

    tracker.push(cat1,
        cat2, cat3, cat4,
        cat5, cat6, cat7,
        cat8, cat9, cat10,
        cat11, cat12, cat13,
        cat14);

    var item = Math.floor(Math.random()*tracker.length);
    var item2 = Math.floor(Math.random()*tracker.length);

    if (item === item2) {
        item2 = Math.floor((item2 / 2) + 1);
    } ;
    console.log(item, item2);
    $('<img />', {id: 'leftCat', src: tracker[item].path}).appendTo($('#C1'));
    $('<img />', {id: 'rightCat', src: tracker[item2].path}).appendTo($('#C3'));

    var pieData = [
    {
        value: cat1.votes,
        color:"#A00012"
    },
    {
        value : cat2.votes,
        color : "#0A0064"
    },
    {
        value : cat3.votes,
        color : "#00A037"
    },
    {
        value : cat4.votes,
        color : "#004200"
    },
    {
        value : cat5.votes,
        color : "#0230A0"
    },
    {
        value : cat6.votes,
        color : "#09300A"
    },
    {
        value : cat7.votes,
        color : "#c00920"
    },
    {
        value : cat8.votes,
        color : "#00c078"
    },
    {
        value : cat9.votes,
        color : "#902c00"
    },
    {
        value : cat10.votes,
        color : "#0980c0"
    },
    {
        value : cat11.votes,
        color : "#0F900c"
    },
    {
        value : cat12.votes,
        color : "#f03900"
    },
    {
        value : cat13.votes,
        color : "#0fB700"
    },
    {
        value : cat14.votes,
        color : "#00f01A"
    }
];

var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
}

$('#leftClick').click(function(e) {
    e.preventDefault();
    ++polarChart.segments[item].value;
});
$('#rightClick').click(function(e) {
    e.preventDefault();
    ++polarChart.segments[item2].value;
});

var countries= document.getElementById("countries").getContext("2d");
var polarChart = new Chart(countries).PolarArea(pieData, pieOptions);

});
