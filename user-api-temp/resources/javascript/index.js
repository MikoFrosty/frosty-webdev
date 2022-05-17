document
  .querySelector("#get-user-button")
  .addEventListener("click", function () {
    const getUserResult = document.querySelector("#get-user-result");

    getUserResult.innerHTML = `
        <pre><code>
{
    "name": "John Doe",
    
    "age": "42",
    
    "email": "johnny37@gmail.com",
    
    "phone": "555-555-5555",
    
    "occupation": "Web Developer"
}
        </code></pre>
    
    <span id="view-docs-link"><a href="./resources/docs/getting-started.html">View Documentation</a></span>
        `;

    /*
    fetch("/api/user")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.querySelector("#get-user-result").innerHTML = JSON.stringify(data);
        });
    */

    getUserResult.style.height = "440px";
  });
