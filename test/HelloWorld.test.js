const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("HelloWorld", function () {
  let helloWorld, deployer;

  beforeEach(async function () {
    // Get the signers
    [deployer] = await ethers.getSigners();

    // Deploy the HelloWorld contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    helloWorld = await upgrades.deployProxy(HelloWorld, ["Hello, Hardhat!"], { initializer: 'initialize' });
    //await helloWorld.deployed();
  });

  it("Should return the initial greeting", async function () {
    expect(await helloWorld.sayHello()).to.equal("Hello, Hardhat!");
  });

  it("Should change the greeting when setGreeting is called", async function () {
    await helloWorld.setGreeting("Hello, Blockchain!");
    expect(await helloWorld.sayHello()).to.equal("Hello, Blockchain!");
  });
});
