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

function swap(a, b) {
  return new Promise((resolve) => {
    var temp1 = a.style.height;
    var temp2 = a.childNodes[0].innerText;
    a.style.height = b.style.height;
    b.style.height = temp1;
    a.childNodes[0].innerText = b.childNodes[0].innerText;
    b.childNodes[0].innerText = temp2;
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        //container.insertBefore(b, a);
        resolve();
      }, 20);
    });
  });
}

async function SelectionSort(delay = 100) {
  var blocks = document.querySelectorAll(".block");
  // console.log(blocks);
  var min_index;
  for (var i = 0; i < blocks.length - 1; i++) {
    min_index = i;
    // console.log(ran);
    blocks[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < blocks.length; j++) {
      blocks[j].style.backgroundColor = "red";
      //blocks[min_index].style.backgroundColor = "#8800ea";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var val1 = Number(blocks[j].childNodes[0].innerHTML);
      var val2 = Number(blocks[min_index].childNodes[0].innerHTML);

      if (Number(val1) < Number(val2)) {
        if (min_index !== i) {
          // Provide skyblue color to the (min-idx)th bar
          blocks[min_index].style.backgroundColor = "#70e4f8";
        }
        min_index = j;
      } else {
        // Provide skyblue color to the jth bar
        blocks[j].style.backgroundColor = "#70e4f8";
      }

      //blocks[min_index].style.backgroundColor = "#8800ea";

      // blocks[j].style.backgroundColor = "#8800ea";
      //blocks[min_index].style.backgroundColor = "#70e4f8";
    }
    /*console.log("Before");
    console.log(
      Number(blocks[min_index].childNodes[0].innerHTML) + "  " + min_index
    );
    console.log(Number(blocks[i].childNodes[0].innerHTML) + "   " + i);
    console.log(i);*/
    if (min_index !== i) {
      await swap(blocks[min_index], blocks[i]);
      blocks = document.querySelectorAll(".block");
    }
    blocks[i].style.backgroundColor = "#13CE66";
    /* console.log("After");
    console.log(
      Number(blocks[min_index].childNodes[0].innerHTML) + "  " + min_index
    );*/
    //console.log(Number(blocks[i].childNodes[0].innerHTML) + "   " + i);
  }
  blocks[i].style.backgroundColor = "#13CE66";
}

function create() {
  document.getElementById("array").innerHTML = "";
  generateArray();
}

//generateArray();

//BubbleSort();
