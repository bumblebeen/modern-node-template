import fetch from 'node-fetch';

class Greeter {
	constructor (message) {
		this.message = message;
	}

	greet() {
		console.log(this.message);
	}

	async fortuneGreeting() {
		let fortuneMessage = await fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
	      .then(res => res.json())
	      .then(res => {
	        return res[0].fortune.message;
	      });
	    console.log('Here is your timely fortune: ' + fortuneMessage);
	}
}

let helloWorld = new Greeter('Hello World');
helloWorld.fortuneGreeting();

export default Greeter;