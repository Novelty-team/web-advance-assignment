

function start(){
    let data = document.getElementById("data");
    var list = [] ;
	if (localStorage.getItem("list") != null)
     list = JSON.parse(localStorage.getItem("list"));
     
     var fetch = ` <table style="width:100%;border-color:white" border="3" > 
     <tr> 
         <th rowspan="2"><div class="text-center"><p class="text-center">Student Name</p></div></th> 
         <th colspan="5"><div class="text-center"><p class="text-center">Marks</p></div></th>
         <th rowspan="2"><div class="text-center"><p class="text-center">Grade</p></div></th> 
     </tr> 
     <tr>
         <th ><div class="text-center"><p class="text-center">First</p></div></th> 
         <th ><div class="text-center"><p class="text-center">Second</p></div></th> 
         <th ><div class="text-center"><p class="text-center">Final</p></div></th> 
         <th ><div class="text-center"><p class="text-center">Participation</p></div></th> 
         <th ><div class="text-center"><p class="text-center">Absences (<7 times) yes/no </p></div></th>  
     </tr>
 `;
     for (var i=0 ; i<list.length ; i++){
        
        fetch += `<tr> <td>`+list[i].name+`</td> <td>`+list[i].first+`</td>  <td>`+list[i].second+`</td> <td>`+list[i].final+`</td> <td>`+list[i].participation+`</td> <td>`+list[i].absences+`</td> <td>`+list[i].grade+`</td></tr>`;
     }
     fetch += `</table>`;
     data.innerHTML = fetch;
	
}


window.addEventListener("load",start,false);