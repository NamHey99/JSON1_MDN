const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let motherInfo = 'The mother cats are called ';
    let kittenInfo;
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

    fetch(requestURL)
    .then(response => response.text())
    .then(text => displayCatInfo(text))

    function displayCatInfo(catString) {
      let total = 0;
      let male = 0;

      // Add your code here
			let parsedJSON = JSON.parse(catString);
      
      // Mother info
      const motherNames = [];
      
      for(let i=0; i < parsedJSON.length; i++) {
      	motherNames.push(parsedJSON[i].name);
      }
      
      for(let j=0; j < motherNames.length; j++) {
        if(j == motherNames.length-1) {
        	motherInfo += ` and ${motherNames[j]}`;
        } else {
        	motherInfo += `${motherNames[j]}, `;
        }
      }
      
      // Kitten info
      
      // Total number of kittens
      let kittensArr = [];
      
      for(let cat of parsedJSON) {
       	kittensArr.push(cat.kittens);
      }
      
      for(let k=0; k < kittensArr.length; k++) {
      	for(let h=0; h < kittensArr[k].length; h++) {
        	total += 1;
          if(kittensArr[k][h].gender == 'm') {
          	console.log(`${kittensArr[k][h].name} is ${kittensArr[k][h].gender}`);
            male += 1;
          }
        }
      }
     	
      
      kittenInfo = `There are ${total} number of kittens, with ${male} kittens being male and 										${total-male} being female.`;
      
      
      // Don't edit the code below here!

      para1.textContent = motherInfo;
      para2.textContent = kittenInfo;
    }

    section.appendChild(para1);
    section.appendChild(para2);
