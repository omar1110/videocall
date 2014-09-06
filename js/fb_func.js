
/*
my_FIREBASE API
order()    = this func is to send user id to the fb server in the fild "id"
*/
orders();


function orders(){
 var fb = new Firebase("https://videocall.firebaseio.com/");
 //becaus of the delay in getting user-id from peer.js we have to wait 2.5 sec
setTimeout(function() {fb.set({ id: $("#my-id").text()});},2500);
}

