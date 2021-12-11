var container = document.getElementById("array");

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

function swap(a, b) {
  return new Promise((resolve) => {
    var temp;

    temp = a.style.transform;
    a.style.transform = b.style.transform;
    b.style.transform = temp;
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(b, a);
        resolve();
      }, 100);
    });
  });
}

async function BubbleSort(delay = 100) {
  var blocks = document.querySelectorAll(".block");
  // console.log(blocks);
  for (var i = 0; i < blocks.length; i++) {
    var ran = blocks.length - 1 - i;
    // console.log(ran);
    for (var j = 0; j < ran; j++) {
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      /* console.log(j);
      console.log(j + 1);*/
      var val1 = Number(blocks[Number(j)].childNodes[0].innerHTML);
      var val2 = Number(blocks[Number(j + 1)].childNodes[0].innerHTML);
      /* console.log(val1);
      console.log(val2);*/
      if (Number(val1) > Number(val2)) {
        await swap(blocks[Number(j)], blocks[Number(j + 1)]);
        blocks = document.querySelectorAll(".block");
      }
      blocks[j].style.backgroundColor = "#70e4f8";
      blocks[j + 1].style.backgroundColor = "#70e4f8";
    }
    blocks[ran].style.backgroundColor = "#13CE66";
    console.log(Number(blocks[ran].childNodes[0].innerHTML));
  }
}
function stop() {
  document.getElementById("array").innerHTML = "";
}
function create() {
  document.getElementById("array").innerHTML = "";
  generateArray();
}
//generateArray();

//BubbleSort();
