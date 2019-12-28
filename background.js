chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     let activeTab = tabs[0];
     let activeTabId = activeTab.id; // or do whatever you need

  });


chrome.identity.getProfileUserInfo(function(userInfo) {
   /* Use userInfo.email, or better (for privacy) userInfo.id
      They will be empty if user is not signed in in Chrome */
      let userEmail = userInfo.email;
      let uniqueID = userInfo.id;
  });

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

$(document).ready(function() {
  var data = {'curr_page_url': activeTab,
              'curr_date': today,
              'userID': userEmail
            };
  console.log(data);
  console.log("READY");
  $.ajax({
         type: "GET",
         // url: "/new_data_point2",
         url: "https://hyperbias-extension.herokuapp.com/new_data_point2",
         contentType:'application/json',
         data: data,
         dataType: "json",
         success: function(response) {
           console.log("yaysies");
           console.log(JSON.stringify(response));
         },
         error: function(rs, e) {
           console.log("whoopsies");
         }
  });
  return false;
});
