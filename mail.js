
             
              
              //update this with your js_form selector
              var form_id_js = "javascript_form";
              var email = "email"; 
          
              var data_js = {
                  "access_token": "3q8rt04lsvxv16ofh42kv6kr"
              };

              var sendButton = document.getElementById("js_send");

              // validates email 
              sendButton.onclick = js_send;
              
            //   function validate(form_id_js, email) {
            //     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //     var address = document.forms[form_id_js].elements[email].value;
            //     if(reg.test(address) == false) {
            //        alert('Неверный формат адреса электронной почты!');
            //        document.forms[form_id_js].elements[email].value = "";
            //        setFocus();
            //        return false;
            //     }
            //     // sends address if e-mail is ok
            //     else js_send();
            //  }

                //send e-mail via postmail
                function js_send() {

                    // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    // var address = document.forms[form_id_js].elements[email].value;
              
                    // if(reg.test(address) == false) {
                    //    alert('Неверный формат адреса электронной почты!');
                    //    document.forms[form_id_js].elements[email].value = "";
                    //    setFocus();
                    //    return false;
                    // } 

                   // else {

                    sendButton.value='Sending…';
                    sendButton.disabled=true;
                    var request = new XMLHttpRequest();

                    request.onreadystatechange = function() {
                        if (request.readyState == 4 && request.status == 200) {
                            js_onSuccess();
                        } else
                        if(request.readyState == 4) {
                            js_onError(request.response);
                        }
                    };
            
                    var subject = document.querySelector("#" + form_id_js + " [name='email']").value;
                    var message = document.querySelector("#" + form_id_js + " [name='email']").value;
                    data_js['subject'] = subject;
                    data_js['text'] = message;
                    var params = toParams(data_js);
            
                    request.open("POST", "https://postmail.invotes.com/send", true);
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            
                    request.send(params);
            
                    return false;
                   // }
                }
                
              function js_onSuccess() {
                  // remove this to avoid redirect
                  window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
                  alert('Почтовый адрес сохранен успешно, спасибо!');
              }
          
              function js_onError(error) {
                  // remove this to avoid redirect
                  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
                  alert('Ошибка, почтовый адрес не сохранен, попробуйте еще раз!');
              }

              function toParams(data_js) {
                  var form_data = [];
                  for ( var key in data_js ) {
                      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
                  }
          
                  return form_data.join("&");
              }
          
              function setFocus(){      
                document.getElementById("email").focus();
              }

              var js_form = document.getElementById(form_id_js);
              js_form.addEventListener("submit", function (e) {
                  e.preventDefault();
              });

        