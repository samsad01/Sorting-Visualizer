var container = document.getElementById("array");



function stop() {
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  if (container.length != 0) {
    document.getElementById("array").innerHTML = "";
  }
}
function generateArray() {
 
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  if (!container.length == 0) {
    container.split(0, container.length);
  }
  for (var i = 0; i < 50; i++) {
    var value = Math.floor(Math.random() * (100 - 5) + 5);
    var array_ele = document.createElement("div");
    array_ele.classList.add("block");
    array_ele.style.height = `${value * 4}px`;
    array_ele.style.width = "10px";
    array_ele.style.transform = `translate(${i * 20}px)`;
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

function clearDiv() {
  if (!container.length == 0) {
    document.getElementById("array").innerHTML = "";
    generateArray();
  }
}

function isSorted2(arr)
{
  let n = arr.length;
  for (let i = 1; i < n; i++){
    if (arr[i - 1] > arr[i])
      return false;
  }

  return true;
}

async function Heapify(n, i) {
  var blocks = document.querySelectorAll(".block");
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (
    l < n &&
    Number(blocks[l].childNodes[0].innerHTML) >
      Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = l;

  if (
    r < n &&
    Number(blocks[r].childNodes[0].innerHTML) >
      Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = r;

  if (largest != i) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[largest].style.height;
    blocks[largest].style.height = temp1;
    blocks[i].childNodes[0].innerText = blocks[largest].childNodes[0].innerText;
    blocks[largest].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );

    await Heapify(n, largest);
  }
  if (isSorted()) {
    for (var k = 0; k < blocks.length; k++) {
      blocks[k].style.backgroundColor = "green";
    }
  }
}
async function HeapSort(n) {
  var blocks = document.querySelectorAll(".block");

  for (var i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i);
  }

  for (var i = n - 1; i > 0; i--) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[0].style.height;
    blocks[0].style.height = temp1;
    blocks[i].childNodes[0].innerText = blocks[0].childNodes[0].innerText;
    blocks[0].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );

    await Heapify(i, 0);
  }
  var blk = document.querySelectorAll(".block");
  var cArr = [];
  for (var i = 0; i < blk.length; i++) {
    cArr.push(Number(blk[i].childNodes[0].innerText));
  }
  console.log("merge end");
  if(isSorted2(cArr) == true){
    console.log("Reached here");
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  }
}
function isSorted() {
  let bb = document.querySelectorAll(".block");

  for (var it = 1; it < bb.length; it += 1) {
    let x = Number(bb[it - 1].childNodes[0].innerHTML);
    let y = Number(bb[it].childNodes[0].innerHTML);
    if (x > y) {
      return false;
    }
  }
  return true;
}
function heapSort() {
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  var lol = document.querySelectorAll(".block");
  HeapSort(lol.length);

  
}

function create() {
  stop();
  document.getElementById("array").innerHTML = "";
  generateArray();
}
//generateArray();

//heapSort();
