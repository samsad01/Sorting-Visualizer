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
  //document.getElementById("btn4").disabled = true;
  if (!container.length == 0) {
    container.split(0, container.length);
  }
  //document.getElementById("btn4").disabled = true;
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
function issorted(arr)
{
  let n = arr.length;
  for (let i = 1; i < n; i++){
    if (arr[i - 1] > arr[i])
      return false;
  }

  return true;
}
async function Merge(blocks, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  let left = new Array(n1);
  let right = new Array(n2);
  let left1 = new Array(n1);
  let right1 = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    blocks[low + i].style.background = "red";
    left[i] = Number(blocks[low + i].childNodes[0].innerText);
    left1[i] = blocks[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    blocks[mid + 1 + i].style.background = "blue";
    right[i] = Number(blocks[mid + 1 + i].childNodes[0].innerText);
    right1[i] = blocks[mid + 1 + i].style.height;
  }

  let i = 0;
  let j = 0;
  let k = low;
  while (i < n1 && j < n2) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    if (left[i] <= right[j]) {
      if (n1 + n2 === blocks.length) {
        blocks[k].style.background = "green";
      } else {
        blocks[k].style.background = "lightgreen";
      }

      blocks[k].childNodes[0].innerText = left[i];
      blocks[k].style.height = left1[i];
      i++;
      k++;
    } else {
      if (n1 + n2 === blocks.length) {
        blocks[k].style.background = "green";
      } else {
        blocks[k].style.background = "lightgreen";
      }
      blocks[k].childNodes[0].innerText = right[j];
      blocks[k].style.height = right1[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );

    if (n1 + n2 === blocks.length) {
      blocks[k].style.background = "green";
    } else {
      blocks[k].style.background = "lightgreen";
    }
    blocks[k].childNodes[0].innerText = left[i];
    blocks[k].style.height = left1[i];
    i++;
    k++;
  }
  while (j < n2) {
    //await waitforme(delay);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
    // color
    if (n1 + n2 === blocks.length) {
      blocks[k].style.background = "green";
    } else {
      blocks[k].style.background = "lightgreen";
    }
    blocks[k].childNodes[0].innerText = right[j];
    blocks[k].style.height = right1[j];
    j++;
    k++;
  }
  /*
  console.log("print left");
  for (let it = 0; it < left.length; it++) {
    console.log(Number(left[it]));
  }
  console.log("print right");
  for (let it = 0; it < right.length; it++) {
    console.log(right[it]);
  }
  console.log("finished printing right");
  */
}

async function MergeSort(blocks, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await MergeSort(blocks, l, m);
  await MergeSort(blocks, m + 1, r);
  await Merge(blocks, l, m, r);
  var blk = document.querySelectorAll(".block");
  var cArr = [];
  for (var i = 0; i < blk.length; i++) {
    cArr.push(Number(blk[i].childNodes[0].innerText));
  }
  console.log("merge end");
  if(issorted(cArr) == true){
    console.log("Reached here");
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  }
}
async function mergeSort(delay= 100) {
  
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  var blocks = document.querySelectorAll(".block");
  console.log("On click working fine");
  var l = 0;
  var r = blocks.length - 1;
  MergeSort(blocks, l, r);
  var checkArr = [];
  
  for (var i = 0; i < blocks.length; i++) {
    checkArr.push(Number(blocks[i].childNodes[0].innerText));
  }
  
}

function create() {
  stop();
  document.getElementById("array").innerHTML = "";
  generateArray();
}


//generateArray();

//mergeSort();
