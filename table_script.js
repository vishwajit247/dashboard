function edit_row(a)
{
 document.getElementById("edit_button"+a).style.display="ane";
 document.getElementById("save_button"+a).style.display="block";
	
 var name=document.getElementById("name_row"+a);
 var address=document.getElementById("address_row"+a);
 var roll=document.getElementById("roll_row"+a);
	
 var name_data=name.innerHTML;
 var address_data=address.innerHTML;
 var roll_data=roll.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+a+"' value='"+name_data+"'>";
 address.innerHTML="<input type='text' id='address_text"+a+"' value='"+address_data+"'>";
 roll.innerHTML="<input type='text' id='roll_text"+a+"' value='"+roll_data+"'>";
}

function save_row(a)
{
 var name_val=document.getElementById("name_text"+a).value;
 var address_val=document.getElementById("address_text"+a).value;
 var roll_val=document.getElementById("roll_text"+a).value;

 document.getElementById("name_row"+a).innerHTML=name_val;
 document.getElementById("address_row"+a).innerHTML=address_val;
 document.getElementById("roll_row"+a).innerHTML=roll_val;

 document.getElementById("edit_button"+a).style.display="block";
 document.getElementById("save_button"+a).style.display="ane";
}

function delete_row(a)
{
 document.getElementById("row"+a+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_roll=document.getElementById("new_roll").value;
 var new_address=document.getElementById("new_address").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='s_no"+table_len+"'></td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='roll_row"+table_len+"'>"+new_roll+"</td><td id='address_row"+table_len+"'>"+new_address+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_roll").value="";
 document.getElementById("new_address").value="";
}