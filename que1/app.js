const submitBtn = document.querySelector('#submit');
const title = document.querySelector('#title');
const fullName = document.querySelector('#fullName');
const phoneNumber = document.querySelector('#phoneNumber');
const mobileNumber = document.querySelector('#mobileNumber');
const email = document.querySelector('#email');
const street = document.querySelector('#street');
const town = document.querySelector('#town');
const numPeople = document.querySelector('#people');
const numRooms = document.querySelector('#rooms');
const arrivingDate = document.querySelector('#date');
const nights = document.querySelector('#nights');
// const occupance = document.querySelector('input')
const addInfo = document.querySelector('#info');
const actualCode = document.querySelector('.code');
actualCode.innerText = generateCapacha();

var allOkay = false;
let errors = 0;
// User data
let userData = {
    title : '',
    fullName :'',
    phoneNumber:'',
    mobileNumber:'',
    email:'',
    street:'',
    town:'',
    city:'',
    numPeople:'',
    numRooms:'',
    arrivingDate:'',
    occupance:'',
    nights:'',
    addInfo:'',
    capachaCode:''
};

document.getElementById('dummyData').addEventListener('click',(e)=>{
    useDummyData(e);
});
submitBtn.addEventListener('click',(e)=>{
    
    e.preventDefault();
    handleForm();
    if(!errors){
        window.location.href="userPage.html";
    }
})

function handleForm(){
    const capachaCode = document.querySelector('#reCapCode').value;
    var strUser = title.options[title.selectedIndex].value;
    if(strUser!=''){
        userData.title = strUser;
    }
   
    if(fullName.value===''){
        alert('Enter full Name');
        errors=1;
    }else{
        userData.fullName = fullName.value;
    }
    if(phoneNumber.value===''){
        alert('Please Enter Phone Number');
        errors=1;
    }else{
        userData.phoneNumber=phoneNumber.value;
    }
    if(email.value===''){
        alert("Please Provide your Email");
        errors=1;
    }else{
        userData.email=email.value;
    }
    userData.street=street.value;
    if(town.value === ''){
        alert("Please enter your Town Name");
        errors=1;
    }else{
        userData.town=town.value;
    }
    
    if(city.value!=''){
        userData.city=city.value;
    }

    if(numPeople.value===''){
        alert("Please Enter the number of people you are booking for");
        errors=1;
    }else{
        userData.numPeople=numPeople.value;
    }
    if(numRooms.value===''){
        alert("Please Enter the number of rooms you Need");
        errors=1;
        
    }else{
        userData.numRooms=numRooms.value;
    }
    
    if(arrivingDate.value===''){
        alert("Please Enter Arrival Date");
        errors=1;
    }else{
        userData.arrivingDate=arrivingDate.value;
    }
    
    if(nights.value===''){
        alert("Please Enter nights you will stay in Hotel");
        errors=1;
    }else{
        userData.nights=nights.value;
    }
    
    if (document.getElementById('single').checked) {
        userData.occupance=document.getElementById('single').value;
    }
    if (document.getElementById('twin').checked) {
        userData.occupance=document.getElementById('twin').value;
    }
    if (document.getElementById('double').checked) {
        userData.occupance=document.getElementById('double').value;
    }
    if(addInfo.value!=''){
        userData.addInfo=addInfo.value;
    }    
    if(actualCode.innerText != capachaCode){
        alert("Please Enter correct Capacha Code !!");
        errors=1;
    }else{
        userData.capachaCode=capachaCode;
    }
    console.log(userData);
}

function useDummyData(e){
    var d = new Date('sun aug 31,2020'),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    let curr_date =  [year, month, day].join('-');
    e.preventDefault();
    let uTitle = 'Mr.',
    uFullName = "Subhash Chandra",
    uPhoneNumber = "7073644358",
    uMobileNumber= "7073644358",
    uEmail="subhashchandra30720@gmail.com",
    uStreet='Malsar',
    uTown='Malsar',
    uCity='Sardarshahar',
    uNumPeople=4,
    uNumRooms=2,
    uArrivingDate=curr_date,
    uOccupance='twin',
    uNights=2,
    uAddInfo='We are coming there!!!',
    uCapachaCode=actualCode.innerText;

    title.value = uTitle;
    fullName.value = uFullName;
    phoneNumber.value = uPhoneNumber;
    mobileNumber.value = uMobileNumber;
    email.value = uEmail;
    street.value = uStreet;
    town.value = uTown;
    city.value = uCity;
    numPeople.value = uNumPeople;
    numRooms.value = uNumRooms;
    arrivingDate.value = uArrivingDate;
    // occupance.value= uOccupance;
    nights.value=uNights;
    addInfo.value = uAddInfo;
    document.querySelector('#reCapCode').value = uCapachaCode;
}

function generateCapacha(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    code = "";
    for(let i = 0; i<6; i++){
        code = code+chars.charAt(Math.floor(Math.random()*25));
    }
    return code;
}