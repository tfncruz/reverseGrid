let numberDriversInput;
let yourPositionInput;
let minTimeInput;
let button;

let numberDrivers, yourPosition;

function setup() {
  createCanvas(800, 400);

  let numberDriversLabel = createElement('p', 'how many drivers?');
  numberDriversLabel.position(10, 10);

  numberDriversInput = createInput('');
  numberDriversInput.position(10,50);
  numberDriversInput.size(100);
  numberDriversInput.input(numberDriversInputEvent);

  let yourPositionLabel = createElement('p', 'in which position did you finish in race 1?');
  yourPositionLabel.position(10, 60);

  yourPositionInput = createInput('');
  yourPositionInput.position(10, 100);
  yourPositionInput.size(100);
  yourPositionInput.input(yourPositionInputEvent);

  let minTimeLabel = createElement('p', 'for qualifying 2, give the minimum time for racer in P1 (ex: 1.50)');
  minTimeLabel.position(10, 110);

  minTimeInput = createInput('');
  minTimeInput.position(10, 150);
  minTimeInput.size(100);
  minTimeInput.input(minTimeInputEvent);

  button = createButton('calculate');
  button.position(10, 240);
  button.mousePressed(calculate);
}

function draw() { }

function calculate() {
  background(255); 

  numberDrivers = int(numberDriversInput.value());
  yourPosition = int(yourPositionInput.value());

  let positionSecondRace = numberDrivers+1-yourPosition;
  text("your position on the grid for race 2: "+positionSecondRace, 450, 10);

  let qualyTimeMin = [];
  let qualyTimeMax = [];
  qualyTimeMin[0] = float(minTimeInput.value());
  qualyTimeMax[0] = qualyTimeMin[0] + 0.09;
  text("Driver 1: "+qualyTimeMin[0]+" - "+qualyTimeMax[0], 450, 30);
  
  let leading = 50;
  for(let i = 1; i <= numberDrivers; i++) {
    qualyTimeMin[i] = qualyTimeMin[i-1] + 0.10;
    let t = round(qualyTimeMin[i], 2);
    qualyTimeMin[i] = float(t);
  
    if(qualyTimeMin[i] === 1.6 || qualyTimeMin[i] === 2.6 || qualyTimeMin[i] === 3.6 || qualyTimeMin[i] === 4.6 || qualyTimeMin[i] === 5.6 || qualyTimeMin[i] === 6.6 || qualyTimeMin[i] === 7.6) {
      qualyTimeMin[i] += 0.4;
    }
  
    qualyTimeMax[i] = qualyTimeMin[i] + 0.09;
    t = round(qualyTimeMax[i], 2);
    qualyTimeMax[i] = float(t);
  
    text("Driver "+(i+1)+": "+qualyTimeMin[i]+" - "+qualyTimeMax[i], 450, leading);
    leading += 20;
  }
}

function minTimeInputEvent() {}

function numberDriversInputEvent() {}

function yourPositionInputEvent() {}