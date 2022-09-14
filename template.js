
const manager = managerData => {
    return `
    <div id="${managerData.getRole()}">
        <div class = "name-role manager-name">
            <h2>${managerData.getName()}</h2>
            <h3>Role: ${managerData.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li class = "list-group-item">ID: ${managerData.getId()}</li>
                <li class = "list-group-item">Email: <a href= "mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
                <li class = "list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

const engineer = engineerData => {
    return `
    <div id = "${engineerData.getRole()}>
        <div class = "name-role engineer-name">
            <h2>${engineerData.getName()}</h2>
            <h3>Role: ${engineerData.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li class = "list-group-item">ID: ${engineerData.getId()}</li>
                <li class = "list-group-item">Email: <a href= "mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
                <li class = "list-group-item">Github: <a href= "https://www.github.com/${engineerData.getGithub()}">${engineerData.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}

const intern = internData => {
    return `
    <div id = "${internData.getRole()}>
        <div class ="name-role intern-name">
            <h2>${internData.getName()}</h2>
            <h3>Role: ${internData.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li class = "list-group-item">ID: ${internData.getId()}</li>
                <li class = "list-group-item">Email: <a href= "mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
                <li class = "list-group-item">School: ${internData.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}

const employeesClass = employeesArray => {
    let roleHTML = ""
    
    for (i=0; i< employeesArray.length; i++) {
        if(employeesArray[i].getRole() === 'Manager') {
        roleHTML = roleHTML + manager(employeesArray[i])
        }
        if(employeesArray[i].getRole() === 'Engineer') {
        roleHTML = roleHTML + engineer(employeesArray[i])
        }
        if(employeesArray[i].getRole() === 'Intern') {
        roleHTML = roleHTML + intern(employeesArray[i])
        }
    } return roleHTML
};

const generateHTML = data => {
return `
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <div class = "my-team">
            <h1>Team Birria</h1>
        </div>
    </header>
    <main>
    ${employeesClass(data)}
    </main>
</body>
</html>
`
}

module.exports = generateHTML;