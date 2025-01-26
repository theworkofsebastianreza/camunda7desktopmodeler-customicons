# Camunda Desktop Modeler Plugin to render individual Icons in Camunda 7 Diagrams
This Plugin enables the Camunda Modeler to render individual icons for your task Template, (maybe) just like in Camunda 8.

## Create Element Template for Activitiy
<ol>
  <li>Use your own or edit the included Task template lightning_tasktemplate.json and adjust it to your needs. At the moment, this is an external task that publishes to a certain topic.</li>
  <li>The Icon can be adapted with the Icon property as in the documentation of Camunda 8 https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/defining-templates/</li>
  <li>Save that file  in the folder resources\element-templates of your Camunda Desktop Modeler.</li>
</ol>

## Install Plugin for the Desktop Modeler
<ol>
  <li>Place the folder C7CustomIcon into the folder of your Desktop Modeler: \resources\plugins e.g. resources\plugins\C7CustomIcon</li>
  <li>Restart the Desktop Modeler</li>
</ol>

## Change the plugin
<ol>
  <li>If you want to make changes to the Plugin and want to see them, you have to run 'npm install' first in the C7CustomIcon folder, that lies within resources\plugins</li>
  <li>The main file to work in, is [/client/C7CustomIcon.js](https://github.com/theworkofsebastianreza/camunda7desktopmodeler-customicons/blob/main/C7CustomIcon/client/C7CustomIcon.js)</li>
  <li>After you have made your changes, run 'npm run bundle' in the above mentiones Plugin folder.</li>
  <li>Don´t forget to write here about your cool new features/ideas! The other Camunda 7 Faans surely will be grateful :-)</li>
</ol>

## Start using your own Icons for Plugins in Camunda 7!
Start up your Desktop Modeler. Start a new Camunda 7 Diagram and add an Activity. Apply the template. You should now see the individual icon.
At the moment this just works for plain activities (so don´t select User / Service / ScritTask as type)

![Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler](/1.jpg "Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler")
![Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler](/2.jpg "Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler")
![Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler](/3.jpg "Your own Icon in Camunda 7 Activities/Tasks in Desktop Modeler")
