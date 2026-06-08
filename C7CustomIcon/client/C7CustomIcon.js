class C7CustomIcon {
    constructor(eventBus, elementRegistry, graphicsFactory, elementTemplates) {
        this.eventBus = eventBus;
        this.elementRegistry = elementRegistry;
        this.graphicsFactory = graphicsFactory;
        this.elementTemplates = elementTemplates;

        this.eventBus.on('element.changed', 500, (event) => {
            const element = event.element;
            if (element.type === 'bpmn:Task' || element.type === 'bpmn:ServiceTask') {
                this.changeIcon(element);
            }
        });

        this.eventBus.on('import.done', () => {
            this.elementRegistry.forEach((element) => {
                if (element.type === 'bpmn:Task' || element.type === 'bpmn:ServiceTask') {
                    this.changeIcon(element);
                }
            });
        });
    }

    changeIcon(element) {
        const businessObject = element.businessObject;
        const gfx = this.elementRegistry.getGraphics(element.id);
        if (gfx) {
            const templateId = businessObject.modelerTemplate;
            const template = templateId ? this.elementTemplates.get(templateId) : null;

            if (template && template.icon && template.icon.contents) {
                this.addCustomIcon(element, template.icon.contents);
            } else {
                let existingIcon = gfx.querySelector('.c7customicon');
                if (existingIcon) {
                    gfx.removeChild(existingIcon);
                }
                // Restaura paths da engrenagem
                const visual = gfx.querySelector('.djs-visual');
                if (visual) {
                    visual.querySelectorAll('path').forEach(p => p.style.display = '');
                }
            }
        }
    }

    addCustomIcon(element, svgData) {
        const gfx = this.elementRegistry.getGraphics(element.id);
        if (gfx) {
            let existingIcon = gfx.querySelector('.c7customicon');
            if (existingIcon) {
                gfx.removeChild(existingIcon);
            }

            const visual = gfx.querySelector('.djs-visual');
            if (visual) {
                visual.querySelectorAll('path').forEach(p => p.style.display = 'none');
            }

            const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            image.setAttributeNS(null, 'href', svgData);
            image.setAttributeNS(null, 'x', '5');
            image.setAttributeNS(null, 'y', '5');
            image.setAttributeNS(null, 'width', '20');
            image.setAttributeNS(null, 'height', '20');
            image.setAttribute('class', 'c7customicon');
            image.setAttributeNS(null, 'pointer-events', 'none');

            gfx.appendChild(image);
        }
    }
}

C7CustomIcon.$inject = [
    'eventBus',
    'elementRegistry',
    'graphicsFactory',
    'elementTemplates'
];

export default {
    __init__: ['C7CustomIcon'],
    C7CustomIcon: ['type', C7CustomIcon]
};