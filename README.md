# sharepoint-online-boilerplate

#### A boilerplate for custom theme development of Sharepoint Online sites

This repository is intended to provide a basic architecture for custom styling of a Sharepoint Online site with publishing features enabled. It includes files for task runners to compile sass, and create a styleguide. And also introduces a modular approach to theminng page layouts, and any widgets that are not out of the box.

#### Is it necessary?

Let's not be dogmatic in saying this is the best approach. There are no hard and fast rules about front end setup for a sharepoint project. This boilerplate can save setup time especially when the design calls for highly customized layouts and widgets. A front end framework of choice, custom grid, or no grid at all can easily be integrated into this architecture along with icon systems and custom fonts. It also automatically generates a styleguide.

## Getting Started

#### Dependencies

Ensure you have the following installed on your machine before you can begin using the boilerplate:
- node
- sass
- grunt (and dependent modules) 
- kss

#### Installation

1. Clone this repo
2. In gruntfile.js, update `localDir` width the location of these files. (ie: if your grunt file is in the same directory as the 'sass' folder, leave this blank) 
3. Update `sharepointDir` with the location of the [mapped drive](https://support.microsoft.com/en-us/kb/2616712) for the sharepoint site.
4. In the gruntfile, update the title of the styleguide under the 'kss' task options.
5. Run the default grunt task with `grunt`

##### Using the masterpages #####

A set of blank masterpages are included in this repository. These require some customization and are not ready for immediate use. Uncomment the paths to custom stylesheets, favicon, and variables file located in the header.
