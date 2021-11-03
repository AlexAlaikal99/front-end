$( function() {
    $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
      _renderItem: function( ul, item ) {
        var li = $( "<li>" ),
          wrapper = $( "<div>", { text: item.label } );
 
        if ( item.disabled ) {
          li.addClass( "ui-state-disabled" );
        }
 
        $( "<span>", {
          style: item.element.attr( "data-style" ),
          "class": "ui-icon " + item.element.attr( "data-class" )
        })
          .appendTo( wrapper );
 
        return li.append( wrapper ).appendTo( ul );
      }
    });
 
 
    $( "#select1" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget")
        .addClass( "ui-menu-icons avatar" );
  } );

  function tampil(){

    var nama_bahasa=document.getElementById("form1").select1.value;
    var p_kontainer=document.getElementById("container");
  
    if (nama_bahasa=="html")
      {
          p_kontainer.innerHTML="Hyper Text Markup Languange";
      }
    else if (nama_bahasa=="css")
      {
          p_kontainer.innerHTML="Cascading Style Sheet";
      }
    else if (nama_bahasa=="js")
      {
        p_kontainer.innerHTML="JavaScript";
      }
  }


  const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
} );

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#ffe44d";
} );