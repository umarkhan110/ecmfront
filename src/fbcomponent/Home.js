import React, {useState} from 'react'
import  aa from './img/aa.png';
import logo from './img/logo.png'
import About from './About'
import { NavLink , Link} from 'react-router-dom';

const Home = () => {
//     var i, accordion = document.querySelectorAll(".accordion .card-header");
//   for (i = 0; i < accordion.length; i++) {accordion[i].addEventListener("onClick", function() {
      
//       var e = this.nextElementSibling;
//       if (e.classList.contains("show")){
//         e.classList.remove("show"); this.classList.remove("active");
//       } 
//       else {
//         var l = document.querySelectorAll(".accordion .collapse");
//           for ( i = l.length - 1; i >= 0; i--) {
//             l[i].classList.remove("show"); accordion[i].classList.remove("active");

//           e.classList.add("show"); this.classList.add("active");}
//       }
//   });
// }

const [notes, setNotes] = useState([]);
console.log(notes.downloadLink)
 const [input, setInput] = useState({

     url: "",
 });

 const hii = (event) => {
     const { name, value } = event.target;
     setInput(prevalue => {
         return {
             ...prevalue,
             [name]: value
         }
     })
 }


 const hoo = async (event) => {
     const { url } = input;
    
     event.preventDefault();
     //console.log(bcontent)
     try {
         const res = await fetch('/api/download', {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 url,
                
             })
         });
        const data1 = await res.json();
         console.log(data1)
         setNotes(data1)
         if (res.status === 422) {
             const error = new Error(res.error);
             throw error
         }else {
             console.log("Vedio Link")
         }
         
     } catch (error) {
         alert("Blog Not Published");
     }
     
 }



  return (
    <div>
        <div className="snapsave-app" id="snapsave-app">
<div className="app-close" onClick="sendEvent('Click_close_appHeader');document.getElementById('snapsave-app').remove();">
<svg aria-hidden="true" width="16px" height="16px" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
</div>
<a className="app-info" href="https://play.google.com/store/apps/details?id=com.video.downloader.snapx" target="_blank" rel="nofollow noopener" onClick="sendEvent('Click_app_header');document.getElementById('snapsave-app').remove()">
<div className="app-info-box">
<div className="app-img">
<picture className="app">
<img width="50px" height="50px" src="https://play-lh.googleusercontent.com/k65JAAKyaY4VgNdGuay2ZuoUjqrtXl7VdsGrmxHTEfJlZUxjqJT-1j2My18nfC8TK7A=s100-rw" alt="SnapSave App" loading="lazy"></img>
</picture>
</div>
<div className="app-info_info">
<div className="app-info-title">SnapTik Android App</div>
<div className="app-info-dev">Fun Guys</div>
<div className="app-info-rating"></div>
<div className="app-info-get">GET - On the Google Play</div>
</div>
</div>
</a>
<a className="app-btn-view" href="https://play.google.com/store/apps/details?id=com.video.downloader.snapx" target="_blank" rel="nofollow noopener" onClick="sendEvent('Click_app_header');document.getElementById('snapsave-app').remove()">
View
</a> 
</div>


<main>
<div className="container formInputUrl" id="inputData">
<section className="hero is-medium">
<div className="hero-body">
<h1 className="title is-1">Download Facebook Video</h1>
<h2 className="subtitle">Facebook video downloader - Free For All devices</h2>
</div>
</section>
  <section className="input-url-box">
  <form id="get_video" className="field has-addons"  method="POST" >
  <div className="control">
  <input name="url" className="input1 input input-url" id="url" onChange={hii} placeholder="Paste video URL Facebook"></input>
 
  </div>
  <div className="control control-btn">
  <div className="button is-paste" id="paste">
  <i className="img-sprites icon icon-paste"></i>
  </div>
  <button className="button is-download" id="send"  onClick={hoo}>Download</button>
 
  </div>
 
  <div className="progress-url">
  <progress className="progress is-success" value="0" max="100">0%</progress>
  </div>
  </form>
  <div>
 
 <button  className="button is-download"><a href={notes.downloadLink}>Download Vedio</a></button>

 </div>
  <div className="alert-box">
  <div className="notification is-warning" id="alert"></div>
  </div>
  </section>
</div>

{/* <iframe id="snapsave-frame" name="snapsave-frame" style="display:none"></iframe> */}
<section className="section ads-section" id="ad-chinh">
<div className="container">
<div className="noti-dl">
  <div className="notification is-success" id="alert">Success! Your video is downloaded.</div>
  <hr className="hr"></hr></div>
<div id="ad-slot">
{/* <ins className="adsbygoogle" style="display:block;" data-ad-client="ca-pub-8099514216328879" data-ad-slot="5594186738"></ins> */}

</div>
<div className="ad-close"><hr className="hr"></hr>
<div className="button is-dark is-small is-fullwidth" onClick='document.getElementById("ad-chinh").classList.remove("active");sendEvent("Click_Close_AdFull")'>
  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times fa-w-10 fa-2x">
    <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" className=""></path></svg> <span>Close ads</span>
    </div>
<a className="button is-dark is-small is-fullwidth" onClick="sendEvent('Click_Ad_dlmore_videos')" href="index.html">
  <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-inline--fa fa-angle-right fa-w-8 fa-2x">
    <g className="fa-group"><path fill="#ffffff7d" d="M128.14 256l56.47 56.49L88.46 409a23.76 23.76 0 0 1-33.6.18l-.18-.18-22.51-22.68a23.92 23.92 0 0 1 0-33.84z" className="fa-secondary"></path>
    <path fill="currentColor" d="M54.58 103.07L32 125.81a23.92 23.92 0 0 0 0 33.84L184.61 312.5 224 273l.06-.06a24 24 0 0 0-.16-33.94L88.37 103l-.17-.18a23.78 23.78 0 0 0-33.62.22z" className="fa-primary"></path></g></svg>
     <span>Download more Fb videos</span></a>
</div>
</div>
</section>



<div className="why-section" id="why-section">
<section className="section">
<div className="container">
<div className="columns">
<div className="column">
<div className="why-heading">
<h3 className="title why-title is-3">Why you should use Facebook downloader </h3>
<div className="why-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis.  <br></br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </div>
</div>
</div>
</div>
<div className="columns">
<div className="column is-4">
<div className="why-item">

<div className="title is-4">Highest quality</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis.  </div>
</div>
<div className="column is-4">
<div className="why-item">

<div className="title is-4">Easy</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis.  </div>
</div>
<div className="column is-4">
<div className="why-item">

<div className="title is-4">Free</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis.  </div>
</div>
</div>
</div>
</section>
</div>

<div class="how-section" id="how-section">
<section class="section">
<div class="container">
<div class="columns">
<div class="column">
<div class="why-heading">
<h3 class="title why-title is-3">How to <span class="text-primary">Download video Facebook</span></h3>

</div>
</div>
</div>
<div class="columns">
<div class="item column is-4">
<img src={aa}></img>
<div class="des">
<h4 class="title is-4"><span class="step-count">1</span>Copy and paste video link</h4>
<p>From <a href="https://www.facebook.com/" class="open-externallink" target="_blank" rel="nofollow noopener noreferrer">Facebook</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
</div>
</div>
<div class="item column is-4">
<img src={aa}></img>
<div class="des">
<h4 class="title is-4"><span class="step-count">2</span>Click On "Get Vedio"</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
</div>
</div>
<div class="item column is-4">
<img src={aa}></img>
<div class="des">
<h4 class="title is-4"><span class="step-count">3</span>Click On "Download Button"</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
</div>
</div>
</div>
</div>

<div class="container">
<div id="ad-slot">
{/* <ins class="adsbygoogle" data-ad-client="ca-pub-3226157429955034" data-ad-slot="7059184362"></ins> */}
sacasdcadcadc
</div>
</div>
</section>
</div>

<div className="faq-section" id="faq-section" itemscope="" itemType="https://schema.org/FAQPage">
<section className="section">
<div className="container" >
<div className="columns">
<div className="column">
<div className="why-heading">
<h3 className="title why-title is-3">Frequently Asked Questions</h3>
</div>
</div>
</div>
<div className="columns">
<div className="column">
<div id="faq-accordion" className="accordion">

<div className="card-faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
<div className="card-header">
<h4 className="card-title" itemProp="name">
<div className="card-toggle">Lorem Ipsum</div>
</h4>
</div>
<div className="card-collapse collapse" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" id="faq1">
<div className="card-body">
<p itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
</div>
</div>
</div>
<div className="card-faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
<div className="card-header">
<h4 className="card-title" itemProp="name">
<div className="card-toggle">Lorem Ipsum</div>
</h4>
</div>
<div className="card-collapse collapse" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" id="faq2">
<div className="card-body">
<p itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. <b></b><a></a></p>
</div>
</div>
</div>
<div className="card-faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
<div className="card-header">
<h4 className="card-title" itemProp="name">
<div className="card-toggle">Lorem Ipsum</div>
</h4>
</div>
<div className="card-collapse collapse" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" id="faq3">
<div className="card-body">
<p itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
</div>
</div>
</div>




</div>


</div>
</div>
</div>
</section>
</div>
<section className="section ads-section">
<div className="container">
<div id="ad-slot">
<ins className="adsbygoogle" data-ad-client="ca-pub-8099514216328879" data-ad-slot="2106367868"></ins>
dcsdvcsdvsdvcsdvc
</div>
</div>
</section>

</main>
<div className="ad-sticky only-mobile" id="ad-sticky">
{/* <ins className="adsbygoogle" style="display:inline-block;width:300px;height:50px" data-ad-client="ca-pub-8099514216328879" data-ad-slot="3098775515"></ins> */}
<script>
               (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
<footer>
<section className="section pd-0"><div className="container"></div></section>

<section className="section copyright pd-0">
<div className="container">
<div className="columns">
<div className="column pd-0"><div className="copyright-text"><p className="text-center">
    <Link to='/contact'>Contact</Link>&ensp;&ensp;<Link to="/aboutus">Aboutus</Link>
    &ensp;&ensp;<Link to="/term">Terms & Conditions</Link>&ensp;&ensp;<Link to="/privacy">Privacy Policy</Link></p></div></div>
</div>

<div className="columns">
<div className="column pd-0"><div className="copyright-text" >© 2022 <a href="index.html" title="SnapSave">SnapSave</a> 4.0. All rights reserved.</div></div>
</div>

</div>
</section>
</footer>
    </div>
  )
}

export default Home