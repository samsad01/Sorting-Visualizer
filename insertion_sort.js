var container = document.getElementById("array");

function stop() {
  document.getElementById("array").innerHTML = "";
}
function generateArray() {
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
/*
function swap(a, b) {
  return new Promise((resolve) => {
    //var temp;

    //temp = a.style.transform;
    a.style.transform = b.style.transform;
    // b.style.transform = temp;
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(b, a);
        resolve();
      }, 5);
    });
  });
}*/

async function InsertionSort(delay = 100) {
  var blocks = document.querySelectorAll(".block");
  var i, j, key, height;
  for (i = 1; i < blocks.length; i++) {
    // console.log(ran);
    key = Number(blocks[i].childNodes[0].innerHTML);
    j = i - 1;
    height = blocks[i].style.height;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
    blocks[i].style.backgroundColor = "blue";
    while (j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > key) {
      // blocks[j].style.backgroundColor = "#FF4949";
      blocks[j].style.backgroundColor = "blue";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );

      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
      //blocks = document.querySelectorAll(".block");
      j--;
      for (var k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = " #13CE66";
      }
    }
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerText = key;
    // blocks[ran].style.backgroundColor = "#13CE66";
    //console.log(Number(blocks[ran].childNodes[0].innerHTML));
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
  }
  blocks[blocks.length - 1].style.backgroundColor = " #13CE66";
}

function create() {
  document.getElementById("array").innerHTML = "";
  generateArray();
}
//generateArray();

//BubbleSort();
