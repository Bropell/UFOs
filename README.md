# UFOs
## Project Overview
The purpose of this project is to build a table with created filters, to make the table fully dynamic, 
from UFO sighting data stored in a JavaScript array. The table was placed into an HTML file for easy viewing. 
The challenge specifically focused on providing a more in-depth analysis of the UFO sightings by allowing users
to filter for multiple criteria at the same time. The code was refactored and the HTML file was adjusted to 
accommodate for the additional filters.
## Results
Using the filters on the webpage is very simple and the filter functions will automatically begin filtering the
data once information is entered into the boxes. A visual walkthrough is provided below starting with the 
unfiltered webpage which displays all of the data.
![alt text](https://github.com/Bropell/UFOs/blob/main/static/images/webpage_unfiltered.png)

Below is an example of what data would be displayed if a single filter was applied for the city set to "el cajon".
There are five rows of data that match this criteria. 
![alt text](https://github.com/Bropell/UFOs/blob/main/static/images/webpage_one_filter.png)

Adding an additional filter for the shape set to "triangle" narrows the search even further. As seen in the image
below, there are two rows of data that match the criteria with two filters applied. 
![alt text](https://github.com/Bropell/UFOs/blob/main/static/images/webpage_multi_filter.png)

If there are no results that match the filter criteria, the table will not display any rows of data which can be
seen in the image below where the country was set to "ru".
![alt text](https://github.com/Bropell/UFOs/blob/main/static/images/webpage_no_match.png)
## Summary
Although this webpage has a clean and useful design, there are some drawbacks that leave room for further improvements.
One major drawback of the new design is that the dataset is very limited and filters such as "country" are relatively useless
because only two rows contain data from other countries. Therefore, one major improvement would be including data from 
other countries such that all the filters can be used more efficiently. Another possible improvement would be putting the table inside a window with a set size and scrollbar so the user can maintain a visual on the filter criteria while simultaneously 
viewing the actual data. This would be especially useful if the dataset was larger and more rows were returned after filtering.