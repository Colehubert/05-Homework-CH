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




if (hourNow > parseInt($('#hour10').children ('div').attr('data-hours'))) {

    $('#hour10').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour10').children('div').attr('data-hours')))
{
$('#hour10').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour10').children('div').siblings('textarea').addClass('present')
}


if (hourNow > parseInt($('#hour11').children ('div').attr('data-hours'))) {

    $('#hour11').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour11').children('div').attr('data-hours')))
{
$('#hour11').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour11').children('div').siblings('textarea').addClass('present')
}



if (hourNow > parseInt($('#hour12').children ('div').attr('data-hours'))) {

    $('#hour12').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour12').children('div').attr('data-hours')))
{
$('#hour12').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour12').children('div').siblings('textarea').addClass('present')
}




if (hourNow > parseInt($('#hour1').children ('div').attr('data-hours'))) {

    $('#hour1').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour9').children('div').attr('data-hours')))
{
$('#hour1').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour1').children('div').siblings('textarea').addClass('present')
}


if (hourNow > parseInt($('#hour2').children ('div').attr('data-hours'))) {

    $('#hour2').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour2').children('div').attr('data-hours')))
{
$('#hour2').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour2').children('div').siblings('textarea').addClass('present')
}


if (hourNow > parseInt($('#hour3').children ('div').attr('data-hours'))) {

    $('#hour3').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour3').children('div').attr('data-hours')))
{
$('#hour3').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour3').children('div').siblings('textarea').addClass('present')
}


if (hourNow > parseInt($('#hour4').children ('div').attr('data-hours'))) {

    $('#hour4').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour4').children('div').attr('data-hours')))
{
$('#hour4').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour4').children('div').siblings('textarea').addClass('present')
}


if (hourNow > parseInt($('#hour5').children ('div').attr('data-hours'))) {

    $('#hour5').children('div').siblings('textarea').addClass('past')
}
else if (hourNow  < ParseInt ($('#hour9').children('div').attr('data-hours')))
{
$('#hour5').children('div').siblings('textarea').addClass('future')
}
else{
 $('#hour5').children('div').siblings('textarea').addClass('present')
}

}
hourlyTrack()