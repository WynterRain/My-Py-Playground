// short circut evaluation is like when there is an or statement;
// if the first 1 is true then it doesn't even look at the next one;

function pName (name) {
    name = name || 'default'
    console.log(name)
}

pName("mei")

//using &&
const pObj = {
    

}

if (person != null && person.address !== null) {
    console.log(person.address.street)
}