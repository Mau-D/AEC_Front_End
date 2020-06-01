//filtreEtGraphique.js
//Maud Harvey
//23 mai 2020

//Tri le tableau en ordre alphabétique
function trierOrdreAlpha() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("monTableauFilm");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

//Trier en ordre de parution
function trierOrdreParution() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("monTableauFilm");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
//Fonction pour afficher le dropdown
function afficherDropdown() {
    document.getElementById("contenuDropdown").style.display="block"
}
//Rechercher dans le dropdown
function rechercheDropdown() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("recherche");
    filter = input.value.toUpperCase();
    div = document.getElementById("contenuDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
//Graphique en pointe de tarte
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Catégorie financière ($US)', '% de la population'],
        ['<10 000$>',     73.3],
        ['10 000 à 100 000$',      18.5],
        ['100 000 à 1 million$',  7.5],
        ['>1 million$', 0.7],

    ]);
    //Configuration du graphique
    var options = {
        'title': 'Répartition de la population selon leur catégorie financière',
        'width': 900,//Modification de la grosseur du graphique
        'height': 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
//Graphique de ligne courbe(Linear chart
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Âge', 'École', 'Dépenses', 'Amour','Sens de la vie'],
        ['0',  0, 0, 0, 0],
        ['10',  10, 0, 0, 0],
        ['20',  30, 30, 30, 10],
        ['30',  10, 20, 20, 50],
        ['40',  0, 50, 20, 30],
        ['50',  0, 40, 30, 30],
        ['60',  0, 30, 20, 20],
        ['70',  0, 20, 10, 10],
        ['80',  0, 20, 5, 5],
        ['90',  0, 10, 0, 0],
        ['100',  0, 0, 0, 0],

    ]);

    var options = {
        title: 'Sources de stress en fonction de votre âge',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}