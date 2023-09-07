document.addEventListener('DOMContentLoaded', function () {
  // Array of band names
  let bandNames = [
    'The Rolling Stones',
    'The Beatles',
    'Aerosmith',
    'Led Zeppelin',
  ];

  // Function to remove articles and sort the band names
  function sortBandNames(names) {
    // Define a function to remove articles from a name
    function removeArticles(name) {
      return name.replace(/^(the|a|an)\s+/i, ''); // Case-insensitive removal of articles
    }

    // Sort the names without articles
    names.sort((a, b) => {
      const nameA = removeArticles(a);
      const nameB = removeArticles(b);
      return nameA.localeCompare(nameB);
    });

    return names;
  }

  // Sort the band names without articles
  const sortedBandNames = sortBandNames(bandNames);

  // Get the ul element with the id 'bands'
  const bandList = document.getElementById('bands');

  // Loop through the sorted band names and add them as list items to the ul
  sortedBandNames.forEach((bandName) => {
    const listItem = document.createElement('li');
    listItem.textContent = bandName;
    bandList.appendChild(listItem);
  });
});
