import '../../styles/components/contact-form.scss'

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

      const link = "mailto:jesse@spacegamedev.com?subject=" + subject + "&body=" + inquiry;

      window.open(link, '_blank');

    }
  }

  const rows : number = 5;

  return (
      <>

          <label htmlFor="name"></label><input type="text" id="name" name="name" placeholder="Name"
                                               className="input-field"/>
          <br/><br/>
          <label htmlFor="inquiry"></label><textarea id="inquiry" name="inquiry" placeholder="Inquiry" spellCheck="true"
                                                     rows={rows} className="input-field"></textarea>

          <br/><br/>

          <button className="pill-button" onClick={submitForm}>Submit</button>

      </>
  )

}

export default ContactForm;