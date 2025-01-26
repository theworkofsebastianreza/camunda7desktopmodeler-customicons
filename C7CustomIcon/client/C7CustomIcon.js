class C7CustomIcon {
  constructor(eventBus, elementRegistry, graphicsFactory, elementTemplates) {
    this.eventBus = eventBus;
    this.elementRegistry = elementRegistry;
    this.graphicsFactory = graphicsFactory;
    this.elementTemplates = elementTemplates;

    // Event-Listener to check for changes in elements
    this.eventBus.on('element.changed', (event) => {
      const element = event.element;

      // Check if Element is a Task
      if (element.type === 'bpmn:Task') {
		this.changeIcon(element);
      }
    });
  }

  changeIcon(element) {
    const businessObject = element.businessObject;
	const gfx = this.elementRegistry.getGraphics(element.id);
	
    // Get the element template and check if it has an icon
    const templateId = businessObject.modelerTemplate;
    const template = templateId ? this.elementTemplates.get(templateId) : null;

    if (template && template.icon && template.icon.contents) {
      const svgData = template.icon.contents;
      // Add the Icon
      this.addCustomIcon(element, svgData);
    }
	else { 
		// Check if Icon already exists
		let existingIcon = gfx.querySelector('.c7customicon');
		if (existingIcon) {
		  gfx.removeChild(existingIcon); // Remove old Icon
		}
	}
  }

  addCustomIcon(element, svgData) {
    // Get Graphics of Element
    const gfx = this.elementRegistry.getGraphics(element.id);

    // Create a new <image>-Element for the icon
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttributeNS(null, 'href', svgData);
    image.setAttributeNS(null, 'x', '5'); // Position relative to Task-Box
    image.setAttributeNS(null, 'y', '5'); // Position relative to Task-Box
    image.setAttributeNS(null, 'width', '20'); // Width of Icons
    image.setAttributeNS(null, 'height', '20'); // Height of Icons
    image.setAttribute('class', 'c7customicon'); // Class to identify

    // Prevent that Icon blocks interactions
    image.setAttributeNS(null, 'pointer-events', 'none');

    // Add icon to graphical element
    gfx.appendChild(image);
  }
}

// Injection-Dependencies for bpmn-js
C7CustomIcon.$inject = [
  'eventBus',
  'elementRegistry',
  'graphicsFactory',
  'elementTemplates'
];

// export Plugin
export default {
  __init__: ['C7CustomIcon'],
  C7CustomIcon: ['type', C7CustomIcon]
};