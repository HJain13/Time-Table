const timeTable = [
    {
        day:"Monday",
        details : [
            {
                StartingTime:2,
                FinishTime:3,
                subject:"CN",
                LT:10,
                faculty:"Poonam Gera"
            },
            {
                StartingTime:3,
                FinishTime:4,
                subject:"BME",
                LT:7,
                faculty:"Amit Neogi"
            },
            {
                StartingTime:4,
                FinishTime:5,
                subject:"CD",
                LT:3,
                faculty:"JayPrakash"
            },
            {
                StartingTime:5,
                FinishTime:6,
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
                StartingTime:1,
                FinishTime:2.30,
                subject:"CS",
                LT:4,
                faculty:"Poonam Gera"
            },
            {
                time:4,
                FinishTime:5.30,
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
                StartingTime:1,
                FinishTime:2,
                subject:"CN",
                LT:10,
                faculty:"Kshitiz Verma"
            },
            {
                StartingTime:2,
                FinishTime:3,
                subject:"BME",
                LT:7,
                faculty:"Amit Neogi"
            },
            {
                StartingTime:3,
                FinishTime:4,
                subject:"CD",
                LT:3,
                faculty:"JayPrakash"
            },
            {
                StartingTime:4,
                FinishTime:5,
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
                StartingTime:2.30,
                FinishTime:4,
                subject:"CS",
                LT:4,
                faculty:"Poonam Gera"
            },
            {
                time:4,
                FinishTime:5.30,
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
                StartingTime:1,
                FinishTime:2,
                subject:"BME",
                LT:7,
                faculty:"Amit Neogi"
            },
            {
                StartingTime:2,
                FinishTime:3,
                subject:"CD",
                LT:3,
                faculty:"JayPrakash"
            },,
            {
                StartingTime:3,
                FinishTime:4,
                subject:"SNA",
                LT:6,
                faculty:"Sakhti Balan"
            },
            {
                StartingTime:5,
                FinishTime:6,
                subject:"CN",
                LT:10,
                faculty:"Poonam Gera"
            }
        ]
    }
]

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
function DayDetails(data){
    return `
        ${data.details.map(x => `
        <div class="col">
            <div><strong>Time</strong>:${x.StartingTime}-${x.FinishTime}pm</div> 
            <div><strong>Subject:</strong> ${x.subject}</div> 
            <div><strong>LT: </strong>${x.LT}</div> 
            <div><strong>Faculty:</strong>${x.faculty}</div>
        </div>`).join("")}      
   `;
}
document.getElementById("app").innerHTML = `
<h1>Time Table</h1>
<div class="container">
${timeTable.map(data =>`<div class="row"><div class="col">${data.day}</div> ${DayDetails(data)}</div>`).join("")}
</div>
`;