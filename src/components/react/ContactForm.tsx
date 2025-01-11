import '../../styles/global.css';

function ContactForm() {

  function submitForm() {
    const nameForm = document.getElementById("name") as HTMLFormElement;
    const inquiryForm = document.getElementById("inquiry") as HTMLFormElement;

    const name = nameForm.value as String;
    const inquiry = inquiryForm.value as String;

    if(name === "") {

      alert("Please enter your name before submitting.");

    } else if (inquiry === "") {

      alert("Please enter your inquiry before submitting.");

    } else {

      alert("This will open in your default mail application, then you will have to send it from there.")

      const subject = "[Inquiry]" + " " + name;

      const link = "mailto:support@spacegamedev.com?subject=" + subject + "&body=" + inquiry;

      window.open(link, '_blank');
    }
  }

  const rows : number = 5;

  return (
      <>

          <label htmlFor="name" className={"hidden"}>Name</label><input type="text" id="name" name="name" placeholder="Name" className="block w-[60%] ml-auto mr-auto min-w-[60%] p-3 bg-gray-200 broder-0 rounded-lg resize-y font-mono dark:bg-gray-900"/>
          <br/><br/>
          <label htmlFor="inquiry" className={"hidden"}>Inquiry</label><textarea id="inquiry" name="inquiry" placeholder="Inquiry" spellCheck="true" rows={rows} className="block w-[60%] ml-auto mr-auto min-w-[60%] p-3 bg-gray-200 broder-0 rounded-lg resize-y font-mono dark:bg-gray-900"></textarea>

          <br/><br/>

          <button className="bg-blue-500 rounded-2xl p-4 font-bold font-sans text-white hover:bg-blue-600 hover:text-black duration-300 ml-auto mr-auto block" onClick={submitForm}>Submit</button>

      </>
  )

}

export default ContactForm;