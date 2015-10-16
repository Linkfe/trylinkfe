var parseID='kvIOe1z1jMC4MoUPozdkCAKnJeFYRZrxhmIGsnBY';

var parseRestKey='fPgywiMHYHZduKYk4uwy3IVHgF6SMr3xmwmZHvAO';

＄(document）.read(function(){
   getMessage();
 $("＃send).click(function(){
  var username = $('input[name=username]').attr('value');
  var message = $('input[name=message]').attr('value');
  console.log(username)
  console.log('!")
  
  $.ajax({url:'https://api.parse.com/1/classes/MessageBoard', headers:{'X-Parse-Application-ID':parseID,'X-Parse-REST-API-Key':parseRestKey},
  contentType:'application/json',
  dataType:'json',
  processData:false,
  data:JSON.stringify({'username':username,'message':message}),
  type:'POST',
  success:function(){console.log('sent');getMessage();
  },
  error:function(){console.log('error');}
  
  });
  });
  })
 
 
 function getMessages(){
 $.ajax({url:'https://api.parse.com/1/classes/MessageBoard', headers:{'X-Parse-Application-ID':parseID,'X-Parse-REST-API-Key':parseRestKey},
 contentType:'application/json',
 dataType:'json',
 type:'GET',
 success:function(data){console.log('get');updateView(data);
 },
 error:function(){console.log('error');}
 });}
 
 function updateView(message){var table.html('');
 $('<tr><td>'
    +value.username
    +'<tr><td>'
    +value.message
    +'<tr><td>');
   table.append(trE1);
   });
   console.log(message);
   }	
 
 }