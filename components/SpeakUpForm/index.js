import style from "./style.scss";
import React from "react";

class SpeakUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      description: "",
      language: "pl"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={style.speakUp}>
        <div className={style.headers}>
          <h1>Speak Up</h1>
          <h2>Become our next speaker</h2>
          <div className={style.lead}>
            Got an idea for an interesting topic? Want to improve your
            presentation skills? Just fill up the form and we’ll get back to you
            as soon we have an available slot.
          </div>
        </div>
        <div className={style.form}>
          <form onSubmit={this.handleSubmit}>
            <div className={style.fields}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.handleInputChange}
                className={style.box}
              />
              <input
                type="text"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className={style.box}
              />
              <input
                type="text"
                name="title"
                placeholder="Title of your talk"
                value={this.state.title}
                onChange={this.handleInputChange}
                className={style.box}
              />
              <textarea
                name="description"
                placeholder="What will the talk be about?"
                value={this.state.description}
                onChange={this.handleInputChange}
                className={style.box}
                rows="5"
              />
              <p>What language will you use?</p>
              <label className={style.container}>
                Polish
                <input
                  type="radio"
                  name="language"
                  value="pl"
                  onChange={this.handleInputChange}
                  checked={this.state.language === "pl"}
                />
                <span className={style.checkmark} />
              </label>
              <label className={style.container}>
                English
                <input
                  type="radio"
                  name="language"
                  value="en"
                  onChange={this.handleInputChange}
                  checked={this.state.language === "en"}
                />
                <span className={style.checkmark} />
              </label>
            </div>
            <input type="submit" value="Submit" className={style.submit} />
          </form>
        </div>
      </div>
    );
  }
}

export default SpeakUpForm;
