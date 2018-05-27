var traits = {
    name01: "Aquarius",
    value01: "Progressive, Original, Independent, Humanitarian ",
    name02: "Pisces",
    value02: "Compassionate, Artistic, Intuitive, Gentle, Wise ",
    name03: "Aries",
    value03: "Courageous, Determined, Connfident, Enthusiastic, Honest, Optimistic, Passionate ",
    name04: "Taurus",
    value04: "Reliable, Patient, Practical, Devoted, Responsible",
    name05: "Gemini",
    value05: "Gentle,Affectionate, Curious, Adaptable",
    name06: "Cancer",
    value06: "Tenacious, Imaginative, Loyal, Emotional, Persuasive, Sympathetic",
    name07: "Leo",
    value07: "Creative, Passionate, Generous, Wram-hearted, Humorous",
    name08: "Virgo",
    value08: "Loyal, Practical, Kind, Hardworking, Analytical",
    name09: "Libra",
    value09: "Cooperative, Diplomatic, Gracious, Social, Fair-minded",
    name10: "Scorpio",
    value10: "Passionate, Stubborn, Resourseful, Brave",
    name11: "Sagittarius",
    value11: "Generous, Idealistic, Humorous",
    name12: "Capricorn",
    value12: "Responsible, Diciplined, Good-Managers, Self-Control",
};


$('.entrance').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 1) {
        var message = "welcome " + name;
        $('.main').removeClass('hidden');
        $('.entrance').addClass('hidden');
        $('.welcome-screen').text(message);
    } else {
        $('input-wrapper').addClass('error');
    }
});

var data = '';
$('#dateinput').click(function() {
    var today = new(Date);
    console.log(today);
    var nowdate = today.getDate();
    var nowmonth = today.getMonth();
    nowmonth = nowmonth + 1;
    if (nowmonth >= 9) {
        nowmonth = "0" + nowmonth;
    }
    var nowyear = today.getYear();
    nowyear = nowyear + 1900;
    console.log(nowdate);
    console.log(nowmonth);
    console.log(nowyear);

    var dateIs = $('#datepicker').val();
    console.log(dateIs);
    var dateparts = dateIs.split("-");
    console.log(dateparts[1]);
    if (dateparts[1] == 01) {
        if (dateparts[2] <= 20) {
            data = (traits.name12 + ":-" + traits.value12);
        } else {
            data = (traits.name01 + ":-" + traits.value01);
        }
    } else if (dateparts[1] == 02) {
        if (dateparts[2] <= 18) {
            data = (traits.name01 + ":-" + traits.value01);
        } else {
            data = (traits.name02 + ":-" + traits.value02);
        }
    } else if (dateparts[1] == 03) {
        if (dateparts[2] <= 20) {
            data = (traits.name02 + ":-" + traits.value02);
        } else {
            data = (traits.name03 + ":-" + traits.value03);
        }
    } else if (dateparts[1] == 04) {
        if (dateparts[2] <= 19) {
            data = (traits.name03 + ":-" + traits.value03);
        } else {
            data = (traits.name04 + ":-" + traits.value04);
        }
    } else if (dateparts[1] == 05) {
        if (dateparts[2] <= 20) {
            data = (traits.name04 + ":-" + traits.value04);
        } else {
            data = (traits.name05 + ":-" + traits.value05);
        }
    } else if (dateparts[1] == 06) {
        if (dateparts[2] <= 20) {
            data = (traits.name05 + ":-" + traits.value05);
        } else {
            data = (traits.name06 + ":-" + traits.value06);
        }
    } else if (dateparts[1] == 07) {
        if (dateparts[2] <= 22) {
            data = (traits.name06 + ":-" + traits.value06);
        } else {
            data = (traits.name07 + ":-" + traits.value07);
        }
    } else if (dateparts[1] == 08) {
        if (dateparts[2] <= 22) {
            data = (traits.name07 + ":-" + traits.value07);
        } else {
            data = (traits.name08 + ":-" + traits.value08);
        }
    } else if (dateparts[1] == 09) {
        if (dateparts[2] <= 22) {
            data = (traits.name08 + ":-" + traits.value08);
        } else {
            data = (traits.name09 + ":-" + traits.value09);
        }
    } else if (dateparts[1] == 10) {
        if (dateparts[2] <= 22) {
            data = (traits.name09 + ":-" + traits.value09);
        } else {
            data = (traits.name10 + ":-" + traits.value10);
        }
    } else if (dateparts[1] == 11) {
        if (dateparts[2] <= 21) {
            data = (traits.name010 + ":-" + traits.value10);
        } else {
            data = (traits.name11 + ":-" + traits.value11);
        }
    } else if (dateparts[1] == 12) {
        if (dateparts[2] <= 21) {
            data = (traits.name11 + ":-" + traits.value11);
        } else {
            data = (traits.name12 + ":-" + traits.value12);
        }
    } else {
        alert('Invalid Date');
    }
    $('#name_traits').empty();
    $('#name_traits').append(data);
    /*default:
    console.log('enter the valid month');
    break;*/
/* date comparision is verrrrryyy important for selection off valid date here*/
    if (nowyear < dateparts[0]) 
    {
        $('#name_traits').empty();
        alert('enter the date in past or today');
    }
    else if (nowyear == dateparts[0]) 
    {
        if (nowmonth < dateparts[1]) 
        {
            $('#name_traits').empty();
            alert('enter the date in past or today');
        }
        else if (nowmonth == dateparts[1]) 
        {
            if (nowdate < dateparts[2]) 
            {
                $('#name_traits').empty();
                alert('enter the date in past or today');
            }
        }
    }

});

$('#dateinput').on('click', function() {
    $('#dateinput').addClass('disabled hidden');
});

$('#datepicker').on('click', function() {
    $('#dateinput').removeClass('disabled hidden');
});