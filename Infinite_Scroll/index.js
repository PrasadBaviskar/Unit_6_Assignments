const container = document.getElementById("inf_scroll");

let counter = 1;
let start = 1;
let end = 25;

const loadData = (start, end) => {
  console.log(start, end);

  for (let i = start; i <= end; i++) {
    let div = document.createElement("div");

    let title = document.createElement("h3");
    title.innerHTML = `Masai Student ${i}`;

    div.append(title);

    container.append(div);
  }
};

loadData(start, end);

const loadMore = () => {
  setTimeout(() => {
    counter++;
    end = counter * 25;
    start = end - 24;

    loadData(start, end);
  }, 250);
};

// let container = document.getElementsByClassName("container");
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    // console.log(scrollTop + clientHeight - 10, scrollHeight);
    console.log("Bottom Hit");

    loadMore();
    // console.log(start + end, counter * end);
  }
});

// let counter=1;
// var parent=document.getElementById("main-div")
// const getpost=(start,end)=>{
//     try{
//         console.log(start,end)
//         for(let i=start;i<=end;i++){
//             var ptag=document.createElement("p")
//             ptag.innerHTML=`<h1>Masai Student ${i++}</h1>`;
//             parent.append(ptag)
//         }

//     }catch(err){
//         console.log(err);
//     }
// }
// getpost(1,30)

// function showData(){
//     setTimeout(()=>{
//       counter++;

//       end=counter * 30;
//       start=end-30;
//         getpost(start,end)
//        },300)
// }

// window.addEventListener('scroll',()=>{
//     const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
//     if(scrollTop+clientHeight >= scrollHeight){
//          console.log("I am Bottom")
//          showData()
//     }
// })
