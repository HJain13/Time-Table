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
                time:"16:00:00",
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
                time:"16:00:00",
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
function NextClass(){
    var i=0;
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
   var dayNo=new Date().getDay();
    for (var key in timeTable) {
      var x = timeTable[key];
        if(x.day===days[dayNo]){
            var currentTime;
            var time =new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
        }      
    }
   console.log(dayNo);
}

document.getElementById("app").innerHTML = `
<h1>Time Table</h1>
<div class="container">
${timeTable.map(data =>`<div class="row"><div class="col">${data.day}</div> ${DayDetails(data)}</div>`).join("")}
</div>
<div>${NextClass()}</div>
`;


/* const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return "1 year old";
  } else if (calculatedAge == 0) {
    return "Baby";
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
<h4>Favorite Foods</h4>
<ul class="foods-list">
${foods.map(food => `<li>${food}</li>`).join("")}
</ul>
`;
}

function petTemplate(pet) {
  return `
    <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
    ${pet.favFoods ? foods(pet.favFoods) : ""}
    </div>
  `;
}
document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
`;
 */