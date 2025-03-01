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

          <p className={"text-white ml-auto mr-auto w-fit text-center"}>Fill out this form and submit to send me an email.</p>

          <br/>

          <label htmlFor="name" className={"hidden"}>Name</label><input type="text" id="name" name="name" placeholder="Name" className={"block w-[80%] ml-auto mr-auto min-w-[60%] p-3 rounded-lg resize-y font-mono bg-[#222225] text-white border-[1px] border-white/10"}/>
          <br/><br/>
          <label htmlFor="inquiry" className={"hidden"}>Inquiry</label><textarea id="inquiry" name="inquiry" placeholder="Inquiry" spellCheck="true" rows={rows} className={"block w-[80%] ml-auto mr-auto min-w-[60%] p-3 bg-[#222225] rounded-lg resize-y font-mono text-white border-[1px] border-white/10"}></textarea>

          <br/><br/>

          <div className={"ml-auto mr-auto w-fit"}>

            <button className="text-white p-3 rounded-lg bg-blue-500 font-bold hover:bg-blue-300 duration-300 box-border hover:ring-4 hover:ring-blue-500/50 cursor-pointer" onClick={submitForm}>Submit</button>

          </div>

      </>
  )

}

export default ContactForm;