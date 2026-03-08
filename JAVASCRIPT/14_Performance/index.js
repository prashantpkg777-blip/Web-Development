// Code 1

const t1 = performance.now();

for(let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("Total time taken for code 1: " + (t2 - t1) + " milliseconds");

// Code 2

const t3 = performance.now();

let myDiv = document.createElement('div');

for(let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("Total time taken for code 2: " + (t4 - t3) + " milliseconds");

// Best code

const t5 = performance.now();

let fragment = document.createDocumentFragment();

for(let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    // take no reflow and no repaint 
    fragment.appendChild(para);
}

// take 1 reflow and 1 repaint
document.body.appendChild(fragment);

const t6 = performance.now();

console.log("Total time taken for best code: " + (t6 - t5) + " milliseconds");
