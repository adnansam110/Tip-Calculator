var bill = document.getElementById('billamt');
var service = document.getElementById('serviceQL');
var people = document.getElementById('peopleAmt');

var button = document.getElementById('calculate');

var total = document.getElementById('totaltip');
total.style.visibility = "hidden";

button.addEventListener('click', calAmt);

function calAmt(e)
{   if (bill!="" && service.value!=0)
    {
        tempTip = bill.value * service.value;
        //console.log(tempTip);
        if (people.value<1 || people=="")
        {
            
            total.style.visibility="visible";
            tempTip=tempTip.toFixed(2);
            document.getElementById('tip').innerHTML = tempTip;
            document.getElementById('each').style.visibility="hidden";
        }
        else if(people.value>=1)
        {
            var finalTip = tempTip/people.value;
            finalTip=finalTip.toFixed(2);
            document.getElementById('tip').innerHTML = finalTip;
            total.style.visibility="visible";
            document.getElementById('each').style.visibility="visible";
        }
    }
    else 
    {
        alert("Please Fill the required Fields!")
    }
}
