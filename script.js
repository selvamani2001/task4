const myFunction = async () => {
  const link = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await link.json();
  console.log(data[""]);

  const listData = document.createElement("div")
  listData.setAttribute("class", "row box")

  document.body.append(listData)
  

  const ViewData = document.createElement("h1");
  ViewData.textContent = "User List";
  ViewData.classList.add('text-bolder',"text-white", "p-3")
  document.body.insertBefore(ViewData, listData)

  data.map(val => {


    listData.innerHTML +=

      `
        <div class=" col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-4  text-justify row m-xl-5 m-lg-4 m-md-3 m-sm-5 mt-3 mt-sm-3 mt-md-5 mt-lg-5 mx-5 rounded shadow-lg  sbox">


        <div  class="   fw-bolder d1 ">Name:${val.name} </div>
        <div class="mt-1  d2">Email : ${val.email} </div>
        <div class="mt-2 d3"> Street :${val.address.street} </div>
        <div class="mt-2 d4">City : ${val.address.street}
        
        </div>
        
  `


  });


}

myFunction()