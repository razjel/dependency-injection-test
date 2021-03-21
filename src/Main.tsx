import {Container, inject, injectable} from "inversify";
import "reflect-metadata";

@injectable()
class Inject11 {
	constructor() {
		console.log("construct inject 11");
	}

	public test() {
		console.log("inject 11");
	}
}

@injectable()
class Inject1 {
	@inject("inject11")
	public inject11: Inject11;

	constructor() {
		console.log("construct inject 1");
	}

	public test() {
		console.log("inject 1");
		this.inject11.test();
	}
}

@injectable()
class Inject2 {
	constructor() {
		console.log("construct inject 2");
	}

	public test() {
		console.log("inject 2");
	}
}

@injectable()
class Root {
	@inject("inject1")
	private inject1: Inject1;
	@inject("inject2")
	private inject2: Inject2;

	public callInject1() {
		this.inject1.test();
	}

	public callInject2() {
		this.inject2.test();
	}
}

const myContainer = new Container();
myContainer.bind("root").to(Root);
myContainer.bind("inject1").to(Inject1);
myContainer.bind("inject2").to(Inject2);
myContainer.bind("inject11").to(Inject11);

const ninja = myContainer.get<Root>("root");

ninja.callInject1();
ninja.callInject2();
