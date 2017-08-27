
class Greeter {
	constructor (message) {
		this.message = message;
	}

	greet() {
		console.log(this.message);
	}
}

let helloWorld = new Greeter('Hello World');
helloWorld.greet();

export default Greeter;