function receivesAFunction(func) {
    func();
}

function returnsANamedFunction() {
    const func = () => console.log('I am a named function!');
    return func;
}

function returnsAnAnonymousFunction() {
    return () => console.log('I am an anonymous function!');
}