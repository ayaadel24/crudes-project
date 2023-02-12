// get total 
// create product
// save data in loacalstorage
// clear data after click 
// read
// count
// delete
// update
// search
// clean date 

let tit = document.getElementById("tit"); 
let price = document.getElementById("price"); 
let taxes = document.getElementById("taxes"); 
let ads = document.getElementById("ads"); 
let discount = document.getElementById("discount"); 
let total = document.getElementById("total"); 
let count = document.getElementById("count"); 
let catagory = document.getElementById("catagory"); 
let submit = document.getElementById("submit");
let search = document.getElementById("search");

// get total

function gettotal()
{
    if(price.value!= ""){
       let result = (+price.value + +taxes.value + +ads.value - +discount.value)  
       total.innerHTML= result;
       total.style.background="#040"
    }
    else
    {
        total.innerHTML= "";
        total.style.background="red"
    }
    
}

// create product
let dproduct;
if(localStorage.product != null)
{
    dproduct = JSON.parse(localStorage.product)
}
else 
{
    dproduct=[];
}

sumbit.onclick =function()
{
    let pro = {
        tit:tit.value , price:price.value , taxes:taxes.value , ads:discount.value , discount:discount.value 
        ,count:count.value , catagory:catagory.value , total: total.innerHTML
    }
    if (dproduct.count >1 )
    {
        for(let i = 0 ; i< dproduct.count ; i++ )
        {
            dproduct.push(pro);
        }
    }
    
    localStorage.setItem("product" , JSON.stringify (dproduct))
    console.log(dproduct);
    cleardata(); 
    showdata();
}

// clear data
function cleardata()
{
    tit.value="";
    price.value="";
    ads.value="";
    taxes.value="";
    total.innerHTML="";
    catagory.value="";
    count.value="";

}
// show data
function showdata()
{
    let table = "";
    for(i=0;i< dproduct.length ;i++ )
    {
        table+= 
        `
        <tr>
        <td>${i}</th>
        <td>${dproduct[i].tit}</td>
        <td>${dproduct[i].price}</td>
        <td>${dproduct[i].taxes}</td>
        <td>${dproduct[i].ads}</td>
        <td>${dproduct[i].discount}</td>
        <td>${dproduct[i].total}</td>
        <td>${dproduct[i].catagory}</td>
        <td><button id="sumb">update</button> </td>
        <td> <button onclick = deletedate(${i}) id="sumb">delete</button>
        </td>
    </tr>
        `
    }
    document.getElementById("tbody").innerHTML= table;
    
}
showdata();
 

//delete data
function deletedate(i)
{
dproduct.splice(i,1);
localStorage.product = JSON.stringify (dproduct);
showdata();
}

// count
