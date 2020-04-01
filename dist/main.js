!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=()=>{const e=document.createElement("div");return e.classList.add("canvas","rows","columns","is-gapless"),e.innerHTML='<div class="container is-fluid">\n                        <div class="column is-half">\n                          <div class="row">\n                            <div class="intro"> \n                              <h3 class=\'title is-4 has-text-black info\'>\n                                Hello. My name is <span class="highlight">Gerald Goh.</span>\n                                I enjoy blending aesthetics with sophistication. Besides\n                                coding, I am keen on science and engineering that I\'ve pursued\n                                them academically. On my travel, I\'d be trigger ready on my \n                                camera or looking for a photogenic location to launch my drone.                               \n                              </h3> \n                            </div>\n                          </div>\n                        </div>\n                      </div>',e};var i=()=>{const e=document.createElement("div");return e.id="list",e.classList.add("card-container"),[{img:"./media/custom-grid.jpg",desc:"Built a custom grid-based framework (similar to bootstrap) with basic functionality necessary to build a website.",stack:" (HTML + CSS)",live:"https://rawcdn.githack.com/davitomix/CustomGridFrameWork/b5320d1646cea5bc2e0e9bdbcfe881e37083e70f/index.html",github:"https://github.com/davitomix/CustomGridFrameWork"},{img:"./media/mint.jpg",desc:"Built a form based HTML site that matches the appearance of mint.com’s signup page.",stack:" (HTML + CSS)",live:"https://geraldgsh.github.io/mint-sign-up-clone/",github:"https://github.com/geraldgsh/mint-sign-up-clone"},{img:"./media/social.jpg",desc:"A Facebook-like social network application. Features – users, profiles, “friending”, posts, newsfeed, and likes.",stack:" (Ruby on Rails + Heroku)",live:"https://societalbook.herokuapp.com/",github:"https://github.com/geraldgsh/societalbook"},{img:"./media/todo.jpg",desc:"An Objected Oriented Javascript To Do List app.",stack:" (HTML + CSS + JS + Bulma)",live:"https://rawcdn.githack.com/geraldgsh/todo-list/10b5955ab59a3ca8048f348bf3ed253ffd558b90/dist/index.html",github:"https://github.com/geraldgsh/todo-list"},{img:"./media/weather.jpg",desc:"A weather application that show weather info on queried location(s) via API from openweathermap",stack:" (HTML + CSS + JS + API)",live:"https://raw.githack.com/geraldgsh/weather-app/master/dist/index.html",github:"https://github.com/geraldgsh/weather-app"}].forEach(t=>{const n=document.createElement("div");n.classList.add("card"),e.appendChild(n);const a=document.createElement("div");a.classList.add("card-image"),n.appendChild(a);const i=document.createElement("figure");i.classList.add("image","is-4by3"),a.appendChild(i);const s=document.createElement("img");s.setAttribute("src",t.img),i.appendChild(s);const c=document.createElement("div");c.classList.add("card-content"),n.appendChild(c);const l=document.createElement("div");l.classList.add("desc"),l.innerHTML=`${t.desc} ${t.stack}`,c.appendChild(l);const d=document.createElement("footer");d.classList.add("card-footer","foot"),n.appendChild(d);const o=document.createElement("a");o.setAttribute("src",t.live),d.appendChild(o);const r=document.createElement("i");r.classList.add("fas","fa-tv"),o.appendChild(r);const m=document.createElement("a");m.setAttribute("src",t.github),d.appendChild(m);const u=document.createElement("i");u.classList.add("fab","fa-github"),m.appendChild(u)}),e};var s=()=>{const e=document.createElement("div");return e.id="contact",e.classList.add("section-light","contact"),e.innerHTML='<div class="container">\n                            <div class="columns is-multiline"\n                              data-aos="fade-in-up"\n                              data-aos-easing="linear">\n                              <div class="column is-12 about-me">\n                                <h1 class="title has-text-black has-text-centered section-title">\n                                  Get in touch\n                                </h1>\n                              </div>\n                              <div class="form-col column is-8 is-offset-2">\n                                <form name="contact" action="POST" method="POST" data-netlify-recaptcha="true" data-netlify="true">\n                                  <div class="field">\n                                    <label class="label">Name</label>\n                                    <div class="control has-icons-left">\n                                      <input class="input" type="text" \n                                      placeholder="Ex. Jane Smith" name="Name"/>\n                                      <span class="icon is-small is-left">\n                                        <i class="fas fa-user"></i>\n                                      </span>\n                                    </div>\n                                  </div>\n                                  <div class="field">\n                                    <label class="label">Email</label>\n                                    <div class="control has-icons-left">\n                                      <input\n                                        class="input"\n                                        type="email"\n                                        placeholder="Ex. hello@arctheme.com"\n                                        name="Email"/>\n                                      <span class="icon is-small is-left">\n                                        <i class="fas fa-envelope"></i>\n                                      </span>\n                                    </div>\n                                  </div>\n                                  <div class="field">\n                                    <label class="label">Message</label>\n                                    <div class="control">\n                                      <textarea\n                                        class="textarea"\n                                        placeholder="Textarea"\n                                        name="Message"\n                                      ></textarea>\n                                    </div>\n                                  </div>\n                                  <div class="field">\n                                    <div data-netlify-recaptcha="true"></div>\n                                  </div>                                  \n                                  <div class="field">\n                                    <div class="control">\n                                      <button class="button submit-button">\n                                        Submit&nbsp;&nbsp;\n                                        <i class="fas fa-paper-plane"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </form>\n                              </div>\n                            </div>\n                          </div>',e};const c=document.getElementById("content"),l=()=>{c.innerHTML="",c.appendChild(a())};l();const d=document.getElementById("#about"),o=document.getElementById("#mywork"),r=document.getElementById("#contact"),m=e=>{e.target===d?l():e.target===o?(c.innerHTML="",c.appendChild(i())):(c.innerHTML="",c.appendChild(s()))};d.addEventListener("click",m),o.addEventListener("click",m),r.addEventListener("click",m)}]);