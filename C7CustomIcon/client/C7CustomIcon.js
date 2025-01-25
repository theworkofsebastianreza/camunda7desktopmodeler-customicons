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

    // Get the element template and check if it has an icon
    const templateId = businessObject.modelerTemplate;
    const template = templateId ? this.elementTemplates.get(templateId) : null;

    if (template && template.icon && template.icon.contents) {
      const svgData = template.icon.contents;

      // Add the Icon
      this.addCustomIcon(element, svgData);
    }
  }

  addCustomIcon(element, svgData) {
    // Get Graphics of Element
    const gfx = this.elementRegistry.getGraphics(element.id);

    // Check if Icon already exists
    let existingIcon = gfx.querySelector('.custom-icon');
    if (existingIcon) {
      gfx.removeChild(existingIcon); // Remove old Icon
    }

    // Create a new <image>-Element for the icon
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttributeNS(null, 'href', svgData);
    image.setAttributeNS(null, 'x', '5'); // Position relative to Task-Box
    image.setAttributeNS(null, 'y', '5'); // Position relative to Task-Box
    image.setAttributeNS(null, 'width', '20'); // Width of Icons
    image.setAttributeNS(null, 'height', '20'); // Height of Icons
    image.setAttribute('class', 'custom-icon'); // Class to identify

    // Prevent that Icon blocks interactions
    image.setAttributeNS(null, 'pointer-events', 'none');

    // Add icon to graphical element
    gfx.appendChild(image);
  }
}

// Injection-Dependencies for bpmn-js
LoggingPlugin.$inject = [
  'eventBus',
  'elementRegistry',
  'graphicsFactory',
  'elementTemplates'
];

// export Plugin
export default {
  __init__: ['C7CustomIconPlugin'],
  C7CustomIcon: ['type', C7CustomIcon]
};