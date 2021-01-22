function buka() {
            document.getElementById("muter").innerHTML = "loading...";
            document.getElementById("muter").setAttribute("disabled", "true");
            axios.get('https://raw.githubusercontent.com/alaikal/SI-ASIAP/master/kehadiran')
                .then(function (response) {
                    let template = response.data.map(post => {
                        return `
                        <h3>${post.nama}</h3>
                        <p>${post.body}</p>
                        <hr>
                        `
                    }).join("");

                    document.getElementById("result").innerHTML = template;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    document.getElementById("muter").innerHTML = "KEMBALI";
                    document.getElementById("muter").removeAttribute("disabled");
                });
        }