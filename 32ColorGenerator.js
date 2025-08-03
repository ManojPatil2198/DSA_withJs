// random hex color generator

const randomHexaColor = () =>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
};
console.log(randomHexaColor());
