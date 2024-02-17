# Components structure & Hierarchy

> We’re not designing pages, we’re designing systems of components.—Stephen Hay

We follow atomic design of components and they are structured in this fashion.

* **Components**: All our components will reside here. The folder will be divided into Atoms, Molecules, Organisms and Templates.
  * **Atoms**: <br>
    Atoms are the basic building blocks of matter applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.
    Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations. Atoms should be developed in such a way that they can be used in any projects
    e.g. Button, Input, Modal etc and it should be dumb component.
  * **Molecules**: <br> Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.
    For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.
    Building up to molecules from atoms encourages a “do one thing and do it well” mentality. While molecules can be complex, as a rule of thumb they are relatively simple combinations of atoms built for reuse.
    In code setup e.g. are Editor, Filtergrid, Flyout menu, navigation-bar etc.
  * **Organisms**: <br> Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.
  * **Templates**: <br>At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.<br>Templates are very concrete and provide context to all these relatively abstract molecules and organisms. Templates are also where clients start seeing the final design in place. In experience working with this methodology, templates begin their life as HTML wireframes, but over time increase fidelity to ultimately become the final deliverable.

### Structure and contents of a component

**Function vs Feature** <br>
There are two established approaches of structuring applications: function-first and feature-first.

Function-first means that your top-level directories are named after the purpose of the files inside. So you have: pages, components, styles, config, etc.

Feature-first means that you break them down into feature and keep all files associated with them, within them.

And we will be following that approach where tests, types and all files associated with the component, be it page level or atoms will reside with themselves.
