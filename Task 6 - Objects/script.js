const Jack = {
    name: 'Jack',
    lastName:'White',
    weight:79,
    height:1.70,
    calcBMI: function() { 
        return this.indexOfBMI = (this.weight / Math.pow(this.height, 2)).toFixed(1);
    }
}

const Mike = {
    name: 'Mike',
    lastName: 'Black',
    weight:91,
    height:1.93,
    calcBMI: function() { 
        return this.indexOfBMI = (this.weight / Math.pow(this.height, 2)).toFixed(1);
    }
}

Jack.calcBMI();
Mike.calcBMI();

console.log(`
    ${Jack.indexOfBMI > Mike.indexOfBMI ? 
        Jack.name + ' ' +  Jack.lastName + ' (' + Jack.indexOfBMI + ')' 
        : Mike.name + ' ' + Mike.lastName + ' (' + Mike.indexOfBMI + ')'}
     BMI is higher than 
    ${Jack.indexOfBMI < Mike.indexOfBMI ? 
        Jack.name + ' ' +  Jack.lastName + ' (' + Jack.indexOfBMI + ')' 
        : Mike.name + ' ' + Mike.lastName + ' (' + Mike.indexOfBMI + ')'
    }!
`);