---
date: 17 December 2014
author: Rich Cook
---

Number One Son (v 0.0.2) development site for TalesofMurder.com

Based on the static, non-JekyllRB site (repo: NOS_flat), this is the full JekyllRB development of the site. 

##Repo Structure
The site is a standard Jekyll (cmdln: jekyll new [sitename]) set up with standard folders and files. Outline below:

##Development
??

##Other stuff to be added as relevant
--




##CSS/SCSS Folder Structure

:::text
sass/
|
|--partials/					# ALL SUB-FILES
|	|--base/						# BOILERPLATE
|		|-- _reset.scss 			# browser reset
|		|-- _base.scss 				# base settings for mobile or simple browsers
|		|-- _fonts.scss 			# font imports
|		|-- _variables.scss 		# variables

|		...
|			
|	|--layout/ 						# STYLING & STRUCTURE
|		|-- _grid.scss 				# grid components ... also see v/b/_neat.scss
|		|-- _header.scss 			# header
|		|-- _main.scss 				# main section (for Page variations)
|		|-- _footer.scss 			# footer
|		|-- _sidebar.scss 			# sidebars
|		|-- _forms.scss 			# forms
|		|-- _typography.scss 		# typography
|		|-- _buttons.scss 			# buttons
|		...
|
|	|--modules/ 					# DISCRETE PAGE COMPONENTS 
|		|-- _shortstory.scss 		# overall story box
|		|-- _storymeta.scss 		# story meta box
|		...
|		
|	|--utils/ 						# HELPERS & ADD-ONS
|		|-- _functions.scss 		# functions
|		|-- _mixins.scss 			# mixins
|		|-- _helpers.scss 			# helpers
|		...
|
|	|--vendor/ 						# VENDOR SCSS ... NOT TO BE EDITED!!
|		|--bourbon/
|			|-- _bourbon.scss 		# bourbon mixins 
|			|-- _neat.scss 			# grid mixins
|			|-- _bitters.scss 		# style scaffold & variables ... overridden by own above!
|			|-- _refills.scss 		# styles for prepackaged patterns
|		...
|
`--main.scss









