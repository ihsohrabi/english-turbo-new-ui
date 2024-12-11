let QcForm = () => {
  let tagHandler = (elem) => {
    return document.querySelector(elem);
  };
  let QcFormdefault = ` <form class="w-full mt-8 p-2" id="qcform">
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
                </form>`;
  let QcFormRate = `                                <form id="qcRateForm" class="w-full">
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
                </form>`;
  tagHandler("#qc-form-container").insertAdjacentHTML(
    "beforeend",
    QcFormdefault
  );
  tagHandler("#qcform").addEventListener("submit", (e) => {
    e.preventDefault();
    let getNounce = async () => {
      let req = await fetch("http://localhost:3001/nounces");
      let res = await req.json();
      let nounceList = res;
      let nounceCheck = nounceList.find(
        (item) => item.nounce === e.target.children[1].value
      );
      if (nounceCheck) {
        tagHandler("#qcform").remove();
        tagHandler("#qc-form-container").insertAdjacentHTML(
          "beforeend",
          QcFormRate
        );
        tagHandler(".qc-close").addEventListener("click", () => {
          tagHandler("#qcRateForm").remove();
          tagHandler("#qc-form-container").insertAdjacentHTML(
            "beforeend",
            QcFormdefault
          );
        });
        tagHandler("#qc-cancel").addEventListener("click", () => {
          tagHandler("#qcRateForm").remove();
          tagHandler("#qc-form-container").insertAdjacentHTML(
            "beforeend",
            QcFormdefault
          );
        });
      } else {
        alert("کد شما معتبر نیست");
      }
    };
    getNounce();
  });
};
export default QcForm;
