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

	public count = 0;

	constructor() {
		console.log("construct inject 1");
	}

	public test() {
		this.count++;
		console.log("inject 1, count:", this.count);
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

const cont1 = new Container({defaultScope: "Singleton", autoBindInjectable: true});
cont1.bind("inject1").to(Inject1);
cont1.bind("inject2").to(Inject2);
cont1.bind("inject11").to(Inject11);
const ninja1 = cont1.get(Root);
ninja1.callInject1();
ninja1.callInject2();
const ninja11 = cont1.get(Root);
ninja11.callInject1();
ninja11.callInject2();

const cont2 = new Container()
const.

