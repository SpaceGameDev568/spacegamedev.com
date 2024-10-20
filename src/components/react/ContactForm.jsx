import '../../styles/contact-form.scss'

function ContactForm() {

  function submitForm() {
    const name = document.getElementById("name").value;
    const inquiry = document.getElementById("inquiry").value;

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

  return (
      <>

        <label htmlFor="name"></label><input type="text" id="name" name="name" placeholder="Name"
                                             className="input-field"/>
        <br/><br/>
        <label htmlFor="inquiry"></label><textarea id="inquiry" name="inquiry" placeholder="Inquiry" spellCheck="true"
                                                   rows="5" className="input-field"></textarea>

        <button className="pill-button" onClick={submitForm}>Submit</button>

      </>
  )

}

export default ContactForm;