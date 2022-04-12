var now = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(now);
console.log($('#hour9').children('div').attr('data-hours'))
var hourNow = moment().hour();
console.log(hourNow)
function hourlyTrack() {
if (hourNow > parseInt($('#hour9').children ('div').attr('data-hours'))) {

    $('#hour9').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour9').children('div').attr('data-hours')))
{
$('#hour9').children('div').siblings('textarea').addClass('future')
}
else{
    $('#hour9').children('div').siblings('textarea').addClass('present')
}
}
hourlyTrack()