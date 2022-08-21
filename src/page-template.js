function generateTeam(team) {

    let teamHtmlArray = [];

    team.forEach((member) => {
      if (member.getRole() == 'Manager') {
        teamHtmlArray.push(`
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="team-member-name text-light">${member.name}</h3>
            <h4 class="team-member-role">
              Manager
            </h5>
            <p>ID: ${member.id}</p>
            <p>Email: ${member.email}</p>
            <p>Office Number: ${member.officeNumber}</p>
          </div>
        `)
      };
      if (member.getRole() == 'Engineer') {
        teamHtmlArray.push(`
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="team-member-name text-light">${member.name}</h3>
            <h4 class="team-member-role">
              Engineer
            </h5>
            <p>ID: ${member.id}</p>
            <p>Email: ${member.email}</p>
            <p>GitHub: ${member.github}</p>
          </div>
        `)
      };
      if (member.getRole() == 'Intern') {
        teamHtmlArray.push(`
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="team-member-name text-light">${member.name}</h3>
            <h4 class="team-member-role">
              Intern
            </h5>
            <p>ID: ${member.id}</p>
            <p>Email: ${member.email}</p>
            <p>School: ${member.school}</p>
          </div>
        `)
      }
    });

    const teamHtml = teamHtmlArray.join('');

    const sectionHtml = `
      <section class="my-3" id="team">
        <div class="flex-row justify-space-between">
          ${teamHtml}
        </div>
      </section>
    `;

    return sectionHtml;
};


function generatePage(teamData) {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 h1">Team</span>
                </div>
            </nav>
        </header>
        <main class="container team">
            ${generateTeam(teamData)}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = { generatePage };