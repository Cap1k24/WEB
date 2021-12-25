 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBihWcopIWDaPF4w6-4obXZ8wsOAp02pAk",
   authDomain: "fire-fd63d.firebaseapp.com",
   projectId: "fire-fd63d",
   storageBucket: "fire-fd63d.appspot.com",
   messagingSenderId: "729629206102",
   appId: "1:729629206102:web:e81828ba6c02dbce5f7df7"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 import{ getDatabase, ref, get,set,child,update, remove}
 from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
 const db=getDatabase();
 // ----------------------REFERENCES----------------//

 var namebox= document.getElementById('Namebox');
 var cmndbox = document.getElementById('CmndId');
 var sdtbox = document.getElementById('sdt');
 var secbox = document.getElementById('Secbox');
 var startbox = document.getElementById('Startbox');
 var endbox = document.getElementById('Endbox');
 var whereCheck = document.getElementById('whereCheck');
 var numberVCbox = document.getElementById('NumberOfVC');
 var contact = document.getElementById('Contact');
 var region = document.getElementById('Region');
 var genbox= document.getElementById('Genbox');

//  var insBtn = document.getElementById('Insbtn');
//  var seaBtn = document.getElementById('Seabtn');
 var updBtn = document.getElementById('Updbtn');
 var delBtn = document.getElementById('Delbtn');

 // ----------------------INSERT DATA FUNCTION----------------

//  function InsertData()
//  {
     
//      set(ref(db,"RoadsterList/"+ cmndbox.value),{
         
//          NameOfStd: namebox.value,
//          CMND: cmndbox.value,
//          Phone:sdtbox.value,
//          Address: secbox.value,
//          WhereStart : startbox.value,
//          WhereEnd : endbox.value,
//          WhereCheck : whereCheck.value,
//          NumberVC : numberVCbox.value,
//          Contact :contact.value,
//          Region : region.value,
//          Gender:genbox.value,
         
//      })
//      .then(()=>{
//          var formInput= document.getElementsByTagName('input');
//             var name = formInput[0].value;
//             var cmnd = formInput[1].value;
//             var sdt = formInput[2].value;
//             var sec= formInput[3].value;
//             var startbox = formInput[4].value;
//             var endbox = formInput[5].value;
//             var whereCheck = formInput[6].value;
//              if(name =='' || cmnd =='' || sdt =='' || sec=='' || startbox == '' || endbox =='' || whereCheck == '')
//              {
//                  alert('Vui lòng điền tất cả các trường');
//                  return;
//              }
//              if(isNaN(sdt) || isNaN(cmnd)){
//                  alert('nhập cmnd và tuổi bằng số');
//                  return;
//              }
//              else{
//                  alert('Dữ liệu được thêm thành công!!!');
//              }
//          })
//      .catch((error)=>{
//          alert("Không thành công, lỗi "+error);
//      })
//  }
 // SEARCH DATA FUNCTION
//  function SearchData(){
//      const dbRef = ref(db);
//      get(child(dbRef,"RoadsterList/"+ cmndbox.value)).then((snapshot)=>{
//          if(snapshot.exists()){
//              namebox.value=snapshot.val().NameOfStd;
//              cmndbox.value=snapshot.val().CMND;
//              sdtbox.value = snapshot.val().Phone;
//              secbox.value=snapshot.val().Address;
//              startbox.value=snapshot.val().WhereStart;
//              endbox.value=snapshot.val().WhereEnd;
//              whereCheck.value =snapshot.val().WhereCheck;
//              numberVCbox.value = snapshot.val().NumberVC;
//              contact.value = snapshot.val().Contact;
//              region.value = snapshot.val().Region;
//              genbox.value=snapshot.val().Gender;
//          }
//          else{ 
//              alert("Không tìm thấy dữ liệu nào");
//          }
//      })
//      .catch((error)=>{
//          alert("Không thành công, lỗi"+error);
//      });
//  }
 // UPDATE DATA FUNCTION
 function updateData(){
     update(ref(db,"RoadsterList/"+ cmndbox.value),{
        NameOfStd: namebox.value,
        CMND: cmndbox.value,
        Phone:sdtbox.value,
        Address: secbox.value,
        WhereStart : startbox.value,
        WhereEnd : endbox.value,
        WhereCheck : whereCheck.value,
        NumberVC : numberVCbox.value,
        Contact :contact.value,
        Region : region.value,
        Gender:genbox.value,
     })
     .then(()=>{
         alert("Dữ liệu được update thành công!!!");
     })
     .catch((error)=>{
         alert("Không thành công, lỗi "+error);
     })
 }
 //DELETE DATA FUNCTION
 function DeleteData(){
     remove(ref(db,"RoadsterList/"+ cmndbox.value))
     .then(()=>{
         alert("Đã xóa thành công!!!");
     })
     .catch((error)=>{
         alert("Không thành công, lỗi"+error);
     })
 }

 // Assign Events to Btns

//  insBtn.addEventListener('click',InsertData);
//  seaBtn.addEventListener('click',SearchData);
 updBtn.addEventListener('click',updateData);
 delBtn.addEventListener('click',DeleteData);

