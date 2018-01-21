/*        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });*/
   
$('.entrance').on('click', function() {
    var name = $('#name-input').val();
    if (name.length>1) {
        var message = "welcome " + name;
        $('.main').removeClass('hidden');
        $('.entrance').addClass('hidden');
        $('.main').text(message);
    }   else {
            $('input-wrapper').addClass('error');
        }
});
$('#date').DatePicker({
	flat: true,
	date: '2008-07-31',
	current: now,
	calendars: 1,
	starts: 1,
});
$('.date').on('click', function() {
    var selectedDate = $('#date-input').val();
     selectedMonth = selectedDate.getMonth();
    switch (selectedMonth)
    {
        case 0:
            $('.main').text(selectedMonth);
            break;
        case 1:
            $('.main').text(selectedMonth);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        default: 
        alert('please select a valid date!!!');
}
});

/*
 var date = $('#date-input').val();
    $('.button #date-input').on('click', function() {


    })





    /*---------------------------------------------switch on dates---------------------
    var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
*/







/*----------------------------date- comparison--------------------------
<script>
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
document.getElementById("demo").innerHTML = text;
</script>
*/