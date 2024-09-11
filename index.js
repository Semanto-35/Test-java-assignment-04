
// problem 1 done

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const tax = (income - expenses) * .20;
    return tax;
}

// tests
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));



// problem 2 done

function sendNotification(email) {
    if (email.includes('@') === false) {
        return "Invalid Email";
    }
    const splitParts = email.split('@');
    const userName = splitParts[0];
    const domainName = splitParts[1];
    return userName + ' sent you an email from ' + domainName;
}

// tests
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));


// problem 3 done

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    const words = name.split('');
    for (const letter of words) {
        if (!isNaN(letter) && letter.trim() !== '') {
            return true;
        }
    }
    return false;
}

// tests
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));



// problem 4 done

function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        finalScore = finalScore + 20;
    }
    return finalScore >= 80;
}

// tests
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 45, isFFamily : false  }));



// problem 5 done

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let sum = 0;
    for (const time of waitingTimes) {
        sum = sum + time;
    }
    let average = Math.round(sum / waitingTimes.length);
    let remainingTime = ((serialNumber - 1) - waitingTimes.length) * average;
    return remainingTime;
}

// tests
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
