const timeTable = [
    {
        day:"Monday",
        details : [
            {
                StartingTime:"14:00:00",
                FinishTime:"15:00:00",
                subject:"CN",
                LT:10,
                faculty:"Poonam Gera"
            },
            {
                StartingTime:"15:00:00",
                FinishTime:"16:00:00",
                subject:"BME",
                LT:7,
                faculty:"Amit Neogi"
            },
            {
                StartingTime:"16:00:00",
                FinishTime:"17:00:00",
                subject:"CD",
                LT:3,
                faculty:"JayPrakash"
            },
            {
                StartingTime:"17:00:00",
                FinishTime:"18:00:00",
                subject:"SNA",
                LT:6,
                faculty:"Sakhti Balan"
            }
        ]
    },
    {
        day:"Tuesday",
        details : [
            {
                StartingTime:"1:00:00",
                FinishTime:"14:30:00",
                subject:"CS",
                LT:4,
                faculty:"Poonam Gera"
            },
            {
                StartingTime:"16:00:00",
                FinishTime:"17:30:00",
                subject:"LCT",
                LT:3,
                faculty:"Renu"
            }
        ]
    },
    {
        day:"Wednesday",
        details : [
            {
                StartingTime:"13:00:00",
                FinishTime:"14:00:00",
                subject:"CN",
                LT:10,
                faculty:"Kshitiz Verma"
            },
            {
                StartingTime:"14:00:00",
                FinishTime:"15:00:00",
                subject:"BME",
                LT:7,
                faculty:"Amit Neogi"
            },
            {
                StartingTime:"15:00:00",
                FinishTime:"16:00:00",
                subject:"CD",
                LT:3,
                faculty:"JayPrakash"
            },
            {
                StartingTime:"16:00:00",
                FinishTime:"17:00:00",
                subject:"SNA",
                LT:6,
                faculty:"Sakhti Balan"
            }
        ]
    },
    {
        day:"Thrusday",
        details : [
            {
                StartingTime:"14:30:00",
                FinishTime:"16:00:00",
                subject:"CS",
                LT:4,
                faculty:"Poonam Gera"
            },
            {
                StartingTime:"16:00:00",
                FinishTime:"17:30:00",
                subject:"LCT",
                LT:3,
                faculty:"Renu"
            }
        ]
    },
    {
        day:"Friday",
        details : [
            
            {
                StartingTime:"13:00:00",
                FinishTime:"14:00:00",
                subject:"BME",
                LT:7,
                faculty:"Amit Neogi"
            },
            {
                StartingTime:"14:00:00",
                FinishTime:"15:00:00",
                subject:"CD",
                LT:3,
                faculty:"JayPrakash"
            },
            {
                StartingTime:"15:00:00",
                FinishTime:"16:00:00",
                subject:"SNA",
                LT:6,
                faculty:"Sakhti Balan"
            },
            {
                StartingTime:"17:00:00",
                FinishTime:"18:00:00",
                subject:"CN",
                LT:10,
                faculty:"Poonam Gera"
            }
        ]
    }
]
function DayDetails(data){
    return `
        ${data.details.map(x => `
        <div class="col">
            <div><strong>Time</strong>:${x.StartingTime}-${x.FinishTime}</div> 
            <div><strong>Subject:</strong> ${x.subject}</div> 
            <div><strong>LT: </strong>${x.LT}</div> 
            <div><strong>Faculty:</strong>${x.faculty}</div>
        </div>`).join("")}      
   `;
}
function Comparison(finish,start,current){
    var f = finish.split(":");
    var s = start.split(":");
    var c = current.split(":");
    var finishTime=f[0]*60*60+f[1]*60+f[2];
    var startTime=s[0]*60*60+s[1]*60+s[2];
    var currentTime=c[0]*60*60+c[1]*60+c[2];
    if(finishTime>currentTime && currentTime>=startTime){
        return true;
    }
    else return false;
}
function checkingUpcoming(finish,start,current){
    var f = finish.split(":");
    var s = start.split(":");
    var c = current.split(":");
    var finishTime=f[0]*60*60+f[1]*60+f[2];
    var startTime=s[0]*60*60+s[1]*60+s[2];
    var currentTime=c[0]*60*60+c[1]*60+c[2];
    if(finishTime>currentTime && currentTime<=startTime){
        return true;
    }
    else return false;
}
function NextClass(){
    var flag=0;
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
   var dayNo=new Date().getDay();
   //var dayNo=5;
   if(dayNo==0 || dayNo==6){
       return`<div>Next Class is on Monday ${timeTable[0].details[0].subject} ${timeTable[0].details[0].LT} ${timeTable[0].details[0].StartingTime}</div>`
   }
   var storeKey;
    for (var key in timeTable) {
      var x = timeTable[key];
      if(x.day===days[dayNo]){
            storeKey=key;
            var currentTime =new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
            //var currentTime="17:29:00";
            var length=(timeTable[key].details).length;
            //console.log(length);
            for(var data in timeTable[key].details){
                //console.log(Date.parse('01/01/2011 10:20:45') > Date.parse('01/01/2011 5:10:10'));
                if(Comparison(timeTable[key].details[data].FinishTime,timeTable[key].details[data].StartingTime,currentTime)){
                    flag=1;
                    var nextData=parseInt(data)+1;
                    //console.log(data);
                    //console.log(length!=parseInt(data)+1);

                    if(length!=parseInt(data)+1){

                        return`
                            <div>Currently going on ${timeTable[key].details[data].subject} class</div>
                            <div>Next class ${timeTable[key].details[nextData].subject} class</div><div>Subject: ${timeTable[key].details[nextData].subject}</div><div>LT: ${timeTable[key].details[nextData].LT}</div><div>Timing: ${timeTable[key].details[nextData].StartingTime}
                        `
                    }
                    else{
                        nextkey=parseInt(key)+1;
                        if(nextkey==6){
                            return`<div>Currently going on ${timeTable[key].details[data].subject} class</div>
                            <div>Next class ${timeTable[0].details[0].subject} class</div><div>Subject: ${timeTable[0].details[0].subject}</div><div>LT: ${timeTable[0].details[0].LT}</div><div>Timing: ${timeTable[0].details[0].StartingTime}`
                        }
                        else{
                            return`<div>Currently going on ${timeTable[key].details[data].subject} class</div>
                            <div>Next class ${timeTable[nextkey].details[0].subject} class</div><div>Subject: ${timeTable[nextkey].details[0].subject}</div><div>LT: ${timeTable[nextkey].details[0].LT}</div><div>Timing: ${timeTable[nextkey].details[0].StartingTime}`
                        }
                    }
                }  
                else if(checkingUpcoming(timeTable[key].details[data].FinishTime,timeTable[key].details[data].StartingTime,currentTime)){
                    return`<div>No current Lecture running</div><div>UpComing Class:</div><div>${timeTable[key].details[data].subject} class</div><div>Subject: ${timeTable[key].details[data].subject}</div><div>LT: ${timeTable[key].details[data].LT}</div><div>Timing: ${timeTable[key].details[data].StartingTime}`
                }              
            }
            
        }  
        
    }
    //console.log(storeKey);
    storeKey=parseInt(storeKey)+1;
    if((storeKey)==6){
        return`<div>Next Class is on Monday ${timeTable[0].details[0].subject} ${timeTable[0].details[0].LT} ${timeTable[0].details[0].StartingTime}</div>`
    }
    else{
        
        console.log(storeKey);
        return`<div>Next Class is on ${timeTable[storeKey].day} </div><div>Subject: ${timeTable[storeKey].details[0].subject}</div><div>LT: ${timeTable[storeKey].details[0].LT}</div><div>Timing: ${timeTable[storeKey].details[0].StartingTime}</div>` 
    }
  // console.log(dayNo);
}

document.getElementById("app").innerHTML = `
<h1>Time Table</h1>
<div class="container">
${timeTable.map(data =>`<div class="row"><div class="col">${data.day}</div> ${DayDetails(data)}</div>`).join("")}
</div>${NextClass()}
`;
