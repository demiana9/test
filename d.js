let task=document.querySelector(".task");
let x= document.querySelector(".result");
let btn=document.querySelector(".btn");
let de= document.querySelector(".de");

btn.addEventListener('click', function() {
    if(task.value.length == 0){
   alert("please enter your task")     
    }else
    {
      x.innerHTML=`${task.value}`;
    }
});
de.addEventListener("click",function(){
    if(!task.value.length){
        for(var i=0 ;i<de.length ;i++){
            de[i]=this.remove()
        }
    }
})