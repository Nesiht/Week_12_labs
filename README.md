# Creating a react component

Create a react card component with a onClick event that triggers a state change to rerender data using conditional rendering.

Styling and CSS effects should follow this design. [Design](https://www.figma.com/file/WQlcE8c17JEZ1mgMEBw71i/Card-Component-Lab?node-id=0%3A1)

You should create a card component that uses props to look differently depending on title, subtitle, emoji, primary and secondary color, button color, button text color and button text.


## The problem / Solution

Stored each value for each design as *objects* inside *array* called **settings** in *App.js* so it´s possible to map  thru the array when mounting each card.

Created a *Card.js* component then using each *prop* to create the first design and display each title/text strings and passing props as inline styles on proper element.

Created a *state* called **clicked** and used conditional rendering do change from first design to the next design when button is clicked.

Using *position: absolute* to be able to create the CSS hover effects on each part of the second design.

## View it live
[Link](https://peaceful-ritchie-3390a6.netlify.com/)