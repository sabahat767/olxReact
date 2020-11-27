//import firebase from 'firebase';
import firebase from 'firebase';
const facebook_login=()=>
{
return(dispatch)=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        let create_user={
            name:user.displayName,
            email:user.email,
            profile:user.photoURL,
            uid:user.uid
        }
firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
.then(()=>{
    alert("user login successful");
})


        //console.log("user==>",create_user)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      
      });
}
}
export   {facebook_login}