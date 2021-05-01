$(document).ready(function(){
    $('input[name="radioQ1"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q1box").hide();
        $("#"+inputValue).show();
        $("#A1").addClass('active');
    });
});


$(document).ready(function(){
    $('input[name="radioQ2"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q2box").hide();
        $("#"+inputValue).show();
        $("#A2").addClass('active');
    });
});

$(document).ready(function(){
    $('input[name="radioQ3"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q3box").hide();
        $("#"+inputValue).show();
        $("#A3").addClass('active');
    });
});
$(document).ready(function(){
    $('input[name="radioQ4"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q4box").hide();
        $("#"+inputValue).show();
        $("#A4").addClass('active');
    });
});
$(document).ready(function(){
    $('input[name="radioQ5"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q5box").hide();
        $("#"+inputValue).show();
        $("#A5").addClass('active');
    });
});
$(document).ready(function(){
    $('input[name="radioQ6"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q6box").hide();
        $("#"+inputValue).show();
        $("#A6").addClass('active');
    });
});
$(document).ready(function(){
    $('input[name="radioQ7"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q7box").hide();
        $("#"+inputValue).show();
        $("#A7").addClass('active');
    });
});
$(document).ready(function(){
    $('input[name="radioQ8"]').click(function(){
        var inputValue = $(this).attr("value");
        $(".Q8box").hide();
        $("#"+inputValue).show();
        $("#A8").addClass('active');
    });
});