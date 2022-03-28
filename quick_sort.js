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
  stop();
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
function isSorted1(arr)
{
  let n = arr.length;
  for (let i = 1; i < n; i++){
    if (arr[i - 1] > arr[i])
      return false;
  }

  return true;
}
async function partition(low, high) {
  // var pivote = Number(blocks[high].childNodes[0].innerText);
  var blocks = document.querySelectorAll(".block");
  var i = low - 1;
  var r = high;
  blocks[r].style.backgroundColor = "red";
  for (var j = low; j <= r - 1; j++) {
    blocks[j].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
    if (
      Number(blocks[j].childNodes[0].innerText) <=
      Number(blocks[high].childNodes[0].innerText)
    ) {
      i++;
      let temp1 = blocks[i].style.height;
      let temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[j].style.height;
      blocks[j].style.height = temp1;
      blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
      blocks[j].childNodes[0].innerText = temp2;
      blocks[i].style.backgroundColor = "orange";
      if (i != j) blocks[j].style.backgroundColor = "blue";
      //blocks = document.querySelectorAll(".block");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
    } else {
      blocks[j].style.backgroundColor = "blue";
    }
  }
  i++;

  let temp1 = blocks[i].style.height;
  let temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[r].style.height;
  blocks[r].style.height = temp1;
  blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
  blocks[r].childNodes[0].innerText = temp2;
  blocks[r].style.backgroundColor = "blue";
  blocks[i].style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 100)
  );
  //blocks = document.querySelectorAll(".block");
  for (var k = 0; k < blocks.length; k++) {
    blocks[k].style.backgroundColor = "green";
  }
  return i;
}

async function QuickSort(l, r) {
  if (l < r) {
    var pivot_idx = await partition(l, r);
    await QuickSort(l, pivot_idx - 1);
    await QuickSort(pivot_idx + 1, r);
  }
  var blk = document.querySelectorAll(".block");
  var cArr = [];
  for (var i = 0; i < blk.length; i++) {
    cArr.push(Number(blk[i].childNodes[0].innerText));
  }
  console.log("merge end");
  if(isSorted1(cArr) == true){
    console.log("Reached here");
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  }
}
function quickSort() {
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  console.log("On click working fine");
  var lol = document.querySelectorAll(".block");
  let l = 0;
  let r = lol.length - 1;
  QuickSort(l, r);
 
}

function create() {
  stop();
  document.getElementById("array").innerHTML = "";
  generateArray();
}


//generateArray();

//quickSort();
