$(function() {
    var Cat = function(name, path) {
        this.name = name;
        this.path = path;
        this.votes = 0;
    };

    var tracker = [];

    var cat1 = new Cat('Rocket', 'https://i.imgur.com/Fi5A1r9.jpg'),
        cat2 = new Cat('Cliff', 'https://i.imgur.com/PUeYMyg.jpg'),
        cat3 = new Cat('Furb', 'https://i.imgur.com/V0Fk1Im.jpg'),
        cat4 = new Cat('Pawz', 'https://i.imgur.com/6pTGPW2.jpg'),
        cat5 = new Cat('Tails', 'https://i.imgur.com/LkQ0U5U.jpg'),
        cat6 = new Cat('Jeff', 'https://i.imgur.com/DAdbN7g.jpg'),
        cat7 = new Cat('Wonder Cat', 'https://i.imgur.com/MmfkSEu.jpg'),
        cat8 = new Cat('Cracker Jack', 'https://i.imgur.com/OTCNKAL.jpg'),
        cat9 = new Cat('Eraser', 'https://i.imgur.com/RVLMqAY.jpg'),
        cat10 = new Cat('Table', 'https://i.imgur.com/QK3DEAB.jpg'),
        cat11 = new Cat('Chair', 'https://i.imgur.com/De7asdr.jpg'),
        cat12 = new Cat('Catango', 'https://i.imgur.com/sBiXyQa.jpg'),
        cat13 = new Cat('Cat Man', 'https://i.imgur.com/DS8UsDR.jpg'),
        cat14 = new Cat('Vince Mcman', 'https://i.imgur.com/a9TLgI7.jpg');

    tracker.push(cat1,
        cat2, cat3, cat4,
        cat5, cat6, cat7,
        cat8, cat9, cat10,
        cat11, cat12, cat13,
        cat14);

    var item = Math.floor(Math.random()*tracker.length);
    var item2 = Math.floor(Math.random()*tracker.length);

    var renderImages = function() {
        item = Math.floor(Math.random()*tracker.length);
        item2 = Math.floor(Math.random()*tracker.length);
    };

    if (item === item2) {
        item2 = Math.floor((item2 / 3) + 1);
    } ;

    $('<img />', {id: 'leftCat', src: tracker[item].path}).appendTo($('#C1'));
    $('<img />', {id: 'rightCat', src: tracker[item2].path}).appendTo($('#C3'));

    var data = [
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

var options = {
    segmentShowStroke : false,
    animateScale : true,
    scaleShowLabelBackdrop : false
}

$('#leftClick').click(function(e) {
    e.preventDefault();
    polarChart.segments[item].value++;
    polarChart.update();
    $('#leftCat').remove();
    renderImages();
    $('<img />', {id: 'leftCat', src: tracker[item].path}).appendTo($('#C1'));
});

$('#rightClick').click(function(f) {
    f.preventDefault();
    polarChart.segments[item2].value++;
    polarChart.update();
    $( '#rightCat' ).remove();
    renderImages();
    $('<img />', {id: 'rightCat', src: tracker[item].path}).prependTo($('#C3'));
});

var countries= document.getElementById("countries").getContext("2d");
var polarChart = new Chart(countries).PolarArea(data, options);
console.log(item, item2);
$.ajax({
    url: 'https://api.imgur.com/3/album/PZOxN.json',
    method: 'GET',
    headers: {
    'Authorization': 'Client-ID 9a68dea02984b9c'
    }
})
.done(function(res) {
    images = res.data.images
    renderImages(images);
})
.fail(function(err) {
    console.log(err);
});

});
