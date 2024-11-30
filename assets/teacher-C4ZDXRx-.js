import{S as d}from"./swiper-bundle-BwsG9tyr.js";let u=()=>{let e=t=>document.querySelector(t),a=t=>document.querySelectorAll(t),c=()=>{a(".other-cards").forEach(t=>{t.classList.contains("translate-x-[600px]")&&t.classList.contains("rotate-45")&&(e(".etc-menu").style.display="none")})};const n=()=>{e("#teacherData").classList.add("-translate-x-full")},o=()=>{e("#teacherData").classList.add("translate-x-full")};e("#navrightbtn").addEventListener("click",n),e("#navleftbtn").addEventListener("click",o);let s=0;e("#navrightbtn").addEventListener("touchstart",t=>{s=t.changedTouches[0].clientX}),e("#navleftbtn").addEventListener("touchstart",t=>{s=t.changedTouches[0].clientX}),e("#navrightbtn").addEventListener("touchend",t=>{const r=t.changedTouches[0].clientX;s-r>50&&n()}),e("#navleftbtn").addEventListener("touchend",t=>{const r=t.changedTouches[0].clientX;s-r<50&&o()}),a("#navbackbtn").forEach(t=>{t.addEventListener("click",()=>{e("#teacherData").classList.remove("-translate-x-full"),e("#teacherData").classList.remove("translate-x-full")})}),a(".teacher-info-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-info-card").classList.remove("translate-x-[600px]"),e(".teacher-info-card").classList.remove("rotate-45"),c()})}),a(".teacher-class-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-class-card").classList.remove("translate-x-[600px]"),e(".teacher-class-card").classList.remove("rotate-45"),c()})}),a(".teacher-contact-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-contact-card").classList.remove("translate-x-[600px]"),e(".teacher-contact-card").classList.remove("rotate-45"),c()})}),a(".teacher-rules-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-rules-card").classList.remove("translate-x-[600px]"),e(".teacher-rules-card").classList.remove("rotate-45"),c()})}),a(".teacher-registration-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-registration-card").classList.remove("translate-x-[600px]"),e(".teacher-registration-card").classList.remove("rotate-45"),c()})}),a(".teacher-qc-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-qc-card").classList.remove("translate-x-[600px]"),e(".teacher-qc-card").classList.remove("rotate-45"),c()})}),a(".card-close-btn").forEach(t=>{t.addEventListener("click",()=>{a(".other-cards").forEach(r=>{!r.classList.contains("translate-x-[600px]")&&!r.classList.contains("rotate-45")&&(r.classList.add("rotate-45"),r.classList.add("translate-x-[600px]"),e(".etc-menu").style.display="flex")})})});let l=0;e("#rotate-btn").addEventListener("click",()=>{l+=180,e("#main-card").style.transform=`rotateY(${l}deg)`,e("#back-card").style.transform=`rotateY(${l+180}deg)`})},f=()=>{let e=n=>document.querySelector(n),a=` <form class="w-full mt-8 p-2" id="qcform">
                  <label
                    class="before:inline-block before:w-1 before:h-1 before:bg-[#2b2b2bcc] before:rounded-full text-[#353535] before:ml-1 text-[12px] before:mb-[1px] inline-block"
                    for="nounce"
                    >کد یکبار مصرف خود را وارد کنید</label
                  >
                  <input
                  id="nounce"
                    type="text"
                    placeholder="مثال: 2ac7fb"
                    class="!font-sans w-full h-[30px] mt-2 text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                  />
                  <input
                    type="submit"
                    value="تایید"
                    class="w-full h-[30px] text-white bg-[#ef4444] text-[12px] px-2 my-3 text-[#] border rounded-md focus:outline-[#ef4444]"
                  />
                </form>`,c=`                                <form id="qcRateForm" class="w-full">
                  <div class="w-full flex flex-col relative overflow-hidden">
                    <label
                      for="qc-Range"
                      class="before:inline-block before:w-1 before:h-1 before:bg-[#2b2b2bcc] before:rounded-full text-[#353535] before:ml-[2px] text-[11px] before:mb-[1px] inline-block mb-[10px] mt-2"
                    >
                      به استاد خود از ۱ تا ۵ نمره ای بدهید!
                    </label>
                    <input
                      dir="ltr"
                      class="w-full right"
                      type="range"
                      id="qc-Range"
                      min="1"
                      max="5"
                      value="3"
                    />
                    <div
                      dir="ltr"
                      class="w-full h-[25px] flex justify-between items-center px-[12px] font-yekan-bakh-bold mt-[4px] rounded-full border-b-2 border-[#2b2b2b44] shadow-sm"
                    >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >1</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >2</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >3</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >4</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >5</span
                      >
                    </div>
                    <label
                      for="qc-text"
                      dir="rtl"
                      class="before:inline-block before:w-1 before:h-1 before:bg-[#2b2b2bcc] before:rounded-full text-[#353535] before:ml-[2px] text-[10px] before:mb-[1px] inline-block mb-[10px] mt-3"
                    >
                      خوشحال میشیم نظرتم بگی برامون...
                    </label>
                    <textarea
                      dir="rtl"
                      placeholder="در این دوره..."
                      class="w-full min-h-[5em] resize-none border-[1px] border-[#ef4444aa] p-2 text-[10px] overflow-auto no-scrollbar rounded-md text-[#4d4d4d] focus:outline-[#ef4444] focus:shadow-inner"
                      name="qc-text"
                      id="qc-text"
                      rows="4"
                    ></textarea>
                    <div class="w-full h-[60px] flex gap-2 mt-2">
                      <input
                        type="submit"
                        value="ارسال نظر"
                        class="w-[70%] h-[30px] text-white bg-green-500 text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                      />
                      <input
                        id="qc-cancel"
                        type="button"
                        value="انصراف"
                        class="w-[30%] h-[30px] text-white bg-[#ef4444] text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                      />
                    </div>
                  </div>
                </form>`;e("#qc-form-container").insertAdjacentHTML("beforeend",a),e("#qcform").addEventListener("submit",n=>{n.preventDefault(),(async()=>{(await(await fetch("http://localhost:3001/nounces")).json()).find(i=>i.nounce===n.target.children[1].value)?(e("#qcform").remove(),e("#qc-form-container").insertAdjacentHTML("beforeend",c),e(".qc-close").addEventListener("click",()=>{e("#qcRateForm").remove(),e("#qc-form-container").insertAdjacentHTML("beforeend",a)}),e("#qc-cancel").addEventListener("click",()=>{e("#qcRateForm").remove(),e("#qc-form-container").insertAdjacentHTML("beforeend",a)})):alert("کد شما معتبر نیست")})()})};new d(".mySwiper",{autoplay:{delay:1e4,disableOnInteraction:!1},direction:"vertical"});u();f();document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.querySelector("#loading-left").classList.remove("left-0"),document.querySelector("#loading-left").classList.add("-left-full"),document.querySelector("#loading-right").classList.remove("right-0"),document.querySelector("#loading-right").classList.add("-right-full")},750),setTimeout(()=>{document.querySelector("#loading-logo").classList.add("opacity-0")},1e3),setTimeout(()=>{document.querySelector("#loading-main").classList.add("opacity-0"),document.querySelector("#main-card").classList.toggle("-rotate-y-180"),document.querySelector("#back-card").classList.toggle("rotate-y-180"),document.querySelector("#bg-blur").classList.add("backdrop-blur-[3px]")},2e3),setTimeout(()=>{document.querySelector("#loading-main").classList.add("hidden"),document.querySelector(".etc-menu").classList.remove("opacity-0"),document.querySelector(".watermark").classList.remove("opacity-0")},2500)});
