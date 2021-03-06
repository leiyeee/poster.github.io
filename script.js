let c1 = "white";
var colors = [c1, "#000000"];

console.log(c1);

function ranBorder() {
    ranBorderSize = Math.floor((Math.random() * 500) + 1) + "px";
    ranBorderColor = colors[Math.floor((Math.random() * colors.length) + 0)];
    document.getElementById("border").style.border = ranBorderSize;
    document.getElementById("border").style.borderColor = ranBorderColor;
    document.getElementById("border").style.borderStyle = 'solid';
}

function ranType() {
    var e = document.getElementById("color");
    c1 = e.options[e.selectedIndex].value;
    var choosecolor = ['#000000', c1]; /* 颜色选择 */
    /* 随机选择其中一种颜色 */
    ranTitleColor = choosecolor[Math.floor((Math.random() * colors.length) + 0)];
    ranBodyColor = choosecolor[Math.floor((Math.random() * colors.length) + 0)];
    ranTypeSize = Math.floor((Math.random() * 300) + 50) + "px";
    ranBodySize = Math.floor((Math.random() * 100) + 10) + "px";
    // ranTitleColor = colors[Math.floor((Math.random() * colors.length) + 0)];
    // ranBodyColor = colors[Math.floor((Math.random() * colors.length) + 0)];

    document.getElementById("line").style.color = ranTitleColor;
    document.getElementById("line").style.fontSize = ranTypeSize;
    document.getElementById("body").style.fontSize = ranBodySize;
    /*  document.getElementById("body").style.fontSize = ranBodySize;*/
    document.getElementById("body").style.color = ranBodyColor;
    $("#body").last().css({
        "top": Math.floor((Math.random() * 800) + 1) + "px",
        "left": Math.floor((Math.random() * 500) + 1) + "px"
    });

}

function ranSpacing() {
    ranSpacingAmt = Math.floor((Math.random() * 300) + 1) + "px";
    document.getElementById("line").style.letterSpacing = ranSpacingAmt;
    document.getElementById("body").style.letterSpacing = ranSpacingAmt;
}

function ranSprinkles() {
    sprinkleNum = Math.floor((Math.random() * 20) + 2);
    var e = document.getElementById("color");
    c1 = e.options[e.selectedIndex].value;
    var choosecolor = ['#000000', c1];
    sprinkleColor = choosecolor[Math.floor((Math.random() * choosecolor.length) + 0)];


    for (var i = 0; i < sprinkleNum; i++) {
        $("#poster").append("<div class='squiggle'></div>");
        $(".squiggle").last().css({
            "top": Math.floor((Math.random() * 1000) + 1) + "px",
            "left": Math.floor((Math.random() * 900) + 1) + "px"
        });
    }

    $(".squiggle").css({
        "background-color": sprinkleColor,
        "width": 20,
        "height": 80
    });
}

function ranCircles() {
    var e = document.getElementById("color");
    c1 = e.options[e.selectedIndex].value;
    var choosecolor = ['#000000', c1];
    circleColor = choosecolor[Math.floor((Math.random() * colors.length) + 0)];
    var dd = document.getElementById("size");
    var c2 = dd.options[dd.selectedIndex].value;
    for (var i = 0; i < 10; i++) {
        console.log("working");
        $("#poster").append("<div class='circle'></div>");
        var randomleft = Math.floor((Math.random() * 1000) + 1);
        var randomtop = Math.floor((Math.random() * 900) + 1);
        $(".circle").last().css("margin-left", randomleft + "px");
        $(".circle").last().css("margin-top", randomtop + "px");
    }
    $(".circle").css({
        "background-color": circleColor,
        "height": c2 + "px",
        "width": c2 + "px",
    });
}

function ranCross() {
    var e = document.getElementById("color");
    c1 = e.options[e.selectedIndex].value;
    var choosecolor = ['#000000', c1];
    crossColor = choosecolor[Math.floor((Math.random() * colors.length) + 0)];

    for (var i = 0; i < 100; i++) {
        console.log("working");
        $("#poster").append("<div class='cross'></div>");
        var randomleft = Math.floor((Math.random() * 800) + 1);
        var randomtop = Math.floor((Math.random() * 800) + 1);
        $(".cross").last().css("margin-left", randomleft + "px");
        $(".cross").last().css("margin-top", randomtop + "px");

    }
    // $(".cross").css({
    //   "background-color": crossColor,
    // });
    // $(".cross:after").css({
    //   "background-color": crossColor,
    // });

    //     $(".cross").last().css({
    //   "margin-top": Math.floor((Math.random()*1000)+1)+"px"})

}

// function ranSquares() {
//   squareNum = Math.floor((Math.random()*10)+2);
//   squareColor = colors[Math.floor((Math.random()*colors.length)+0)];


//   for (var i = 0; i < squareNum; i++) {
//     squareDim = Math.floor((Math.random()*200)+2);
// 	  $("#poster").append("<div class='square'></div>");
//     $(".square").last().css({
//     "top": Math.floor((Math.random()*1000)+1)+"px",
//     "left": Math.floor((Math.random()*700)+1)+"px",
//     "background-color": squareColor,
//     "width": squareDim,
//     "height": squareDim
//     });
//   }
// }

function changeColor() {
    //title
    var e = document.getElementById("color");
    c1 = e.options[e.selectedIndex].value;
    document.body.style.backgroundColor = c1;
};

$("#new_poster").on("click", function () {
    changeColor();
    ranType();

    if ($('input[name="border"]').is(":checked")) {
        ranBorder();
    } else {
        document.getElementById("border").style.border = 'none';
    }

    if ($('input[name="letter_spacing"]').is(":checked")) {
        ranSpacing();
    } else {
        document.getElementById("line").style.letterSpacing = 0;
    }


    if ($('input[name="underline"]').is(":checked")) {
        document.getElementById("body").style.textDecoration = 'underline';
    }

    if ($('input[name="strikethrough"]').is(":checked")) {
        document.getElementById("line").style.textDecoration = 'line-through';
    }

    if (!$('input[name="strikethrough"]').is(":checked") && !$('input[name="underline"]').is(":checked")) {
        document.getElementById("line").style.textDecoration = 'none';
    }

    if ($('input[name="center_aligned"]').is(":checked")) {
        document.getElementById("line").style.textAlign = 'center';
    } else {
        document.getElementById("line").style.textAlign = 'left';
    }

    if ($('input[name="tilt"]').is(":checked")) {
        $("#line").addClass("tilted");
        $("#body").addClass("tilted");
    } else {
        $("#line").removeClass("tilted");
        $("#body").removeClass("tilted");
    }

    if ($('input[name="sprinkles"]').is(":checked")) {
        $(".squiggle").remove();
        ranSprinkles();
    } else {
        $(".squiggle").remove();
    }



    if ($('input[name="circle"]').is(":checked")) {
        $(".circle").remove();
        ranCircles();
    } else {
        $(".circle").remove();
    }

    if ($('input[name="cross"]').is(":checked")) {
        $(".cross").remove();
        ranCross();
    } else {
        $(".cross").remove();
    }


    if ($('input[name="infinity"]').is(":checked")) {
        ranInfinity();
    }

});

if ($('input[name="strikethrough"]').is(":checked")) {
    document.getElementById("line").style.textDecoration = 'line-through';
    document.getElementById("body").style.textDecoration = 'line-through';
}

$('input[name="line"]').on("keyup", function () {
    lineText = $(this).val();
    $("#line").html(lineText);
});
$('textarea[name="body"]').on("keyup", function () {
    lineText = $(this).val();
    $("#body").html(lineText);
});

$("#poster").on("click", function () {
    $(this).toggleClass("viewing");
})
