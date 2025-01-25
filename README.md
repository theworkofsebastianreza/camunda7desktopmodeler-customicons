# Camunda Desktop Modeler Plugin to render individual Icons in Camunda 7 Diagrams
This Plugin enables the Camunda Modeler to render individual icons for your task Template, (maybe) just like in Camunda 8.

## Create Element Template for Activitiy
<ol>
  <li>Use your own or edit the included Task template lightning_tasktemplate.json and adjust it to your needs. At the moment, this is an external task that publishes to a certain topic.</li>
  <li>The Icon can be adapted with the Icon property as in the documentation of Camunda 8 https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/defining-templates/</li>
  <li>Save that file  in the folder resources\element-templates of your Camunda Desktop Modeler.</li>
</ol>

## Add Plugin to the plugins folder
<ol>
  <li>Place the folder C7CustomIcon into \resources\plugins e.g. resources\plugins\C7CustomIcon</li>
  <li>If you make changes and want to see them, you have to run 'npm run bundle' (Make sure to run 'npm install' first)</li>
</ol>

## Start using your own Icons for Plugins in Camunda 7!
Start up your Desktop Modeler. Start a new Camunda 7 Diagram and add an Activity. Apply the template. You should now see the individual icon.
At the moment this just works for plain activities (so don´t select User / Service / ScritTask as type)

![Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler](/1.jpg "Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler")
![Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler](/2.jpg "Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler")
![Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler](/3.jpg "Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler")
