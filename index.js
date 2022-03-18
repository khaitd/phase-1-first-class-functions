function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(){
    return function apple(){
        console.log("hello")
    }
}

function returnsAnAnonymousFunction(){
    return () => {
        console.log("Meow")
    }
}