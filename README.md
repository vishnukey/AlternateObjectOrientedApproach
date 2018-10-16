# An Alternate Implementation of OOP in Javascript

## Description
This is based on the ideas of object oriented programming presented in smalltalk, based on the philosophy of message passing. Can support both single and mutiple inheritance, proxy objects, and all methods/fields are by default private.

## Usage
Each file runs independantly of the rest and serves as and example of how the approach is used and can work.

## Idea
The idea constructor functions return a new function that takes messages as strings as the arguments and dispatch a response depending the the message received. For inheritance, unknown messages are delegated to a parent object and that objects response is the overall response of the instantiated object
