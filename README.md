# Carbon Design System

This package implements the [Carbon Design System](https://www.carbondesignsystem.com/) from IBM in Framer.

## Components

Most of the components from Carbon have already been implemented. Utility components which are not useful for prototyping have been excluded.

## Documentation

The [Carbon Design System documentation site](https://www.carbondesignsystem.com/components/overview) is a great place to get started when working with these components. You won't always see a 1:1 mapping of the properties of the underlying components to [Framer Property Controls](https://www.framer.com/support/using-framer/property-control-code-component/) but it should give you a good indication of what's already possible.

## Overriding Component Properties

If you cannot control a certain property of a component using Framer's [Property Controls](https://www.framer.com/api/property-controls/), you can override the property using [Code Overrides](https://www.framer.com/support/using-framer/code-overrides/). Overrides allow you to change the properties of a component in the preview window (they do not run on the canvas) by using a JavaScript function that returns a new set of props which will then be applied to the underlying React component. This is useful if you want to capture the value of an input element or make components talk to each other using the [Data](https://www.framer.com/api/data/) object.

## Theming

Theming support is coming soon.

## Forking this project

If you would like to base your Framer package off of this one, you can fork this repository.

By default, when you open the project in Framer Desktop, it will be automaticaly linked to the [public Framer package](https://packages.framer.com/package/iain/carbon-design-system) for Carbon. This will mean you'll be unable to publish any updates to it, or publish it to your [private team packages](https://www.framer.com/support/using-framer/packages/).

By executing a small bash script included with this project, you can strip away any metadata that references this project to an existing Framer package, allowing you to publish it yourself to a different location.

1. Ensure you have [jq](https://stedolan.github.io/jq/) installed and in your system's `$PATH`
2. Fork this repository
3. Run `yarn run fork`
4. This will remove the `framer`, `name` and `version` keys from `package.json`
5. Open this project in Framer Desktop
6. Click **_File -> Publish Package_**
7. You should now be able to publish this project to a new package

## Issues/Bugs

This project is currently being maintained by [Iain](https://github.com/iKettles) from the Framer Team. Feel free to create an issue in the [GitHub repository](https://github.com/iKettles/carbon-design-system.framerfx) if you run into any issues.

## Latest Release

### **1.9.0 - 03/08/2020**

- Added a color property control to the `Typography` component
- Typography styles are now sorted alphabetically

## Previous Releases

### **1.8.0 - 30/07/2020**

- Added a basic `Typography` component with text styles inherited from `@carbon/type`

### **1.7.0 - 30/07/2020**

- Added the [Carbon color palette](https://www.carbondesignsystem.com/guidelines/color/overview/) as [Framer Shared Colors](https://www.framer.com/support/using-framer/shared-colors/)
- Fixed a bug that caused the `Checkbox` component to not change state when clicked
- Added some example components to the canvas of this project
- Simplified usage of the `Header` component
- Removed the `HeaderGlobalAction` component in favour of setting it via a property control on the `Header`
- Fixed a bug that caused the connected content of an `Accordion` to not be positioned correctly
- Added a property control to configure the open/closed state of Accordion items
- Added a text area property control to various components
- Renamed/reordered various property controls for brevity
- Added event handlers to the `InlineNotification`, `ToastNotification`, `Select`, `Link`, `Tag`, `Tabs`, `ContentSwitcher` and `TextInput` components to be used with Framer's [Interactions](https://www.framer.com/support/using-framer/interactions/)
- Fixed the default size of the `Tag` component when first inserted on the canvas
- Components with optional label/caption/subtitle properties now have a property control to configure whether it is shown (previously you would need to clear the input field to achieve this)
- Fixed some rendering glitches on the canvas when certain properties of the `ToastNotification` were changed
- Fixed a bug that caused toggling the `Toggle` component on/off to have no effect
- Fixed a bug that caused connected content to the `Tooltip` component to render incorrectly
- Added a default show/hide property control to the `Tooltip` component. This will not display on the canvas due to it using a React Portal which causes it to be absolutely positioned on the canvas.
- Reduced the noise created by components logging events

### **1.6.0 - 06/07/2020**

- Fixed the `onTap` event not firing for the `Button` component

### **1.5.0 - 06/07/2020**

- Fixed the label property control for the `Select` component having no effect

### **1.4.0 - 06/07/2020**

- Added support for a password type on the `TextInput` component

### **1.3.0 - 24/06/2020**

- Modified the `carbon-components.css` stylesheet to prevent it overriding Framer's UI

### **1.2.0 - 06/05/2020**

- Initial publish of Framer package
