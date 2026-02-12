function checkPassword(){
  var p=document.getElementById("password").value.trim();
  if(p==="1259"){
    document.getElementById("login").style.display="none";
    document.getElementById("content").style.display="block";
    startHearts();
    typeWriter();
    startConfetti();
  } else alert("كلمة السر غلط 💔");
}

var engagementDate=new Date("2025-02-13");
function updateCounter(){
  var now=new Date(), diff=now-engagementDate;
  var days=Math.floor(diff/(1000*60*60*24));
  var hours=Math.floor((diff/(1000*60*60))%24);
  var minutes=Math.floor((diff/(1000*60))%60);
  var seconds=Math.floor((diff/1000)%60);
  document.getElementById("counter").innerHTML=
    days+" يوم ❤️ "+hours+" ساعة ❤️ "+minutes+" دقيقة ❤️ "+seconds+" ثانية";
}
setInterval(updateCounter,1000);

var images=[
  "https://i.ibb.co/ch7SMf6D/IMG-20260212-WA0001.jpg",
  "https://i.ibb.co/Kz9wNdhf/IMG-20251228-WA0000.jpg",
  "https://i.ibb.co/mr521dvm/IMG-20260212-WA0000.jpg",
  "https://i.ibb.co/VpW6c878/IMG-20250814-182317-629.webp",
  "https://i.ibb.co/5mtfdcT/IMG-20250717-190536-223.jpg"
];
var idx=0;
setInterval(()=>{
  idx++;
  if(idx>=images.length)idx=0;
  document.getElementById("slider").src=images[idx];
},3000);

var text="هابي فلانتين يا عمري ❤ حبيبي في عيد الحب عاوزه اقولك انك اجمل صدفه واحلي قدر كل لحظه معاك هي عيد وكل كلمه منك نغمه حب تسكن قلبي ❤ كل سنه وانت سبب سعادتي واجمل ما في ايامي مهما مرت السنين هتفضل نبضي الوحيد و موطني الابدي ✨ بحبك قد السما واكتر وهحبك في كل عيد وكل لحظه I love you ❤ كل عيد حب واحنا مع بعض انت من يوم ما دخلت حياتي وانا حياتي بقت معاك حاجه تانيه فعلا انت احلى واجمل و اغلى حاجه ربنا رزقني بيها ايامي كلها حلوه بوجودك فيها ❤ حياتي عايزاك تعرف اني السنه دي مميزه عشان انت معايا وفخوره باختياري ليك عارفه اني اختارت راجل وسند مبسوطه انك في حياتي بحبك اوي 😘 بجد مفيش كلام يقدر يوصف حبي ليك حقيقي مبسوطه اوي بوجودك في حياتي وجودك في حياتي بقي شيء مهم جدا عايزك تعرف انك اجمل وقت في حياتى بيكون معاك بضحك فعلاً من قلبي وبنسى كل الدنيا وانا معاك وبكون فرحانه وانا جمبك بحبك وبحب كل كلمه طالعه منك 🫂❤ في قلبي حب كبير اوي ليك مهما اوصف مش هقدر اقولك بحبك قد ايه 🥺❤ ربنا يديمك ليا وميحرمنيش منك ابدا يا روح قلبي بحبك اوي يا نور عيني❤️";
var j=0;
function typeWriter(){
  if(j<text.length){
    document.getElementById("loveText").innerHTML+=text.charAt(j);
    j++;
    setTimeout(typeWriter,20);
  }
}

function startHearts(){
  setInterval(()=>{
    var heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(20+Math.random()*15)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  },700);
}

function startConfetti(){
  setInterval(()=>{
    var conf=document.createElement("div");
    conf.innerHTML="💖";
    conf.style.position="absolute";
    conf.style.left=Math.random()*100+"vw";
    conf.style.fontSize=(15+Math.random()*20)+"px";
    conf.style.top="-2vh";
    conf.style.opacity=0.8;
    document.querySelector(".confetti").appendChild(conf);
    setTimeout(()=>conf.remove(),5000);
  },300);
}