$(document).ready(function()
{
$("#ajout").click(function()
{

 if($("#DOM").val()=="") 
   {
     alert("please add name of item");
     exit();
   } else{
    var div=$('<div></div>');
    $("#ajouter").append(div);
    div.prop("class","input-group");
    div.css("margin-bottom","10px");
     var label=$('<label class="input-group-text" id="label"></label>');
     label.css("font-weight","bold"); 
   div.append(label);
   label.css("width","fit-content");
    label.html($("#DOM").val() );
  }
 var nv=$('<input/>');
 nv.prop("class","form-control");
 div.append(nv);
 div.css("margin","20px");
 div.css("width","90%");
 var supp=$('<input type="submit" value="Supprimer">');
 supp.prop("class","btn btn-outline-danger");
 div.append(supp);
 supp.click(function()
 {
     div.remove();
 });  
});
});



       