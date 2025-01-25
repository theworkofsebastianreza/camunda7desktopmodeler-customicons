# Camunda Desktop Modeler Plugin to render individual Icons in Camunda 7 Diagrams
This Plugin enables the Camunda Modeler to render individual tasks, just like in Camunda 8.

Edit the included Task template lightning_tasktemplate.json and adjust it to your needs. The Icon can be adapted with the Icon property as in the documentation of Camunda 8 https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/defining-templates/

Save that file  in the folder resources\element-templates of your Camunda Desktop Modeler.
Then place the content of this repo in a Sub-Folder of \resources\plugins e.g. resources\plugins\C7CustomIcon

Start up your Desktop Modeler. Start a new Camunda 7 Diagram and add an Activity. Apply the template. You should now see the individual icon.
At the moment this just works for plain activities (so don´t select User / Service / ScritTask as type)
