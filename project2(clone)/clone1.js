const article = document.querySelector('.article');
const people = document.querySelector('.people');
const learning = document.querySelector('.learning');
const job = document.querySelector('.job');
const games = document.querySelector('.games');
const getApp = document.querySelector('.getApp');
const join = document.querySelector('.join');
const Signin = document.querySelector('.Signin');
const google = document.querySelector('#google');
const microsoft = document.querySelector('#microsoft');
const gmail= document.querySelector('#gmail');
const userAgreement = document.getElementById('userAgree');
const privacyPolicy = document.getElementById('privacyPolicy');
const cokkiePolicy = document.getElementById('cokkiePolicy');
const joinNow = document.getElementById('joinNow');




article.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"
    
})

people.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/pub/dir/+/+?trk=guest_homepage-basic_guest_nav_menu_people"
    
})
learning.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/learning/search?trk=guest_homepage-basic_guest_nav_menu_learning"
    
})
job.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/jobs/search?keywords=web+dev&location=United+States&geoId=103644278&trk=public_jobs_jobs-search-bar_search-submit"
    
})
games.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/games?trk=guest_homepage-basic_guest_nav_menu_games"
    
})
getApp.addEventListener('click',()=>{
    
    window.location.href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&mode=mini&cid=guest_nav_upsell&trk=guest_homepage-basic_guest_nav_menu_windows"
    
})
join.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join"
    
})
Signin.addEventListener('click',()=>{
    
    window.location.href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
    
})



google.addEventListener('click',()=>{
    
    window.location.href="https://accounts.google.com/gsi/select?client_id=990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com&auto_select=true&ux_mode=popup&ui_mode=card&context=signin&as=177jmO0%2FIY7TjTICXIspEw&channel_id=17a8fbfce03b3e8c057779fb1ca1f1237a494173975311bfa22c3bc6a301e87d&origin=https%3A%2F%2Fin.linkedin.com"
    
})
microsoft.addEventListener('click',()=>{
    
    window.location.href="https://login.live.com/oauth20_authorize.srf?client_id=3fa91358-6f74-4525-b5df-da149652be36&scope=openid+profile+User.Read+email+offline_access&redirect_uri=https%3a%2f%2fwww.linkedin.com%2fmicrosoft-login%2fhandler&response_type=code&response_mode=form_post&uaid=af2cf9ab6ebb4228a146f0e14863cda3&msproxy=1&issuer=mso&tenant=consumers&ui_locales=en-US&epct=PAQABDgEAAABVrSpeuWamRam2jAF1XRQEUGbPQiiKsuYdpMp2Js3ENceasl7Rti-q83cZZ5_Jfwr-ynx1n9Y94H_L8YLUuAOeYNFLB9cOW30cIZJC1oo5tJy5udvDN-5OA_cxSpCP0vhxErLPvoLjISVlC9_5alXatfnfzmApiuULi_0gsRZE_sXNv-esLS2giZdfeZt7yuvi9W_W9Jc_-J9N_ixOhVpZvgvTDKp7zobq9tsismdZWCAA&jshs=0#"
    
})

gmail.addEventListener('click',()=>{
    window.location.href= "https://www.linkedin.com/login"
})




userAgreement.addEventListener('click',()=>{
    window.location.href= "https://www.linkedin.com/legal/user-agreement?trk=linkedin-tc_auth-button_user-agreement"

})




privacyPolicy.addEventListener('click',()=>{
    window.location.href= "https://www.linkedin.com/legal/privacy-policy?trk=linkedin-tc_auth-button_privacy-policy"
})
cokkiePolicy.addEventListener('click',()=>{
    window.location.href= "https://www.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy"
})



joinNow.addEventListener('click',()=>{
    window.location.href= "https://www.linkedin.com/signup"
})

