const gnar = 'gnarble';

const info = ({ 
    file = __filename, 
    dir = __dirname 
}) => {
    <p>{dir} : {file}</p>
}

info();

switch(gnar) {
    default: console.log("Esto es gnar");
        break;
}