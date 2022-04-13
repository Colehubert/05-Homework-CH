var descriptions = []

if (localStorage.getItem("descriptions")) {
    var elements = document.getElementsByClassName("description")
     descriptions = JSON.parse(localStorage.getItem("descriptions"))
    for (var i = 0; i < elements.length; i = i + 1) {
        //  var letters = ["a","b","c","d"]
        //  var third = numbers[1]
        var element = elements[i]
        var description = descriptions[i]
        element.value = description

    }


}

var now = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(now);
console.log($('#hour9').children('div').attr('data-hours'))
var hourNow = moment().hour();
console.log(hourNow)
function hourlyTrack() {
    if (hourNow > parseInt($('#hour9').children('div').attr('data-hours'))) {

        $('#hour9').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour9').children('div').attr('data-hours'))) {
        $('#hour9').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour9').children('div').siblings('textarea').addClass('present')
    }




    if (hourNow > parseInt($('#hour10').children('div').attr('data-hours'))) {

        $('#hour10').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour10').children('div').attr('data-hours'))) {
        $('#hour10').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour10').children('div').siblings('textarea').addClass('present')
    }


    if (hourNow > parseInt($('#hour11').children('div').attr('data-hours'))) {

        $('#hour11').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour11').children('div').attr('data-hours'))) {
        $('#hour11').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour11').children('div').siblings('textarea').addClass('present')
    }



    if (hourNow > parseInt($('#hour12').children('div').attr('data-hours'))) {

        $('#hour12').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour12').children('div').attr('data-hours'))) {
        $('#hour12').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour12').children('div').siblings('textarea').addClass('present')
    }




    if (hourNow > parseInt($('#hour1').children('div').attr('data-hours'))) {

        $('#hour1').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour9').children('div').attr('data-hours'))) {
        $('#hour1').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour1').children('div').siblings('textarea').addClass('present')
    }


    if (hourNow > parseInt($('#hour2').children('div').attr('data-hours'))) {

        $('#hour2').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour2').children('div').attr('data-hours'))) {
        $('#hour2').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour2').children('div').siblings('textarea').addClass('present')
    }


    if (hourNow > parseInt($('#hour3').children('div').attr('data-hours'))) {

        $('#hour3').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour3').children('div').attr('data-hours'))) {
        $('#hour3').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour3').children('div').siblings('textarea').addClass('present')
    }


    if (hourNow > parseInt($('#hour4').children('div').attr('data-hours'))) {

        $('#hour4').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour4').children('div').attr('data-hours'))) {
        $('#hour4').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour4').children('div').siblings('textarea').addClass('present')
    }


    if (hourNow > parseInt($('#hour5').children('div').attr('data-hours'))) {

        $('#hour5').children('div').siblings('textarea').addClass('past')
    }
    else if (hourNow < ParseInt($('#hour9').children('div').attr('data-hours'))) {
        $('#hour5').children('div').siblings('textarea').addClass('future')
    }
    else {
        $('#hour5').children('div').siblings('textarea').addClass('present')
    }

}
hourlyTrack()

var savebuttons = document.getElementsByClassName("save")
console.log(savebuttons)
for (var i = 0; i < savebuttons.length; i++) {


    savebuttons[i].addEventListener('click', () => {

        //console.log(JSON.parse(window.localStorage.getItem('#hour9')));
        var description = this.previousElementSibling.value;
        console.log(description)
    });
}