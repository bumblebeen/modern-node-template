import fetch from 'node-fetch';

class Greeter {
  constructor(message) {
    this.message = message;
    this.fetch = fetch;
  }

  greet() {
    console.log(this.message);
  }

  async fortuneGreeting() {
    const fortuneMessage = await this.fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
      .then(res => res.json())
      .then(res => res[0].fortune.message);
    console.log(`Here is your timely fortune:  ${fortuneMessage}`);
  }
}

export default Greeter;
