$("#btnSend").click(function () {
    //declare variables
    var iAssignment = parseInt($("#pctAssignment").val());
    var iGroup = parseInt($("#pctGroup").val());
    var iQuiz = parseInt($("#pctQuiz").val());
    var iMidterm = parseInt($("#pctMidterm").val());
    var iFinal = parseInt($("#pctFinal").val());
    var iIntex = parseInt($("#pctIntex").val());
    var iTotal = 0;
    var sLetterGrade = "";


    //calculates final percentage.
    iTotal = iAssignment * .5 + iGroup * .1 + iQuiz * .1 + iMidterm * .1 + iFinal * .1 + iIntex * .1;


    //Assigns letter grade depending on Final Percentage.
    if (iTotal >= 94) {
        sLetterGrade = " an A!"
    }
    else if (iTotal >= 90) {
        sLetterGrade = " an A-!"
    }
    else if (iTotal >= 87) {
        sLetterGrade = " a B+!"
    }
    else if (iTotal >= 84) {
        sLetterGrade = " a B!"
    }
    else if (iTotal >= 80) {
        sLetterGrade = " a B-!"
    }
    else if (iTotal >= 77) {
        sLetterGrade = " a C+!"
    }
    else if (iTotal >= 74) {
        sLetterGrade = " a C!"
    }
    else if (iTotal >= 70) {
        sLetterGrade = " a C-!"
    }
    else if (iTotal >= 67) {
        sLetterGrade = " a D+!"
    }
    else if (iTotal >= 64) {
        sLetterGrade = " a D!"
    }
    else if (iTotal >= 60) {
        sLetterGrade = " a D-!"
    }
    else {
        sLetterGrade = " an E.  Try Again Next Year."
    }


    //print out the total to index.html.
    document.getElementById("pct&Grade").innerHTML = "Your final percentage is a " + iTotal + "%.  Your letter grade is " + sLetterGrade;

    //I tried forever to get this to print in Jquery Notation, but I couldn't get it to work.  I used Jquery up above though often, just like in the video.
    //Here's one of my attempts: $("#pct&Grade").html() = "Your final percentage is a " + iTotal + "%.  Your letter grade is " + sLetterGrade;

})
