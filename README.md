# wats1020-validating-form-data
An assignment designed to illustrate the process of validating form data with Javascript.

For this project you are given an HTML file containing a form. The HTML is
commented to indicate the validation requirements for each form field. You must
create a Javascript function (or functions) to validate the form fields
according to the requirements.

In addition to the basic validation requirements, you must also add content to
the HTML and/or JS to inform users of what has gone wrong in validation. You
should provide helpful responses so users can fix the issues with their data and
successfully complete the form submission process.

Your HTML file is already plugged in to Bootstrap CSS and JS, jQuery, and a
`main.js` file where you can write your custom code. The jQuery Validation plugin
has also been added to the project, so you can use that to help your validation.

**NOTE:** You will need to alter the HTML and JS to make everything work the way
that the validation plugin wants things set up. Review the tutorials, docs, and
demos available on [jqueryvalidation.org](http://jqueryvalidation.org/).

More information about jQuery Validation can be found on their website:
[jqueryvalidation.org](http://jqueryvalidation.org/). You may wish to consult the
[validation rules docs](http://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods), 
as well as the list of additional rules that comes after the default rules. The additional rules Javascript
file is included in this repository, so you can use those methods with no additional work.

## Basic Requirements

To complete this assignment, the following requirements must be met:

* When a user clicks "Check Out", the `form` should be validated according to the
  requirements outlined in the comments within the HTML file.
* Errors should be highlighted in a clear manner so users can easily fix any
  problems (you will need to add messages via JS or in the HTML).
* If the `form` passes validation, it should be submitted to the `action` destination
  of the `form`.

## Stretch Goals

If you wish to pursue a little more of a challenge, you should attempt these
stretch goals:

* Invoke the [Bootstrap Tooltips](http://getbootstrap.com/javascript/#tooltips)
  component to make the question mark icons more nicely display their tips when
  users hover over them.
* Enhance the styling of your errors and alerts so that users experience a very
  elegant validation process.
* Enhance the styling and layout of the form itself so users experience a very
  elegant `form`.

## Solution files

Solutions are provided in `js/solution.js` and `/solution.html` for the purpose
of helping you get un-stuck if you get stuck. Please refrain from consulting the
solutions too much so you aren't just copying from one file to another.

Solutions are especially helpful to look at once you've actually succeeded at the
assignment. Seeing how somebody else approached the same task is very helpful
for improving your coding skills.
