//elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .continue");
const friend = document.querySelector(".friend");
const non_friend = document.querySelector(".non_friend");
var friends = document.getElementById("friends");
var non_friends = document.getElementById("non_friends");

//start button
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the choice box
}

//friend button
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the choice box
    friend.classList.add("activeInfo");//show the friend one
    friends.play();//play music
}

//friend button
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the choice box
    non_friend.classList.add("activeInfo");//show the friend one
    non_friends.play();//play music
}