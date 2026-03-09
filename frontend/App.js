async function savePulse(){

let pulse=document.getElementById("pulse").value;

await fetch("http://localhost:5000/api/pulse",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
pulse:pulse
})
});

alert("Pulse Saved");

}
