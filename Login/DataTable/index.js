   // -----------------------FILLING THE TABLE-------------------//
    var STTNo=0;
    var tbody= document.getElementById("tbody1");
    var stdList=[];
    function AddItemToTable(name,CMND,sdt,sec,start,end,check,vc,contact,region,gen){

      let trow = document.createElement("tr");
      let td0= document.createElement("td");
      let td1= document.createElement("td");
      let td2= document.createElement("td");
      let td3= document.createElement("td");
      let td4= document.createElement("td");
      let td5= document.createElement("td");
      let td6= document.createElement("td");
      let td7= document.createElement("td");
      let td8= document.createElement("td");
      let td9= document.createElement("td");
      let td10= document.createElement("td");
      let td11= document.createElement("td");
      
      stdList.push([name,CMND,sdt,sec,start, end,check,vc,contact, region,gen]);
      td0.innerHTML = ++STTNo;
      td1.innerHTML = name;
      td2.innerHTML = CMND;
      td3.innerHTML = sdt;
      td4.innerHTML = sec;
      td5.innerHTML = start;
      td6.innerHTML = end;
      td7.innerHTML = check;
      td8.innerHTML = vc;
      td9.innerHTML = contact;
      td10.innerHTML = region;
      td11.innerHTML = gen;
     
      td1.classList +="nameField"
      td2.classList +="CMNDField"
      td3.classList +="sđtField"
      td4.classList +="secField"
      td5.classList +="startField"
      td6.classList +="endField"
      td7.classList +="checkField"
      td8.classList +="vcField"
      td9.classList +="contactField"
      td10.classList +="regionField"
      td11.classList +="genField"
      
      trow.appendChild(td0);
      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      trow.appendChild(td5);
      trow.appendChild(td6);
      trow.appendChild(td7);
      trow.appendChild(td8);
      trow.appendChild(td9);
      trow.appendChild(td10);
      trow.appendChild(td11);
     
      var ControlDiv = document.createElement('div');
      
      ControlDiv.innerHTML += '<a class="chinhSua"  href="../firebase/index.html"  >Edit</a>';
      
      trow.appendChild(ControlDiv);
      tbody.appendChild(trow);
  }
  var ModName = document.getElementById('nameMod');
  var ModCMND = document.getElementById('CMNDMode');
  var ModSdt = document.getElementById('sdtMod');
  var ModSec = document.getElementById('secMod');
  var ModStart = document.getElementById('startMod');
  var ModEnd = document.getElementById('endMod');
  var ModCheck = document.getElementById('checkMod');
  var ModVc = document.getElementById('vcMod');
  var ModContact = document.getElementById('contactMod');
  var ModRegion = document.getElementById('regionMod');
  var ModGen = document.getElementById('genMod');

  var BTNmodupd = document.getElementById('UpdModBtn')
  var BTNmodDel = document.getElementById('DelModBtn');
  function FillTBoxes(index){
      if(index == STTNo){
        --index;
        ModName.value=stdList[index][0];
        ModCMND.value=stdList[index][1];
        ModSdt.value=stdList[index][2];
        ModSec.value=stdList[index][3];
        ModStart.value=stdList[index][4];
        ModEnd.value=stdList[index][5];
        ModCheck.value=stdList[index][6];
        ModVc.value=stdList[index][7];
        ModContact.value=stdList[index][8];
        ModRegion.value=stdList[index][9];
        ModGen.value=stdList[index][10];

        BTNmodupd.style.display="none";
        BTNmodDel.style.display="inline-block";
      }
  }
//   BTNmodDel.addEventListener('click',DelStd);
//   function DelStd(){
//       alert("1");
//   }
  function AddAllItemsToTable(TheUser)
  {
      STTNo=0;
      tbody.innerHTML ="";
      TheUser.forEach(element=>{
          AddItemToTable(element.NameOfStd,element.CMND,element.Phone , element.Address, element.WhereStart, element.WhereEnd, element.WhereCheck,element.NumberVC, element.Contact, element.Region, element.Gender);
      });
  }
   

   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  
   const firebaseConfig = {
       apiKey: "AIzaSyBihWcopIWDaPF4w6-4obXZ8wsOAp02pAk",
       authDomain: "fire-fd63d.firebaseapp.com",
       databaseURL: "https://fire-fd63d-default-rtdb.firebaseio.com",
       projectId: "fire-fd63d",
       storageBucket: "fire-fd63d.appspot.com",
       messagingSenderId: "729629206102",
       appId: "1:729629206102:web:e81828ba6c02dbce5f7df7"
   };
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   import {getDatabase, ref, child, onValue, get,set,update,remove}
   from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
   const db = getDatabase();

//  ------------------  Select_AllData--------------
   



//  ------------------  GETTING ALL DATA--------------
  function GetAllDataOne()
  {
      const dbRef = ref(db);
      get(child(dbRef, "RoadsterList"))
      .then((snapshot)=>{
          var users=[];
          snapshot.forEach(childSnapshot =>{
              users.push(childSnapshot.val());
          });
          AddAllItemsToTable(users);
      });
  }

  function GetAllDataRealTime()
  {
      const dbRef = ref(db,"RoadsterList");
     onValue(dbRef,(snapshot)=>{
         var users=[];
         snapshot.forEach(childSnapshot =>{
             users.push(childSnapshot.val());
         });
         AddAllItemsToTable(users);
     })
  }
  window.onload = GetAllDataOne;



  var searchBar = document.getElementById('SearchBar');
  var searchBtn = document.getElementById('SearchBtn');
  var category = document.getElementById('CategorySelected');
  function SearchTableByExactValues(Category){
    var filter = searchBar.value.toUpperCase();
    var tr = tbody.getElementsByTagName("tr");
    var found;
    for(let i=0; i<tr.length; i++)
    {
        var td = tr[i].getElementsByClassName(Category);
        for(let j=0;j<td.length;j++)
        {
            if(td[j].innerHTML.toUpperCase() == filter){
                found = true;
            }
        }
        if(found)
        {
            tr[i].style.display ="";
            found= false;
        }
        else{
            tr[i].style.display="none";
        }
    }
  }
  searchBtn.onclick = function()
  {
      if(searchBar.value==""){
          SearchTable("nameField");
      }
      else if(category.value==1)
      SearchTable("nameField");
      else if(category.value==2)
      SearchTableByExactValues("CMNDField");
      else if(category.value==3)
      SearchTableByExactValues("sđtField");
      else if(category.value==4)
      SearchTable("secField");
      else if(category.value==5)
      SearchTable("startField");
      else if(category.value==6)
      SearchTable("endField");
      else if(category.value==7)
      SearchTable("checkField");
      else if(category.value==8)
      SearchTableByExactValues("vcField");
      else if(category.value==9)
      SearchTable("contactField");
      else if(category.value==10)
      SearchTable("regionField");
      else if(category.value==11)
      SearchTableByExactValues("genField");
  }
  searchBar.onkeypress = function(event)
  {
      if(event.keyCode==13)
      {
          searchBtn.click();
      }
  }
